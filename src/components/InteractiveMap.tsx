/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { MapPin, Compass, Search, ExternalLink, X, Sun, Cloud, Thermometer, Map as MapIcon, Landmark } from 'lucide-react';
import { City } from '../types';
import { citiesData } from '../data/citiesData';

interface InteractiveMapProps {
  onSelectCity: (cityId: string) => void;
  isDarkMode: boolean;
}

export default function InteractiveMap({ onSelectCity, isDarkMode }: InteractiveMapProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<City | null>(citiesData[0]);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);

  // Map coordinate projections
  // South Punjab bounding box roughly:
  // Lat: 28.0 to 31.5 (Bottom to Top)
  // Lng: 70.0 to 72.5 (Left to Right)
  const mapWidth = 500;
  const mapHeight = 550;

  const projectCoordinates = (lat: number, lng: number) => {
    // Standard Mercator-like custom linear projection for bounding box
    const minLat = 28.0;
    const maxLat = 31.5;
    const minLng = 70.0;
    const maxLng = 72.5;

    // Map latitude to Y (inverted since Y is 0 at top)
    const y = mapHeight - ((lat - minLat) / (maxLat - minLat)) * mapHeight;
    // Map longitude to X
    const x = ((lng - minLng) / (maxLng - minLng)) * mapWidth;

    return { x, y };
  };

  const filteredCities = useMemo(() => {
    return citiesData.filter(city =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Mock weather temperature simulator based on month & latitude
  const getSimulatedWeather = (lat: number) => {
    const isSummer = new Date().getMonth() >= 4 && new Date().getMonth() <= 8;
    const temp = Math.floor(isSummer ? 38 + (30 - lat) : 18 + (30 - lat));
    return {
      temp,
      condition: isSummer ? 'Sunny' : 'Clear & Breezy',
      icon: isSummer ? Sun : Cloud
    };
  };

  return (
    <div id="interactive-map-container" className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-stone-200/60 dark:border-zinc-800/80 p-6">
      {/* Search and List Side panel */}
      <div id="map-side-panel" className="lg:col-span-4 flex flex-col h-[550px]">
        <div className="mb-4">
          <h3 className="font-display text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
            <MapIcon className="text-saraiki-maroon h-5 w-5" />
            Interactive Heritage Map
          </h3>
          <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">
            Explore 10 historical cities of South Punjab along the Indus and Chenab rivers.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search cities or shrines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-100 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700 rounded-xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-saraiki-maroon focus:border-transparent dark:text-zinc-100"
          />
          <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-stone-400 dark:text-zinc-500" />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600 text-xs">
              Clear
            </button>
          )}
        </div>

        {/* City List */}
        <div className="overflow-y-auto flex-1 no-scrollbar space-y-2 pr-1">
          {filteredCities.map((city) => {
            const isSelected = selectedCity?.id === city.id;
            return (
              <div
                key={city.id}
                onClick={() => setSelectedCity(city)}
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? 'bg-maroon-50/75 dark:bg-maroon-950/20 border-saraiki-maroon text-saraiki-maroon'
                    : 'bg-stone-50 dark:bg-zinc-800/20 hover:bg-stone-100 dark:hover:bg-zinc-800/40 border-stone-100 dark:border-zinc-800'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  isSelected ? 'bg-saraiki-maroon text-white' : 'bg-stone-200/70 dark:bg-zinc-700/50 text-stone-500 dark:text-zinc-400'
                }`}>
                  <Landmark className="h-4.5 w-4.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-stone-800 dark:text-zinc-200 truncate">{city.name}</h4>
                  <p className="text-xs text-stone-500 dark:text-zinc-400 truncate">{city.tagline}</p>
                </div>
                <div className="text-[10px] font-mono text-stone-400 dark:text-zinc-500 hidden sm:block">
                  {city.coordinates.lat.toFixed(1)}°N, {city.coordinates.lng.toFixed(1)}°E
                </div>
              </div>
            );
          })}
          {filteredCities.length === 0 && (
            <div className="text-center py-8 text-stone-500">No cities match your search.</div>
          )}
        </div>

        {/* Selected City Drawer Card */}
        {selectedCity && (
          <div className="mt-4 p-4 rounded-2xl bg-stone-50 dark:bg-zinc-800/40 border border-stone-200/50 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-display font-bold text-lg text-saraiki-maroon dark:text-maroon-400">{selectedCity.name}</h4>
                <div className="flex items-center gap-1.5 text-xs bg-stone-200/50 dark:bg-zinc-800 px-2 py-0.5 rounded-full text-stone-600 dark:text-zinc-400">
                  {React.createElement(getSimulatedWeather(selectedCity.coordinates.lat).icon, { className: "h-3.5 w-3.5" })}
                  <span>{getSimulatedWeather(selectedCity.coordinates.lat).temp}°C</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-zinc-300 mt-1.5 line-clamp-3">
                {selectedCity.history}
              </p>
              {selectedCity.touristAttractions.length > 0 && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-7 w-7 rounded bg-maroon-100 dark:bg-maroon-950/40 flex items-center justify-center text-saraiki-maroon dark:text-maroon-400">
                    <Landmark className="h-4 w-4" />
                  </div>
                  <div className="text-[11px] truncate">
                    <span className="font-medium text-stone-700 dark:text-zinc-300">Featured Site: </span>
                    <span className="text-stone-600 dark:text-zinc-400">{selectedCity.touristAttractions[0].name}</span>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => onSelectCity(selectedCity.id)}
              className="mt-4 w-full flex items-center justify-center gap-1.5 bg-saraiki-maroon hover:bg-maroon-800 text-white py-2 px-4 rounded-xl text-xs font-semibold transition-all duration-200"
            >
              Explore City Guide
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Interactive Map Visualizer */}
      <div id="map-visual-panel" className="lg:col-span-8 bg-stone-100 dark:bg-zinc-950/60 rounded-2xl border border-stone-200/40 dark:border-zinc-800/60 relative overflow-hidden flex items-center justify-center h-[550px]">
        {/* Map Background Grid/Decoration */}
        <div className="absolute inset-0 ajrak-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        
        {/* River, Coordinates, Map Grids */}
        <div className="absolute top-4 left-4 text-[10px] font-mono text-stone-400 dark:text-zinc-500 bg-white/70 dark:bg-zinc-900/60 p-1.5 rounded border border-stone-200/50 dark:border-zinc-800 pointer-events-none">
          REGION BOUNDS: 28°N - 31.5°N | 70°E - 72.5°E
        </div>

        {/* Compass */}
        <div className="absolute bottom-4 right-4 text-stone-400 dark:text-zinc-600 flex flex-col items-center">
          <Compass className="h-10 w-10 animate-spin-slow" />
          <span className="text-[9px] font-mono mt-1">S-PUNJAB</span>
        </div>

        {/* Main SVG Map Canvas */}
        <svg
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
          className="w-full h-full max-w-[500px] max-h-[550px] relative z-10 p-4"
        >
          {/* Coordinates Grid Lines */}
          <line x1="0" y1={mapHeight * 0.25} x2={mapWidth} y2={mapHeight * 0.25} stroke="currentColor" className="text-stone-300/40 dark:text-zinc-800/40" strokeDasharray="5,5" />
          <line x1="0" y1={mapHeight * 0.5} x2={mapWidth} y2={mapHeight * 0.5} stroke="currentColor" className="text-stone-300/40 dark:text-zinc-800/40" strokeDasharray="5,5" />
          <line x1="0" y1={mapHeight * 0.75} x2={mapWidth} y2={mapHeight * 0.75} stroke="currentColor" className="text-stone-300/40 dark:text-zinc-800/40" strokeDasharray="5,5" />
          <line x1={mapWidth * 0.33} y1="0" x2={mapWidth * 0.33} y2={mapHeight} stroke="currentColor" className="text-stone-300/40 dark:text-zinc-800/40" strokeDasharray="5,5" />
          <line x1={mapWidth * 0.66} y1="0" x2={mapWidth * 0.66} y2={mapHeight} stroke="currentColor" className="text-stone-300/40 dark:text-zinc-800/40" strokeDasharray="5,5" />

          {/* Indus River (Left Blue Path) */}
          <path
            d="M 50,0 Q 80,100 120,200 T 130,350 T 90,550"
            fill="none"
            stroke="#0f4c81"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.25"
          />
          <path
            d="M 50,0 Q 80,100 120,200 T 130,350 T 90,550"
            fill="none"
            stroke="#0f4c81"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <text x="70" y="80" fill="#0f4c81" fontSize="10" fontFamily="sans-serif" letterSpacing="1" opacity="0.6" transform="rotate(70 70 80)">INDUS RIVER</text>

          {/* Chenab River (Merging path from top right into Indus) */}
          <path
            d="M 450,50 Q 300,120 220,220 T 140,310 T 131,348"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.25"
          />
          <path
            d="M 450,50 Q 300,120 220,220 T 140,310 T 131,348"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <text x="320" y="100" fill="#14b8a6" fontSize="10" fontFamily="sans-serif" letterSpacing="1" opacity="0.6" transform="rotate(-15 320 100)">CHENAB RIVER</text>

          {/* Sutlej River (Merging path from right bottom into Chenab) */}
          <path
            d="M 490,450 Q 380,410 250,380 T 134,349"
            fill="none"
            stroke="#d4af37"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.25"
          />
          <path
            d="M 490,450 Q 380,410 250,380 T 134,349"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <text x="360" y="420" fill="#d4af37" fontSize="10" fontFamily="sans-serif" letterSpacing="1" opacity="0.6" transform="rotate(10 360 420)">SUTLEJ RIVER</text>

          {/* Interactive City Nodes */}
          {citiesData.map((city) => {
            const { x, y } = projectCoordinates(city.coordinates.lat, city.coordinates.lng);
            const isSelected = selectedCity?.id === city.id;
            const isHovered = hoveredCity?.id === city.id;

            return (
              <g
                key={city.id}
                className="cursor-pointer"
                onClick={() => setSelectedCity(city)}
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                {/* Outer Ring Animation / Hover effect */}
                {(isSelected || isHovered) && (
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 16 : 11}
                    fill="none"
                    stroke={isSelected ? "#800020" : "#0f4c81"}
                    strokeWidth="1.5"
                    className="animate-ping"
                    style={{ transformOrigin: `${x}px ${y}px`, animationDuration: '3s' }}
                  />
                )}

                {/* Shaded connection to represent coordinate target */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 8 : 5}
                  fill={isSelected ? "#800020" : "#0f4c81"}
                  className="transition-all duration-300"
                />

                {/* Inner white dot */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 3.5 : 2}
                  fill="#ffffff"
                />

                {/* City Name Label */}
                <text
                  x={x}
                  y={y - (isSelected ? 12 : 9)}
                  textAnchor="middle"
                  fontSize={isSelected ? "11.5" : "9.5"}
                  fontWeight={isSelected ? "bold" : "500"}
                  fill={isSelected ? "#800020" : (isDarkMode ? "#e4e4e7" : "#1c1917")}
                  className="transition-all duration-200"
                  style={{
                    textShadow: isDarkMode 
                      ? '0px 1px 3px rgba(0,0,0,0.9), 0px 1px 3px rgba(0,0,0,0.9)'
                      : '0px 1px 2px rgba(255,255,255,0.9), 0px 1px 2px rgba(255,255,255,0.9)'
                  }}
                >
                  {city.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Overlay */}
        {hoveredCity && (
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-stone-900/95 text-white py-2 px-3.5 rounded-xl text-xs pointer-events-none z-30 shadow-xl border border-zinc-700/80 max-w-xs transition-opacity duration-200"
          >
            <div className="font-bold flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-saraiki-gold" />
              {hoveredCity.name}
            </div>
            <div className="text-[10px] text-zinc-300 mt-0.5">{hoveredCity.tagline}</div>
          </div>
        )}
      </div>
    </div>
  );
}
