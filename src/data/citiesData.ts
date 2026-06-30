/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { City } from '../types';

export const citiesData: City[] = [
  {
    id: 'multan',
    name: 'Multan',
    tagline: 'The City of Saints and Shrines',
    history: 'Multan is one of the oldest continuously inhabited cities in Asia, dating back over 5,000 years. Known historically as Kashtpur, Hanspur, Bagpur, and Sanb, it was famous for its ancient Sun Temple. It was conquered by Alexander the Great in 326 BC (where he suffered a near-fatal wound) and later by Muhammad bin Qasim in 712 AD. It became a legendary center of Sufism in the 11th and 12th centuries, attracting scholars, poets, and mystics from all across the Islamic world, earning it the title "Madinat-ul-Auliya" (City of Saints).',
    geography: 'Situated on the banks of the Chenab River in South Punjab, Multan lies in a fertile alluvial plain. It is geographically positioned at the center of Pakistan, making it a critical hub for commerce, transportation, and agriculture. The climate is characterized by hot summers and mild, pleasant winters.',
    touristAttractions: [
      {
        name: 'Tomb of Shah Rukn-e-Alam',
        description: 'Built between 1320 and 1324, this magnificent octagonal shrine is an absolute masterpiece of early Indo-Islamic architecture. Its massive red-brick structure is ornamented with beautiful blue and white glazed tilework (Kashi Gari) and features one of the largest domes in Asia. It was awarded the Aga Khan Award for Architecture.',
        image: 'https://images.unsplash.com/photo-1590076212876-b6058e577d2f?auto=format&fit=crop&q=80&w=1200',
        type: 'Shrine'
      },
      {
        name: 'Tomb of Bahauddin Zakariya',
        description: 'The final resting place of the legendary 12th-century Sufi mystic who founded the Suhrawardiyya order in South Asia. This square-plan brick tomb with its elegant white dome stands inside the ancient Multan Fort, surrounded by historic ramparts.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
        type: 'Shrine'
      },
      {
        name: 'Multan Fort & Damdama',
        description: 'Perched on a high mound separating the old city from the modern cantonment, this ancient fort once housed grand palaces, temples, and barracks. While largely destroyed during the British siege of 1848-49, the towering Damdama (fortification block) offers a panoramic view of the ancient city.',
        image: 'https://images.unsplash.com/photo-1627894483216-2138af692e2e?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      },
      {
        name: 'Ghanta Ghar (Clock Tower)',
        description: 'Built during the British colonial period in 1884, this beautiful Victorian-gothic structure serves as the administrative center of the old city, housing municipal offices and a beautiful garden square.',
        image: 'https://images.unsplash.com/photo-1608958416802-cc9e830ebda4?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      }
    ],
    traditionalFoods: ['Multani Sohan Halwa (sticky, nutty traditional sweet)', 'Multani Sajji (skewered roasted chicken/mutton)', 'Chacha Bassi Lassi', 'Mangoes (especially Chaunsa, Anwar Ratol, and Sindhri)'],
    localCulture: 'Multan is the global heart of Kashi Gari (blue pottery) and Naqashi (camel skin lamp art). The Saraiki language spoken here is renowned for its extreme sweetness and rich proverbial heritage. The bazaars of the old city—such as Hussain Agahi and Chowk Bazaar—buzz with centuries-old artisans crafting exquisite khussas (embroidered shoes), pottery, and block-printed fabrics.',
    hotels: [
      { name: 'Ramada by Wyndham Multan', rating: 4.7, contact: '+92 61 4540877', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
      { name: 'Avari Express Multan', rating: 4.5, contact: '+92 61 4545555', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Baba Farid Sajji House', rating: 4.6, cuisine: 'Traditional Barbecue', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' },
      { name: 'Multani Handi Restaurant', rating: 4.4, cuisine: 'Saraiki & Desi Handi', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1590076212876-b6058e577d2f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1627894483216-2138af692e2e?auto=format&fit=crop&q=80&w=800'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Multan&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 30.1575, lng: 71.5249 }
  },
  {
    id: 'bahawalpur',
    name: 'Bahawalpur',
    tagline: 'The Princely State of Palaces',
    history: 'Bahawalpur was founded in 1748 by Nawab Bahawal Khan I of the Abbasi dynasty, who traced their ancestry to the Abbasid Caliphs of Baghdad. It flourished as a highly progressive, wealthy princely state. The Nawabs built spectacular palaces, libraries, and universities, and established a modern infrastructure. It was one of the first states to accede to Pakistan in 1947, bringing its vast wealth and Royal forces to support the young country.',
    geography: 'Located south of the Sutlej River, Bahawalpur is the gateway to the Cholistan Desert (locally called Rohi). The region is a stunning transition zone between highly fertile agricultural lands and dramatic golden desert dunes.',
    touristAttractions: [
      {
        name: 'Noor Mahal (Palace of Lights)',
        description: 'Built in 1872 by Nawab Sadiq Muhammad Khan IV, this spectacular Italianate chateau-style palace is a blend of neoclassical and islamic styles. Adorned with glittering crystal chandeliers, Corinthian pillars, beautiful archways, and a private royal ballroom, it is one of the most romantic historical monuments in Pakistan.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
        type: 'Historical'
      },
      {
        name: 'Derawar Fort',
        description: 'A colossal, breathtaking square fortress in the heart of the Cholistan Desert. Built by a Hindu Rajput ruler in the 9th century and restored by the Abbasi Nawabs in 1733, its forty towering bastions rise 30 meters above the desert floor and can be seen for miles around.',
        image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      },
      {
        name: 'Sadiq Dane High School & Central Library',
        description: 'Colonial Anglo-Saracenic masterpieces established by Nawab Sadiq V. The library houses over 100,000 books and a priceless collection of medieval Arabic and Persian manuscripts.',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
        type: 'Museum'
      },
      {
        name: 'Lal Suhanra National Park',
        description: 'One of South Asia\'s largest biosphere reserves, featuring a unique combination of desert dunes, forest plantation, and a vast lake sanctuary. It hosts endangered blackbucks, rhinos, and migratory waterfowl.',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&q=80&w=800',
        type: 'Park'
      }
    ],
    traditionalFoods: ['Cholistani Sajji (wood-fired pit barbecue)', 'Kunda Sweets', 'Rohi Kheer (slow-cooked desert milk pudding)', 'Camel Milk Lassi'],
    localCulture: 'Bahawalpur is famous for Cholistani embroidery, beautiful hand-woven Chunri (tie-dye) fabrics, and incredibly delicate clay pottery called "Kagazi Regh" (paper-thin clay cups) which are so light they can float on water.',
    hotels: [
      { name: 'Hotel One Bahawalpur', rating: 4.4, contact: '+92 62 2284701', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=400' },
      { name: 'PTDC Motel Bahawalpur', rating: 4.0, contact: '+92 62 9250170', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Kababish Restaurant', rating: 4.3, cuisine: 'Cholistani BBQ & Mughlai', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400' },
      { name: 'City Cafe & Grill', rating: 4.5, cuisine: 'Continental & Desi', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&q=80&w=800'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Bahawalpur&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 29.3544, lng: 71.6911 }
  },
  {
    id: 'dera-ghazi-khan',
    name: 'Dera Ghazi Khan',
    tagline: 'The Gateway to the Suleiman Ranges',
    history: 'Dera Ghazi Khan was founded in the late 15th century by Sardar Ghazi Khan Mirani, a powerful Baloch chieftain. It served as a vital cultural crossroads between Punjab, Balochistan, and Afghanistan. The historical old city was severely damaged by devastating Indus floods in 1908, prompting the planning and construction of a beautifully symmetrical modern city just a few miles west.',
    geography: 'Uniquely positioned between the Indus River to the east and the rugged, towering Suleiman Mountains to the west, DG Khan possesses a diverse topography ranging from flat green plains to high-altitude hill stations.',
    touristAttractions: [
      {
        name: 'Fort Munro (Anari Hill)',
        description: 'Perched at an altitude of 1,970 meters in the Suleiman Range, this is a gorgeous hill station and the coldest spot in South Punjab. Escaping the blazing summer heat, visitors flock here to enjoy pine forests, mountain trails, and the scenic Demis Lake.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
        type: 'Park'
      },
      {
        name: 'Tomb of Ghazi Khan',
        description: 'The ancient 16th-century octagonal tomb of the city\'s founder, Sardar Ghazi Khan. It is a stunning historical brick structure reminiscent of Multani shrines, boasting intricate brick carvings and remaining green patches of tiles.',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800',
        type: 'Shrine'
      },
      {
        name: 'Suleiman Range and Sanghar Torrent',
        description: 'Deep, dramatic canyons and rocky cliffs cutting through the mountain range, forming breathtaking passes and hosting ancient fossil beds and mountain streams.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      }
    ],
    traditionalFoods: ['Suleimani Chai (green tea infused with mint and lemon)', 'Sajji (traditional mountain pit lamb roast)', 'Sooreen (flaky mountain bread bread served with butter/honey)'],
    localCulture: 'DG Khan has a fascinating blend of Saraiki and Balochi tribal cultures. It is famous for tribal woolen carpets, intricate mirror embroidery work, and the performance of "Jhumar" dance accompanied by large local drums (Dhol).',
    hotels: [
      { name: 'Hotel de Shalimar', rating: 4.1, contact: '+92 64 2460111', image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=400' },
      { name: 'Fort Munro Resort Hotel', rating: 4.2, contact: '+92 64 2855110', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Suleiman Mountain Sajji House', rating: 4.5, cuisine: 'Balochi & Saraiki BBQ', image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Dera+Ghazi+Khan&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 30.0322, lng: 70.6402 }
  },
  {
    id: 'muzaffargarh',
    name: 'Muzaffargarh',
    tagline: 'The Land of Chenab and Sweet Mangoes',
    history: 'Founded in 1794 by Governor Muzaffar Khan of Multan, who built a strong fort named Muzaffargarh ("The Fort of Muzaffar"). The area is steeped in ancient Indus Valley traditions and was a crucial defensive bastion for the Multani state during its regional wars.',
    geography: 'Uniquely positioned as a peninsula shaped by two of Pakistan\'s mightiest rivers: the Indus River to the west and the Chenab River to the east, creating exceptionally fertile soils.',
    touristAttractions: [
      {
        name: 'Tomb of Tahir Khan Nahar',
        description: 'An exceptional double-story octagonal tomb located in the nearby ancient city of Sitpur. Demonstrating spectacular Multani glazed-tile architecture, it is dedicated to a popular independent ruler from the 15th-century Nahar dynasty.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      },
      {
        name: 'Chenab River Viewpoint & Barrage',
        description: 'A beautiful riverbank recreational spot with lush palm gardens, boating, and fresh river fish stalls serving the legendary local Chenabi Rahu fish.',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
        type: 'Park'
      }
    ],
    traditionalFoods: ['Chenabi Fried Rahu Fish', 'Chaunsa Mango Shakes', 'Muzaffargarhi Peda (rich milk sweets)'],
    localCulture: 'Muzaffargarh is renowned for its vast palm orchards and the delicate production of palm-leaf handicrafts like baskets (Pesh-Khaji), mats, and hand fans. The local poets write soul-stirring Saraiki poetry reflecting riverine life.',
    hotels: [
      { name: 'Chenab River Club & Motel', rating: 4.0, contact: '+92 300 7894512', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Al-Chenab Fish Point', rating: 4.4, cuisine: 'River Fish & Desi Karahi', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Muzaffargarh&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 30.0754, lng: 71.1919 }
  },
  {
    id: 'rahim-yar-khan',
    name: 'Rahim Yar Khan',
    tagline: 'The Oasis of Architectural Marvels',
    history: 'Historically called Naushera, this city was renamed in 1881 by Nawab Sadiq IV of Bahawalpur to honor his firstborn son, Prince Rahim Yar Khan. The city is rich with archeological ruins linking it to the ancient Indus Valley Civilization, the Mauryan Empire, and subsequent medieval dynasties.',
    geography: 'Situated at the southernmost tip of Punjab, RYK borders the Sindh province and the Cholistan desert. It represents a vital industrial and agricultural gateway linking Punjab and Sindh.',
    touristAttractions: [
      {
        name: 'Bhong Mosque',
        description: 'An architectural marvel of breathtaking scale and detail. Conceived and built over 50 years (completed in 1982) by a wealthy local landlord, Rais Ghazi Mohammad, it is covered in exquisite gold leaf work, intricate marble inlays, vibrant glass mosaics, and complex Arabic calligraphy. It won the Aga Khan Award for Architecture in 1986.',
        image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1200',
        type: 'Historical'
      },
      {
        name: 'Pattan Minara',
        description: 'An ancient Buddhist/Hindu brick tower situated 8km south of the city, standing on the dried banks of the historic Ghaggar-Hakra River. Dating back to the Mauryan Kushan dynasty (2nd to 4th century AD), it served as an ancient center of learning and worship.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      }
    ],
    traditionalFoods: ['Camel Milk Lassi', 'RYK Barfi', 'Desi Ghee ki Choori (crushed sweetened wheat rotis)'],
    localCulture: 'The local culture has a highly charming Sindhi-Saraiki fusion. Traditional block-printing (Ajrak) and beautiful handmade clay pottery are popular crafts here.',
    hotels: [
      { name: 'Desert Palm Hotel', rating: 4.5, contact: '+92 68 5877811', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'The Royal Castle Restaurant', rating: 4.3, cuisine: 'Desi, Chinese & Continental', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1200'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Rahim+Yar+Khan&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 28.4195, lng: 70.3026 }
  },
  {
    id: 'layyah',
    name: 'Layyah',
    tagline: 'The Oasis in the Golden Thal Desert',
    history: 'Founded in 1550 by Kamal Khan, a descendant of Sardar Ghazi Khan Mirani, the ruler of the area. It became part of the Multan kingdom and was later conquered by the Sikh Empire before passing to British rule in 1849.',
    geography: 'Located on the eastern banks of the Indus River, Layyah consists of dry sandy desert tracts of the Thal Desert alongside lush, river-fed agricultural fields.',
    touristAttractions: [
      {
        name: 'Thal Desert Golden Dunes',
        description: 'Vast, striking golden sand dunes stretching endlessly into the horizon. In winters, local camel caravans and folk music festivals are organized on these mesmerizing desert ridges.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
        type: 'Park'
      },
      {
        name: 'Ancient Shrines of Layyah',
        description: 'Beautiful historical shrines of local Sufi saints adorned with green-painted woodwork, operating as spiritual sanctuaries for weary desert travelers.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
        type: 'Shrine'
      }
    ],
    traditionalFoods: ['Thal Camel Milk Tea', 'Desi Mung Dal Halwa', 'Thali Fried Fish'],
    localCulture: 'Famous for the traditional "Khes" (thick woven cotton bedspreads) in vivid patterns, wood carvings, and the distinct folk ballads celebrating romantic local tales of Thal.',
    hotels: [
      { name: 'Ghazali Hotel Layyah', rating: 3.9, contact: '+92 301 7766554', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Desi Tadka Layyah', rating: 4.2, cuisine: 'Traditional Desi & BBQ', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Layyah&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 30.9620, lng: 70.9392 }
  },
  {
    id: 'rajanpur',
    name: 'Rajanpur',
    tagline: 'The Abode of Sufi Wisdom',
    history: 'Founded in 1732 by Sardar Rajan Khan of the Mirani tribe. It holds extreme spiritual significance as the resting place of the highly celebrated 19th-century Saraiki Sufi saint and poet Khawaja Ghulam Farid in Mithankot.',
    geography: 'Bordered by the Indus River to the east and the Suleiman Mountains and Balochistan to the west. It has scenic river canals and fertile soils producing high quality cotton and wheat.',
    touristAttractions: [
      {
        name: 'Darbar Kot Mithan (Shrine of Khawaja Ghulam Farid)',
        description: 'The highly revered shrine of the absolute king of Saraiki poetry, Khawaja Ghulam Farid. This white-domed sanctuary on the Indus is visited by millions of Sufi pilgrims, musicians, and writers who recite his beautiful "Kafis" day and night.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
        type: 'Shrine'
      },
      {
        name: 'Harrand Fort',
        description: 'An ancient Sikh-era fortress built in 1836 on the ruins of a historic Greek temple. Nestled at the foot of the Suleiman Range, its sturdy thick mud walls guard ancient legends of Alexander\'s campaign.',
        image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      }
    ],
    traditionalFoods: ['Mithankot Sohan Halwa', 'Faridi Lassi', 'Oven-roasted Indus catfish'],
    localCulture: 'Rajanpur is the ultimate global hub of Kafi singing. The local "Faridi" school of Sufism promotes universal love, religious harmony, and direct connection with nature.',
    hotels: [
      { name: 'Sufi Palace Hotel', rating: 3.8, contact: '+92 300 4455667', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Mithankot Fish Darbar', rating: 4.4, cuisine: 'Indus Catfish Specialties', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Rajanpur&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 29.1032, lng: 70.3250 }
  },
  {
    id: 'khanewal',
    name: 'Khanewal',
    tagline: 'The British Colonial Junction',
    history: 'Planned and established by the British administration in the late 19th century as a highly modern agricultural colony. It grew rapidly around one of the largest and most critical railway junctions in British India.',
    geography: 'A flat, exceptionally green region with complex canal-fed agricultural grids. Known as a world-class producer of highly premium cotton (called the "Silver of Punjab").',
    touristAttractions: [
      {
        name: 'British Railway Junction & Colonial Station',
        description: 'A grand brick railway junction built in colonial architecture, still showcasing antique steam-engine relics, signals, and vintage railway control rooms.',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800',
        type: 'Historical'
      },
      {
        name: 'Kabirwala Historical Mosques & Shrines',
        description: 'Located in the oldest sub-district, featuring medieval shrines and wooden mosques decorated with colorful Multani glass mirror-work.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
        type: 'Shrine'
      }
    ],
    traditionalFoods: ['Khanewal Pure Desi Ghee Sweets', 'Kabirwala Katlama (spicy, deep-fried flatbread)', 'Pure Buffalo Milk Tea'],
    localCulture: 'Famous for state-of-the-art agricultural practices, Kabaddi matches (traditional contact wrestling), and the creation of highly intricate hand-knotted cotton nets and cords.',
    hotels: [
      { name: 'Hotel Royal Junction', rating: 4.0, contact: '+92 65 2555412', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Sutlej Railway Restaurant', rating: 4.1, cuisine: 'Railway Colonial Curry', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Khanewal&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 30.3017, lng: 71.9321 }
  },
  {
    id: 'lodhran',
    name: 'Lodhran',
    tagline: 'The Gateway to Kehror Pacca Artisans',
    history: 'Lodhran was traditionally a key fortification along the ancient Sutlej River path. It has a rich history tied intimately with the Bahawalpur state and medieval defensive garrisons protecting the central Multan empire.',
    geography: 'Situated on the northern banks of the Sutlej River, right across from Bahawalpur, making it a pivotal transport nexus.',
    touristAttractions: [
      {
        name: 'Sutlej River Banks & Bridge',
        description: 'A spectacular historical iron-bridge crossing with scenic sunset views over the dried riverbanks, popular for evening family excursions and picnics.',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
        type: 'Park'
      },
      {
        name: 'Ancient Shrines of Dunyapur',
        description: 'Centuries-old brick shrines located in the historic town of Dunyapur, featuring classic Multan-style terracotta domes.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
        type: 'Shrine'
      }
    ],
    traditionalFoods: ['Kehror Pacca Sohan Halwa', 'Lodhrani Cream Dahi (thick sweet yogurt in clay pots)', 'Spiced Fried Rahu Fish'],
    localCulture: 'Famous for the local Kehror Pacca printed fabric block-prints, exquisite hand-woven mats (Saf), and vibrant winter camel-races (Karaha).',
    hotels: [
      { name: 'Lodhran Guest House', rating: 3.7, contact: '+92 301 5566778', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Sutlej View Restaurant', rating: 4.0, cuisine: 'Desi Deserts & River Fish', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Lodhran&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 29.5338, lng: 71.6334 }
  },
  {
    id: 'kot-addu',
    name: 'Kot Addu',
    tagline: 'The Land of Taunsa Wetlands',
    history: 'Kot Addu was founded in the 16th century by Addu Khan Mirani, a local governor of the Mirani dynasty. It flourished as an agricultural trade hub and developed major modern national electricity generation projects while safeguarding its core Sufi character.',
    geography: 'Situated on the eastern bank of the Indus River, it hosts the massive Taunsa Barrage, a highly critical wetland sanctuary of national importance.',
    touristAttractions: [
      {
        name: 'Taunsa Barrage & Wetland Sanctuary',
        description: 'A designated Ramsar wetland sanctuary hosting highly endangered Indus Blind Dolphins, rare migratory birds from Siberia, and lush lotus swamps.',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&q=80&w=1200',
        type: 'Park'
      },
      {
        name: 'Lal Peer Shrine',
        description: 'A beautifully preserved historical Sufi shrine situated on the outskirts, hosting colorful annual urs (festivals) with ecstatic dervish dances (Jhumar).',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
        type: 'Shrine'
      }
    ],
    traditionalFoods: ['Addu Gola Sweets (sweet syrup-filled balls)', 'Indus Fresh Fish Sajji', 'Taunsa Melon'],
    localCulture: 'Known for producing excellent wooden bedposts (Pawa), colorful hand-woven ropes, and traditional "Sehra" poetry recited in royal wedding processions.',
    hotels: [
      { name: 'Taunsa View Motel', rating: 4.1, contact: '+92 344 5544332', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=400' }
    ],
    restaurants: [
      { name: 'Barrage Dolphin Restaurant', rating: 4.3, cuisine: 'River Fish & Barbecue', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&q=80&w=1200'
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=Kot+Addu&t=&z=13&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 30.4755, lng: 70.9678 }
  }
];
