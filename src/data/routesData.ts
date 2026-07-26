export interface RouteData {
  slug: string;
  origin: string;
  destination: string;
  title: string;
  metaDescription: string;
  h1: string;
  estimatedTime: string;
  distance: string;
  mapQuery: string;
  description: string;
  routeHighlights: string[];
}

export const routesData: RouteData[] = [
  {
    slug: 'clifton-to-heathrow-taxi',
    origin: 'Clifton, Bristol',
    destination: 'London Heathrow Airport (LHR)',
    title: 'Clifton to Heathrow Taxi & Executive Transfer | Brabazon Cars',
    metaDescription: 'Book your private transfer from Clifton, Bristol to London Heathrow Airport (LHR). Punctual 24/7 service, executive vehicles, and instant WhatsApp booking.',
    h1: 'Clifton to Heathrow Taxi & Airport Transfer',
    estimatedTime: '~1 hr 45 mins',
    distance: '102 miles',
    mapQuery: 'Clifton+Bristol+to+Heathrow+Airport',
    description: 'Enjoy a smooth, stress-free journey from Clifton, Bristol to London Heathrow Airport (Terminals 2, 3, 4 & 5) with Brabazon Cars. Our professional private hire service provides door-to-door comfort, ample luggage space, and real-time flight tracking so you arrive at your terminal relaxed and on schedule.\n\nWhether you are traveling for business or leisure, our fleet of immaculate saloons, comfort SUVs, and spacious touring minivans ensures exceptional journey comfort. Avoid train connections or airport parking hassles with our dedicated 24/7 chauffeur service.',
    routeHighlights: [
      'Flight monitoring included',
      'Terminal drop-off & meet & greet',
      'Fixed-rate quote on enquiry',
      '24/7 round-the-clock availability',
      'Immaculate executive fleet'
    ]
  },
  {
    slug: 'filton-to-gatwick-transfer',
    origin: 'Filton, Bristol',
    destination: 'London Gatwick Airport (LGW)',
    title: 'Filton to Gatwick Airport Transfer & Private Taxi | Brabazon Cars',
    metaDescription: 'Reliable airport taxi from Filton, Bristol to London Gatwick (LGW) North & South Terminals. Door-to-door private hire with instant WhatsApp quote.',
    h1: 'Filton to Gatwick Taxi & Airport Transfer',
    estimatedTime: '~2 hrs 15 mins',
    distance: '135 miles',
    mapQuery: 'Filton+Bristol+to+Gatwick+Airport',
    description: 'Travel directly from Filton to London Gatwick Airport in total comfort with Brabazon Cars. We cater to early morning departures and late-night arrivals across both North and South terminals, monitoring traffic conditions along the M4 and M25 to guarantee timely arrival.\n\nIdeal for Filton aerospace professionals, local families, and corporate travellers, our luxury vehicles provide generous legroom, climate control, and free flight tracking. Request a free quote via WhatsApp in seconds.',
    routeHighlights: [
      'Direct M4 / M25 motorway routing',
      'North & South Terminal drop-off',
      'Generous luggage capacity',
      '24/7 booking & support',
      'Professional, vetted drivers'
    ]
  },
  {
    slug: 'stoke-gifford-to-bristol-airport',
    origin: 'Stoke Gifford, Bristol',
    destination: 'Bristol Airport (BRS)',
    title: 'Stoke Gifford to Bristol Airport Taxi & Private Hire | Brabazon Cars',
    metaDescription: 'Fast, reliable taxi transfer from Stoke Gifford to Bristol Airport (BRS). 24/7 private hire service near Parkway Station. Book your transfer today.',
    h1: 'Stoke Gifford to Bristol Airport Taxi',
    estimatedTime: '~35 mins',
    distance: '16 miles',
    mapQuery: 'Stoke+Gifford+Bristol+to+Bristol+Airport',
    description: 'Need a fast, dependable taxi from Stoke Gifford or Bristol Parkway to Bristol Airport? Brabazon Cars offers prompt 24/7 local airport transfers, bypassing traffic bottlenecks to get you to security with plenty of time to spare.\n\nOur service is tailored for early morning flights, business commuters, and holidaymakers carrying heavy luggage. Enjoy fixed quotes with no hidden fees or unexpected surge charges.',
    routeHighlights: [
      'Fast local route knowledge',
      'Ideal for Parkway Station connections',
      '24/7 early morning flight pickups',
      'Clean, spacious vehicles',
      'Instant WhatsApp booking'
    ]
  },
  {
    slug: 'bradley-stoke-to-heathrow-taxi',
    origin: 'Bradley Stoke, Bristol',
    destination: 'London Heathrow Airport (LHR)',
    title: 'Bradley Stoke to Heathrow Airport Taxi & Chauffeur | Brabazon Cars',
    metaDescription: 'Book a luxury private taxi from Bradley Stoke to Heathrow Airport (LHR). Executive comfort, door-to-door service, and 24/7 availability.',
    h1: 'Bradley Stoke to Heathrow Taxi & Airport Transfer',
    estimatedTime: '~1 hr 40 mins',
    distance: '98 miles',
    mapQuery: 'Bradley+Stoke+Bristol+to+Heathrow+Airport',
    description: 'Start your international journey smoothly with a private transfer from Bradley Stoke to London Heathrow Airport. Brabazon Cars provides executive door-to-door transport direct from your home or business to any Heathrow terminal.\n\nWith M4 motorway access right on Bradley Stoke\'s doorstep, our drivers ensure prompt departures, smooth long-distance travel, and live flight tracking for return pick-ups.',
    routeHighlights: [
      'Direct M4 motorway corridor access',
      'Terminal 2, 3, 4 & 5 drop-offs',
      'Child & baby seats available on request',
      'Flight tracking on return trips',
      'Fixed quotes on enquiry'
    ]
  },
  {
    slug: 'bristol-to-gatwick-transfer',
    origin: 'Bristol City Centre',
    destination: 'London Gatwick Airport (LGW)',
    title: 'Bristol to Gatwick Airport Transfer & Private Taxi | Brabazon Cars',
    metaDescription: 'Premium 24/7 private transfer from Bristol to London Gatwick Airport (LGW). Direct long-distance taxi with live flight monitoring.',
    h1: 'Bristol to Gatwick Taxi & Airport Transfer',
    estimatedTime: '~2 hrs 20 mins',
    distance: '138 miles',
    mapQuery: 'Bristol+to+Gatwick+Airport',
    description: 'Skip inconvenient train transfers and heavy luggage carries with a direct private transfer from Bristol to London Gatwick Airport. Brabazon Cars operates 24/7, providing comfortable long-distance travel for individuals, families, and corporate groups.\n\nOur experienced drivers carefully navigate traffic updates across the southern motorway network, ensuring you arrive at Gatwick North or South terminal relaxed and ready for your flight.',
    routeHighlights: [
      'Seamless door-to-door private transport',
      'Ideal for long-haul vacationers & families',
      'Live traffic & flight monitoring',
      'Modern executive fleet',
      'Instant WhatsApp quote'
    ]
  },
  {
    slug: 'bath-to-heathrow-transfer',
    origin: 'Bath, Somerset',
    destination: 'London Heathrow Airport (LHR)',
    title: 'Bath to Heathrow Taxi & Executive Private Hire | Brabazon Cars',
    metaDescription: 'Luxury private hire taxi from Bath to London Heathrow Airport (LHR). Chauffeur-driven transfer with door-to-door reliability and flight tracking.',
    h1: 'Bath to Heathrow Taxi & Chauffeur Transfer',
    estimatedTime: '~1 hr 50 mins',
    distance: '95 miles',
    mapQuery: 'Bath+Somerset+to+Heathrow+Airport',
    description: 'Travel in comfort and luxury from Bath to London Heathrow Airport with Brabazon Cars. We serve all areas of Bath, providing executive vehicles for international business travellers, tourists, and local residents.\n\nAvoid complex public transport itineraries with our smooth M4 motorway route, personalized meet & greet service, and spacious luggage room for international baggage.',
    routeHighlights: [
      'Covers all Bath postcodes & hotels',
      'Executive saloons, SUVs & minivans',
      'Meet & greet service at Arrivals',
      'Flight tracking on inbound flights',
      'Transparent fixed quotes'
    ]
  },
  {
    slug: 'henbury-to-gatwick-taxi',
    origin: 'Henbury, Bristol',
    destination: 'London Gatwick Airport (LGW)',
    title: 'Henbury to Gatwick Airport Taxi Transfer | Brabazon Cars',
    metaDescription: 'Dependable private hire taxi from Henbury, Bristol to London Gatwick Airport. Available 24/7 for stress-free long-distance airport transfers.',
    h1: 'Henbury to Gatwick Taxi & Private Hire',
    estimatedTime: '~2 hrs 20 mins',
    distance: '140 miles',
    mapQuery: 'Henbury+Bristol+to+Gatwick+Airport',
    description: 'Brabazon Cars offers seamless, direct private taxi transfers from Henbury, Bristol to London Gatwick Airport. Whether traveling for holidays or corporate engagements, our reliable drivers ensure a punctual pick-up from your front door.\n\nWe monitor real-time road conditions and flight schedules to deliver a hassle-free journey across North and South Gatwick terminals.',
    routeHighlights: [
      'Direct door-to-door private hire',
      'Spacious vehicles for all group sizes',
      'Round-the-clock 24/7 service',
      'Flight status monitoring',
      'Prompt quote response on WhatsApp'
    ]
  },
  {
    slug: 'keynsham-to-bristol-airport',
    origin: 'Keynsham, Bristol',
    destination: 'Bristol Airport (BRS)',
    title: 'Keynsham to Bristol Airport Taxi & Private Transfer | Brabazon Cars',
    metaDescription: 'Reliable, affordable private taxi from Keynsham to Bristol Airport (BRS). Available 24/7 with instant booking via WhatsApp.',
    h1: 'Keynsham to Bristol Airport Taxi',
    estimatedTime: '~30 mins',
    distance: '13 miles',
    mapQuery: 'Keynsham+to+Bristol+Airport',
    description: 'Heading to Bristol Airport from Keynsham? Brabazon Cars provides swift, comfortable private hire taxis straight to the departure terminal. Avoid parking fees and bus schedules with our reliable 24/7 service.\n\nWhether booking an early dawn departure or an late-night return, our local drivers provide courteous service, luggage assistance, and fixed quotes upon enquiry.',
    routeHighlights: [
      'Direct A38 airport route access',
      '24/7 dawn & night flight availability',
      'No parking or shuttle bus hassle',
      'Spacious boots for luggage',
      'Fast booking response'
    ]
  },
  {
    slug: 'north-bristol-to-luton-airport',
    origin: 'North Bristol',
    destination: 'London Luton Airport (LTN)',
    title: 'North Bristol to Luton Airport Transfer & Taxi | Brabazon Cars',
    metaDescription: 'Private long-distance taxi from North Bristol to London Luton Airport (LTN). Executive vehicles, M4/M25 route expertise, 24/7 service.',
    h1: 'North Bristol to Luton Airport Transfer',
    estimatedTime: '~2 hrs 10 mins',
    distance: '125 miles',
    mapQuery: 'North+Bristol+to+Luton+Airport',
    description: 'Connect directly from North Bristol to London Luton Airport with Brabazon Cars\' premium private transfer service. We serve Filton, Patchway, Bradley Stoke, Stoke Gifford, and surrounding North Bristol communities.\n\nOur long-distance chauffeur service guarantees a smooth journey via major motorway links, providing generous legroom and luggage space for individuals and groups.',
    routeHighlights: [
      'Serves all North Bristol locations',
      'Direct motorway routing via M4/M25/M1',
      'Flight status monitoring included',
      'Ideal for European & budget flight links',
      'Instant quote via WhatsApp'
    ]
  },
  {
    slug: 'portishead-to-heathrow-taxi',
    origin: 'Portishead, Somerset',
    destination: 'London Heathrow Airport (LHR)',
    title: 'Portishead to Heathrow Airport Taxi & Chauffeur | Brabazon Cars',
    metaDescription: 'Book a private transfer from Portishead to London Heathrow Airport (LHR). Executive comfort, M4 access, 24/7 availability, and live flight tracking.',
    h1: 'Portishead to Heathrow Taxi & Airport Transfer',
    estimatedTime: '~1 hr 55 mins',
    distance: '110 miles',
    mapQuery: 'Portishead+to+Heathrow+Airport',
    description: 'Enjoy a comfortable, stress-free private journey from Portishead to London Heathrow Airport with Brabazon Cars. Our experienced drivers pick you up right from your doorstep in Portishead, delivering a direct motorway journey to any Heathrow terminal.\n\nSkip multiple train transfers or high airport parking charges. We offer fixed-rate quotes on enquiry, flight tracking, and executive vehicles tailored to your journey.',
    routeHighlights: [
      'M5/M4 quick motorway access',
      'All Heathrow Terminals (T2, T3, T4, T5)',
      'Professional chauffeur-driven service',
      'Flight tracking on return journeys',
      'WhatsApp instant quote'
    ]
  },
  {
    slug: 'bristol-to-heathrow-taxi',
    origin: 'Bristol, UK',
    destination: 'London Heathrow Airport (LHR)',
    title: 'Bristol to Heathrow Taxi & Executive Private Transfer | Brabazon Cars',
    metaDescription: 'Premier 24/7 private hire taxi from Bristol to London Heathrow Airport (LHR). Door-to-door executive transfer with flight monitoring.',
    h1: 'Bristol to Heathrow Taxi & Airport Transfer',
    estimatedTime: '~1 hr 45 mins',
    distance: '105 miles',
    mapQuery: 'Bristol+to+Heathrow+Airport',
    description: 'Brabazon Cars is Bristol\'s premier choice for private transfers to London Heathrow Airport. Operating 24/7, we provide direct, comfortable journeys for business professionals, holidaymakers, and international travellers.\n\nWe service all Bristol neighborhoods and surrounding towns, monitoring traffic on the M4 corridor to guarantee timely terminal drop-offs and seamless arrivals meet & greet service.',
    routeHighlights: [
      '24/7 coverage across all Bristol areas',
      'M4 express route expertise',
      'Terminal drop-off & meet & greet',
      'Flight tracking on inbound arrivals',
      'Fixed rates provided on enquiry'
    ]
  },
  {
    slug: 'westbury-on-trym-to-heathrow-taxi',
    origin: 'Westbury-on-Trym, Bristol',
    destination: 'London Heathrow Airport (LHR)',
    title: 'Westbury-on-Trym to Heathrow Airport Taxi | Brabazon Cars',
    metaDescription: 'Private taxi transfer from Westbury-on-Trym, Bristol to London Heathrow (LHR). Executive comfort, 24/7 service, and WhatsApp booking.',
    h1: 'Westbury-on-Trym to Heathrow Taxi',
    estimatedTime: '~1 hr 45 mins',
    distance: '104 miles',
    mapQuery: 'Westbury+on+Trym+Bristol+to+Heathrow+Airport',
    description: 'Book your private airport transfer from Westbury-on-Trym, Bristol to London Heathrow Airport with Brabazon Cars. We offer door-to-door luxury private hire, ensuring a quiet, relaxing travel experience before your flight.\n\nWhether traveling solo or in a family group with luggage, our immaculate saloons, SUVs, and minivans provide the ultimate long-distance comfort with 24/7 availability.',
    routeHighlights: [
      'Direct pickup from Westbury-on-Trym',
      'Serves Terminals 2, 3, 4 & 5',
      'Clean, comfortable executive fleet',
      'Flight tracking & luggage assistance',
      'WhatsApp booking & instant quotes'
    ]
  },
  {
    slug: 'bradley-stoke-to-gatwick-transfer',
    origin: 'Bradley Stoke, Bristol',
    destination: 'London Gatwick Airport (LGW)',
    title: 'Bradley Stoke to Gatwick Airport Transfer | Brabazon Cars',
    metaDescription: 'Book a private hire transfer from Bradley Stoke to London Gatwick Airport (LGW). Direct M4/M25 routing, 24/7 service, and WhatsApp quotes.',
    h1: 'Bradley Stoke to Gatwick Taxi & Airport Transfer',
    estimatedTime: '~2 hrs 15 mins',
    distance: '136 miles',
    mapQuery: 'Bradley+Stoke+Bristol+to+Gatwick+Airport',
    description: 'Enjoy a comfortable, direct airport taxi transfer from Bradley Stoke, Bristol to London Gatwick Airport (North & South Terminals) with Brabazon Cars. We offer prompt door-to-door private hire with round-the-clock availability.\n\nOur experienced drivers navigate the M4 and M25 motorways efficiently, incorporating real-time traffic monitoring and flight tracking to ensure your departure or arrival is seamless and stress-free.',
    routeHighlights: [
      'Direct M4 / M25 corridor routing',
      'North & South Gatwick drop-off',
      '24/7 round-the-clock availability',
      'Flight status monitoring',
      'Instant WhatsApp quote'
    ]
  },
  {
    slug: 'bristol-to-stansted-airport-taxi',
    origin: 'Bristol City Centre',
    destination: 'London Stansted Airport (STN)',
    title: 'Bristol to Stansted Airport Taxi & Private Transfer | Brabazon Cars',
    metaDescription: 'Reliable 24/7 private transfer from Bristol to London Stansted Airport (STN). Executive vehicles, M4/M25/M11 route expertise, instant WhatsApp quote.',
    h1: 'Bristol to Stansted Airport Taxi & Transfer',
    estimatedTime: '~2 hrs 40 mins',
    distance: '155 miles',
    mapQuery: 'Bristol+to+Stansted+Airport',
    description: 'Brabazon Cars offers dedicated private airport transfers from Bristol City Centre to London Stansted Airport. Avoid complex rail connections or high parking charges with our door-to-door long-distance executive hire.\n\nWe provide comfortable saloons, SUVs, and minivans for individuals and holiday groups, monitoring traffic across the M4, M25, and M11 to deliver a smooth and punctual travel experience.',
    routeHighlights: [
      'M4 / M25 / M11 express routing',
      'Terminal drop-off & meet & greet',
      'Generous luggage capacity',
      '24/7 early dawn flight pickups',
      'Fixed quotes on enquiry'
    ]
  },
  {
    slug: 'stoke-gifford-to-stansted-taxi',
    origin: 'Stoke Gifford, Bristol',
    destination: 'London Stansted Airport (STN)',
    title: 'Stoke Gifford to Stansted Airport Taxi | Brabazon Cars',
    metaDescription: 'Private taxi transfer from Stoke Gifford, Bristol to London Stansted Airport (STN). Executive comfort, 24/7 availability, instant quote.',
    h1: 'Stoke Gifford to Stansted Taxi & Airport Transfer',
    estimatedTime: '~2 hrs 35 mins',
    distance: '150 miles',
    mapQuery: 'Stoke+Gifford+Bristol+to+Stansted+Airport',
    description: 'Travel comfortably from Stoke Gifford to London Stansted Airport with Brabazon Cars. Located conveniently near Bristol Parkway, our private hire service provides direct long-distance transfers straight to the terminal.\n\nWhether booking an early European flight or a holiday trip with family, our drivers ensure smooth travel, luggage assistance, and live flight tracking for your return flight.',
    routeHighlights: [
      'Near Parkway Station pickup',
      'Direct M4/M25/M11 motorway journey',
      'Flight tracking included',
      'Executive 4, 6 & 7 seater fleet',
      'Instant WhatsApp booking'
    ]
  },
  {
    slug: 'clifton-to-stansted-taxi',
    origin: 'Clifton, Bristol',
    destination: 'London Stansted Airport (STN)',
    title: 'Clifton to Stansted Airport Taxi & Private Hire | Brabazon Cars',
    metaDescription: 'Luxury private taxi from Clifton, Bristol to London Stansted Airport (STN). Punctual 24/7 service, executive comfort, and WhatsApp quotes.',
    h1: 'Clifton to Stansted Taxi & Airport Transfer',
    estimatedTime: '~2 hrs 45 mins',
    distance: '158 miles',
    mapQuery: 'Clifton+Bristol+to+Stansted+Airport',
    description: 'Book a premier private taxi from Clifton, Bristol to London Stansted Airport with Brabazon Cars. We deliver door-to-door luxury transport, allowing you to relax or work while we handle the long-distance motorway driving.\n\nWe monitor road network traffic and flight updates continuously to ensure you arrive at Stansted with plenty of time for security and check-in.',
    routeHighlights: [
      'Door-to-door Clifton pickup',
      'Long-distance executive comfort',
      'Flight monitoring & meet & greet',
      '24/7 booking availability',
      'Transparent fixed quotes'
    ]
  },
  {
    slug: 'bradley-stoke-to-stansted-taxi',
    origin: 'Bradley Stoke, Bristol',
    destination: 'London Stansted Airport (STN)',
    title: 'Bradley Stoke to Stansted Airport Taxi | Brabazon Cars',
    metaDescription: 'Direct private transfer from Bradley Stoke to London Stansted Airport (STN). Executive vehicles, M4/M25/M11 routing, 24/7 booking.',
    h1: 'Bradley Stoke to Stansted Taxi & Airport Transfer',
    estimatedTime: '~2 hrs 35 mins',
    distance: '148 miles',
    mapQuery: 'Bradley+Stoke+Bristol+to+Stansted+Airport',
    description: 'Start your trip to London Stansted Airport with a reliable private transfer from Bradley Stoke, Bristol. Brabazon Cars delivers dependable long-distance private hire directly from your home to the departures area.\n\nOur modern fleet of executive saloons, SUVs, and 8-seater minivans provides ample space for passengers and luggage with 24/7 availability.',
    routeHighlights: [
      'Direct motorway routing via M4/M25/M11',
      'All group sizes accommodated',
      '24/7 round-the-clock service',
      'Flight tracking on return trips',
      'WhatsApp instant quote'
    ]
  }
];

export function getRouteBySlug(slug: string): RouteData | undefined {
  return routesData.find(route => route.slug === slug);
}

export function getAllRoutes(): RouteData[] {
  return routesData;
}
