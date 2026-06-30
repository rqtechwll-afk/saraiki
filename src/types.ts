/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CultureSection {
  id: string; // e.g., 'history', 'poetry'
  title: string;
  tagline: string;
  introduction: string;
  history: string;
  importance: string;
  images: string[];
  facts: string[];
  faqs: { question: string; answer: string }[];
  relatedArticles: string[]; // ids of blog posts
  seoMeta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface City {
  id: string; // e.g., 'multan', 'bahawalpur'
  name: string;
  tagline: string;
  history: string;
  geography: string;
  touristAttractions: {
    name: string;
    description: string;
    image: string;
    type: 'Shrine' | 'Historical' | 'Museum' | 'Park' | 'Sufi' | 'Other';
  }[];
  traditionalFoods: string[];
  localCulture: string;
  hotels: { name: string; rating: number; contact: string; image: string }[];
  restaurants: { name: string; rating: number; cuisine: string; image: string }[];
  gallery: string[];
  mapEmbedUrl: string; // fallback if map is simulated
  coordinates: { lat: number; lng: number };
}

export interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  date: string;
  approved: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'History' | 'Tourism' | 'Poetry' | 'Lifestyle' | 'Events' | 'Heritage';
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  featuredImage: string;
  date: string;
  readingTime: string;
  comments: Comment[];
  views: number;
  likes: number;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  city: string;
  image: string;
  category: 'Festival' | 'Sufi' | 'Exhibition' | 'Workshop' | 'Concert';
  organizer: string;
  registeredCount: number;
}

export interface DirectoryEntry {
  id: string;
  name: string;
  category: 'Hotels' | 'Restaurants' | 'Museums' | 'Handicraft Shops' | 'Tour Guides' | 'Cultural Centers' | 'Libraries';
  city: string;
  description: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  rating: number;
  image: string;
  approved: boolean;
}

export interface User {
  username: string;
  email: string;
  role: 'admin' | 'user';
  favorites: string[]; // list of blogpost or culture ids
  submittedArticles: any[];
  submittedEvents: any[];
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  email: string;
  phone: string;
  allowUserSubmissions: boolean;
  enableMaintenanceMode: boolean;
  seoTitleTemplate: string;
  seoDescription: string;
}
