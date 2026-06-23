// Colorado Family Vacation Plan — All trip data
// Source: Obsidian vault Research/Colorado-Family-Vacation-Plan-July-2026.md
// Updated: June 23, 2026 — includes Denver Museum of Nature & Science, Manitou Springs, Golden/Buffalo Herd, Echo Lake, Lake Estes

export const tripMeta = {
  title: "Colorado Family Vacation",
  dates: "July 29 – August 4, 2026",
  duration: "7 Days, 6 Nights",
  family: ["Jay", "Moon", "Aria (age 5)"],
  budgetRange: "$2,540 – $4,200 (excl. flights)",
  baseCities: "Denver (3 nights) + Estes Park (3 nights)",
};

export type TimelineItem = {
  time: string;
  activity: string;
  notes: string;
};

export type DayPlan = {
  day: number;
  date: string;
  dayName: string;
  theme: string;
  timeline: TimelineItem[];
  driving: string;
  totalDriving: string;
  location: string;
  critical?: string;
};

export const itinerary: DayPlan[] = [
  {
    day: 1,
    date: "July 29",
    dayName: "Wednesday",
    theme: "Land, settle in, easy start",
    location: "Denver",
    timeline: [
      { time: "Morning/Afternoon", activity: "Arrive DEN, pick up rental car", notes: "Allow 1hr for car rental + luggage" },
      { time: "2:00 PM", activity: "Check into hotel (Denver)", notes: "Rest, let Aria adjust to altitude" },
      { time: "4:00 PM", activity: "Denver Union Station", notes: "Free to walk around, kid-friendly fountains, ice cream at Milkbox Ice Creamery inside" },
      { time: "6:00 PM", activity: "Dinner at Illegal Pete's (LoDo)", notes: "Casual, affordable, kid-approved burritos" },
      { time: "7:30 PM", activity: "Early bedtime", notes: "Altitude adjustment — critical first night" },
    ],
    driving: "DEN → Hotel (~25 min) → Union Station (~10 min) → Hotel",
    totalDriving: "~35 min",
  },
  {
    day: 2,
    date: "July 30",
    dayName: "Thursday",
    theme: "Full Denver kid day",
    location: "Denver",
    timeline: [
      { time: "8:00 AM", activity: "Hotel breakfast", notes: "" },
      { time: "9:00 AM", activity: "Denver Zoo", notes: "3-4 hrs. Arrive early — animals active in morning" },
      { time: "12:30 PM", activity: "Lunch at zoo or nearby", notes: "Zoo has food courts" },
      { time: "2:00 PM", activity: "Denver Museum of Nature & Science", notes: "2-3 hrs. DINOSAURS! Planetarium, IMAX, hands-on exhibits. RIGHT NEXT DOOR to the zoo (5-min walk, both in City Park)" },
      { time: "5:00 PM", activity: "Return to hotel, rest/pool time", notes: "" },
      { time: "6:30 PM", activity: "Dinner", notes: "See Denver dining options" },
    ],
    driving: "Hotel → Zoo (~15 min) → Museum (~5 min walk) → Hotel (~15 min)",
    totalDriving: "~30 min",
  },
  {
    day: 3,
    date: "July 31",
    dayName: "Friday",
    theme: "Scenic drive, buffalo herd, Flatirons, settle into mountains",
    location: "Denver → Golden → Boulder → Estes Park",
    timeline: [
      { time: "8:00 AM", activity: "Hotel breakfast + checkout", notes: "" },
      { time: "9:00 AM", activity: "Drive to Golden, CO", notes: "~30 min from Denver" },
      { time: "9:30 AM", activity: "Lookout Mountain + Buffalo Herd", notes: "FREE! Wild buffalo herd roaming on Lookout Mountain. Drive up, see buffalo from the car. Aria will LOVE this. Also: Lariat Loop scenic drive" },
      { time: "10:30 AM", activity: "Drive Golden → Boulder", notes: "~20 min" },
      { time: "10:45 AM", activity: "Boulder Flatirons — Chautauqua Park", notes: "Easy 1-mile loop trail, stunning rock formations, kid-friendly. Free." },
      { time: "12:00 PM", activity: "Lunch on Pearl Street Mall (Boulder)", notes: "Outdoor pedestrian mall, street performers, lots of food options" },
      { time: "1:30 PM", activity: "Drive Boulder → Estes Park", notes: "~45 min via CO-66/CO-7, scenic route through the foothills" },
      { time: "2:30 PM", activity: "Check into Estes Park hotel", notes: "" },
      { time: "3:30 PM", activity: "Estes Park downtown", notes: "Walk around, fudge shops, taffy, souvenir. Aria will love the candy stores" },
      { time: "5:00 PM", activity: "Estes Park Aerial Tramway (optional)", notes: "Ride to top of Prospect Mountain for panoramic views" },
      { time: "7:00 PM", activity: "Dinner in Estes Park", notes: "See Estes Park dining options" },
    ],
    driving: "Denver → Golden (30 min) → Boulder (20 min) → Estes Park (45 min)",
    totalDriving: "~1.5 hrs",
  },
  {
    day: 4,
    date: "August 1",
    dayName: "Saturday",
    theme: "Full day in RMNP — the highlight",
    location: "Rocky Mountain National Park",
    timeline: [
      { time: "6:30 AM", activity: "Early breakfast", notes: "Enter RMNP before 9 AM to beat crowds" },
      { time: "7:30 AM", activity: "Bear Lake", notes: "Easy 0.6-mile loop. Stunning mountain reflections. Perfect for Aria" },
      { time: "9:00 AM", activity: "Sprague Lake", notes: "Flat 0.8-mile loop, stroller accessible, incredible views. Elk often spotted here" },
      { time: "10:00 AM", activity: "Echo Lake", notes: "Quick stop — 0.5-mile loop, beautiful lake, feed ducks (bring bread!). Very kid-friendly. Right on the way back from Bear Lake" },
      { time: "10:45 AM", activity: "Trail Ridge Road (partial drive)", notes: "Highest continuous paved road in US (12,185ft). Drive to Forest Canyon Pass. Stop at viewpoints" },
      { time: "12:00 PM", activity: "Picnic lunch at Many Parks Curve Overlook", notes: "Pack lunch from hotel or grab sandwiches in town" },
      { time: "1:00 PM", activity: "Lily Lake", notes: "Easy 0.8-mile flat loop. Beautiful lily pads, very kid-friendly" },
      { time: "2:30 PM", activity: "Return to Estes Park", notes: "" },
      { time: "3:30 PM", activity: "Rest/pool time at hotel", notes: "Aria will be tired" },
      { time: "5:00 PM", activity: "Lake Estes", notes: "Walk the 3.3-mile paved path (do a section), or rent a paddle boat from Lake Estes Marina. Mini golf nearby" },
      { time: "7:00 PM", activity: "Dinner", notes: "" },
    ],
    driving: "Estes Park → Bear Lake (~15 min) → internal park driving (~30 min) → back to Estes Park",
    totalDriving: "~1 hr in park + 30 min round trip",
    critical: "CRITICAL: You need a Timed Entry Permit! See recreation.gov",
  },
  {
    day: 5,
    date: "August 2",
    dayName: "Sunday",
    theme: "Travel day + Garden of the Gods + Manitou Springs",
    location: "Estes Park → Manitou Springs → Colorado Springs",
    timeline: [
      { time: "8:00 AM", activity: "Breakfast + checkout", notes: "" },
      { time: "9:00 AM", activity: "Drive Estes Park → Manitou Springs", notes: "~2 hrs via US-36 to I-25" },
      { time: "11:00 AM", activity: "Manitou Springs", notes: "Quirky mountain town. Let Aria try the natural mineral springs (free, fun bubbling water). Browse penny arcades and candy shops" },
      { time: "11:30 AM", activity: "Manitou Cliff Dwellings", notes: "Ancient Anasazi cliff dwellings (replica but impressive). Short walk, kid-friendly. ~$10 adults, ~$5 children" },
      { time: "12:30 PM", activity: "Lunch in Manitou Springs", notes: "Front Range BBQ or any café along Cañon Ave" },
      { time: "1:30 PM", activity: "Drive to Garden of the Gods", notes: "~10 min from Manitou Springs" },
      { time: "1:45 PM", activity: "Garden of the Gods", notes: "FREE! 1.5-2 hrs. Easy paved trails, dramatic red rock formations. Visitor Center has interactive exhibits" },
      { time: "3:30 PM", activity: "Check into Colorado Springs hotel", notes: "" },
      { time: "4:00 PM", activity: "Cheyenne Mountain Zoo", notes: "2-3 hrs. Giraffe feeding, monkey exhibit, playground, built into mountainside" },
      { time: "6:30 PM", activity: "Dinner", notes: "" },
    ],
    driving: "Estes Park → Manitou Springs (~2 hrs) → Garden of the Gods (10 min) → Hotel (~15 min)",
    totalDriving: "~2.5 hrs",
  },
  {
    day: 6,
    date: "August 3",
    dayName: "Monday",
    theme: "Pikes Peak + water fun or relaxation",
    location: "Colorado Springs",
    timeline: [
      { time: "7:30 AM", activity: "Early breakfast", notes: "" },
      { time: "8:30 AM", activity: "Pikes Peak — drive or cog railway", notes: "Option A: Highway (~$15/person, self-drive). Option B: Cog Railway (~$55 adults, ~$28 children, 3 hrs). For Aria, the Cog Railway is more memorable" },
      { time: "12:00 PM", activity: "Return to base", notes: "" },
      { time: "1:00 PM", activity: "Lunch", notes: "" },
      { time: "2:30 PM", activity: "CHOICE: Water activity", notes: "Option A: Boulder Creek Splash Park (FREE, downtown Colorado Springs). Option B: Hotel pool relaxation. Option C: Champion Landing Waterpark (Woodland Park, ~40 min)" },
      { time: "4:30 PM", activity: "Old Colorado City", notes: "Walk around, antique shops, ice cream at Marble Bag" },
      { time: "6:30 PM", activity: "Farewell dinner", notes: "" },
    ],
    driving: "Hotel → Pikes Peak (~30 min) → local → hotel",
    totalDriving: "~1.5 hrs",
  },
  {
    day: 7,
    date: "August 4",
    dayName: "Tuesday",
    theme: "Easy morning, airport",
    location: "Colorado Springs → Denver",
    timeline: [
      { time: "8:00 AM", activity: "Breakfast + checkout", notes: "" },
      { time: "9:00 AM", activity: "Drive Colorado Springs → DEN", notes: "~1 hr 15 min" },
      { time: "10:30 AM", activity: "Optional: Outlets at Castle Rock", notes: "40 min south of DEN, last-minute shopping (if flight is afternoon/evening)" },
      { time: "12:00 PM", activity: "Arrive DEN, return car", notes: "Allow 30 min for car return" },
      { time: "1:00 PM", activity: "Terminal, lunch, board flight", notes: "" },
    ],
    driving: "Colorado Springs → DEN (1 hr 15 min)",
    totalDriving: "~1.25 hrs",
  },
];

export type Attraction = {
  name: string;
  location: string;
  distanceFromDEN?: string;
  duration: string;
  pricing: string[];
  whyForAria: string;
  tips: string[];
  website?: string;
  websiteLabel?: string;
  city: string;
  free?: boolean;
  highlight?: boolean;
  mapUrl?: string;
};

export const attractions: Attraction[] = [
  {
    name: "Denver Zoo",
    location: "2900 E 23rd Ave, Denver, CO 80205 (in City Park)",
    distanceFromDEN: "~20 miles, 25 min",
    duration: "3-4 hours",
    pricing: ["Adults (12-64): ~$25", "Children (3-11): ~$19", "Under 3: Free", "Parking: ~$10"],
    whyForAria: "Giraffe feeding experience, Discovery Zone children's area, carousel, train ride through the zoo",
    tips: ["Arrive at opening (9 AM). Animals most active in morning", "Download the zoo app for map"],
    website: "https://www.denverzoo.org",
    websiteLabel: "denverzoo.org",
    city: "Denver",
    mapUrl: "https://maps.google.com/?q=2900+E+23rd+Ave,+Denver,+CO+80205",
  },
  {
    name: "Denver Museum of Nature & Science",
    location: "2001 Colorado Blvd, Denver, CO 80205",
    distanceFromDEN: "5-minute walk from Denver Zoo (both in City Park!)",
    duration: "2-3 hours",
    pricing: ["Adults: ~$20", "Children (3-17): ~$15", "Under 3: Free", "IMAX/Planetarium: additional ~$7-8 each", "Parking: ~$10"],
    whyForAria: "DINOSAURS! Massive dinosaur skeletons, hands-on science exhibits, Space Odyssey planetarium, IMAX theater, Discovery Zone children's area with water tables and building activities. One of the best natural history museums for young children in the country",
    tips: ["Do same day as Denver Zoo (they're next to each other in City Park)", "The dinosaur halls alone are worth the trip for a 5-year-old", "IMAX shows are short (25 min) and kid-friendly"],
    website: "https://www.dmns.org",
    websiteLabel: "dmns.org",
    city: "Denver",
    highlight: true,
    mapUrl: "https://maps.google.com/?q=2001+Colorado+Blvd,+Denver,+CO+80205",
  },
  {
    name: "Children's Museum of Denver",
    location: "2121 Children's Museum Dr, Denver, CO 80211",
    distanceFromDEN: "~12 miles, 20 min",
    duration: "2-3 hours",
    pricing: ["All ages: ~$17-20 per person (flat rate)", "Under 1: Free"],
    whyForAria: "Purpose-built for young children. Water play area, climbing structures, art studio, pretend grocery store, train table. One of the best children's museums in the country",
    tips: ["Go early. Can get crowded on weekends", "Wear clothes that can get wet (water play area)"],
    website: "https://www.childrensmuseumdenver.org",
    websiteLabel: "childrensmuseumdenver.org",
    city: "Denver",
    mapUrl: "https://maps.google.com/?q=2121+Children's+Museum+Dr,+Denver,+CO+80211",
  },
  {
    name: "Downtown Aquarium Denver",
    location: "4100 E 35th Ave, Denver, CO 80216",
    distanceFromDEN: "~8 miles, 15 min",
    duration: "2-3 hours",
    pricing: ["Adults: ~$30-35", "Children (3-11): ~$25-28", "Under 3: Free"],
    whyForAria: "Touch tanks, shark tunnel, stingray bay, aquarium tunnel you walk through",
    tips: ["Less essential than the zoo + museum combo", "Do this only if you have an extra half-day"],
    website: "https://www.denveraquarium.com",
    websiteLabel: "denveraquarium.com",
    city: "Denver",
    mapUrl: "https://maps.google.com/?q=4100+E+35th+Ave,+Denver,+CO+80216",
  },
  {
    name: "Rocky Mountain National Park (RMNP)",
    location: "Estes Park, CO 80517",
    distanceFromDEN: "~75 miles, 1.5 hrs to Estes Park entrance",
    duration: "Full day (recommended)",
    pricing: ["Park entrance: $30/vehicle (7-day pass) or $15/person (walk/bike)", "Timed Entry Permit: REQUIRED — $2 reservation fee per permit"],
    whyForAria: "Bear Lake (easy 0.6-mile loop), Sprague Lake (stroller accessible), Echo Lake (feed ducks!), Lily Lake (lily pads), wildlife viewing (elk, moose, bighorn sheep), scenic drives",
    tips: [
      "Timed Entry Permits REQUIRED during peak season (late May through mid-October)",
      "Advance release: 1st of prior month at 8:00 AM MT (for Aug 1, permits go on sale July 1 at 8 AM MT)",
      "Day-before release: Additional permits at 4:00 PM MT the day before",
      "Book at recreation.gov — search 'Rocky Mountain'",
      "Enter before 9 AM to avoid parking nightmares",
      "Bear Lake parking fills by 8:30 AM on weekends — go early or use shuttle",
      "Pack layers — temperature drops 10-20°F at higher elevations",
      "Bring LOTS of water and snacks",
      "Watch for altitude symptoms in Aria above 10,000ft",
    ],
    website: "https://www.nps.gov/romo",
    websiteLabel: "nps.gov/romo",
    city: "Estes Park",
    mapUrl: "https://maps.google.com/?q=Estes+Park,+CO+80517",
  },
  {
    name: "Garden of the Gods",
    location: "1805 N 30th St, Colorado Springs, CO 80904",
    duration: "1.5-2 hours",
    pricing: ["FREE admission", "Free parking"],
    whyForAria: "Dramatic red rock formations, easy paved trails, Visitor Center with interactive geology exhibits, gift shop. Kids love climbing on the rocks (designated areas)",
    tips: ["Go early morning or late afternoon for best light and fewer crowds", "The Perkins Central Garden Trail is fully paved and stroller-friendly (1.5 mi loop)", "Combine with Manitou Springs (10 min drive)"],
    website: "https://www.gardenofthegods.com",
    websiteLabel: "gardenofthegods.com",
    city: "Colorado Springs",
    free: true,
    mapUrl: "https://maps.google.com/?q=1805+N+30th+St,+Colorado+Springs,+CO+80904",
  },
  {
    name: "Cheyenne Mountain Zoo",
    location: "4250 Cheyenne Mountain Zoo Rd, Colorado Springs, CO 80906",
    distanceFromDEN: "~72 miles, 1 hr 15 min",
    duration: "2.5-3 hours",
    pricing: ["Adults (12-64): ~$24", "Children (3-11): ~$18", "Under 3: Free", "Parking: Free"],
    whyForAria: "Built into the mountainside — unique experience. Giraffe feeding (hand-feed giraffes!), monkey island, playground, carousel, African Rift Valley Climb. One of the most interactive zoos in the country",
    tips: ["It's on a mountainside — expect hills and stairs", "Bring a sturdy stroller or be prepared to carry", "Go early for active animals"],
    website: "https://www.cmzoo.org",
    websiteLabel: "cmzoo.org",
    city: "Colorado Springs",
    mapUrl: "https://maps.google.com/?q=4250+Cheyenne+Mountain+Zoo+Rd,+Colorado+Springs,+CO+80906",
  },
  {
    name: "Pikes Peak",
    location: "Colorado Springs, CO",
    duration: "2.5-4 hours",
    pricing: ["Pikes Peak Highway (drive): ~$15/adult, ~$5/child (6-12), under 6 free", "Cog Railway: ~$55-65/adult, ~$28-35/child (3-12)"],
    whyForAria: "14,115ft summit — highest point most people will ever visit. Cog Railway is more memorable for kids",
    tips: [
      "Summit is 14,115ft — EXTREME altitude for a 5-year-old",
      "Spend only 15-20 min at summit",
      "If Aria complains of headache or nausea, descend immediately",
      "Cog Railway is more memorable but takes longer (~3 hrs round trip)",
      "Highway drive is ~1.5 hrs round trip",
      "Dress warmly at summit even in summer (can be 30-40°F)",
      "Book Cog Railway in advance — sells out",
    ],
    website: "https://pikespeak.com",
    websiteLabel: "pikespeak.com",
    city: "Colorado Springs",
    mapUrl: "https://maps.google.com/?q=Pikes+Peak,+Colorado+Springs,+CO",
  },
  {
    name: "Boulder Flatirons — Chautauqua Park",
    location: "900 Chautauqua Pkwy, Boulder, CO 80302",
    distanceFromDEN: "~30 miles, 40 min",
    duration: "1.5-2 hours",
    pricing: ["FREE"],
    whyForAria: "Iconic Colorado rock formations, easy trails, open meadows to run around, picnic areas",
    tips: ["Parking fills fast on weekends — arrive before 10 AM", "The Chautauqua dining hall has a nice restaurant for lunch"],
    website: "https://www.bouldercolorado.gov/parks/chautauqua-park",
    websiteLabel: "bouldercolorado.gov",
    city: "Boulder",
    free: true,
    mapUrl: "https://maps.google.com/?q=900+Chautauqua+Pkwy,+Boulder,+CO+80302",
  },
  {
    name: "Estes Park Aerial Tramway",
    location: "490 Prospect Village Dr, Estes Park, CO 80517",
    duration: "1-1.5 hours",
    pricing: ["Adults: ~$18-22", "Children (3-11): ~$10-12", "Under 3: Free"],
    whyForAria: "Ride to top of Prospect Mountain for panoramic views",
    tips: ["Check weather — tram may close in high winds"],
    website: "https://www.estesaerialtramway.com",
    websiteLabel: "estesaerialtramway.com",
    city: "Estes Park",
    mapUrl: "https://maps.google.com/?q=490+Prospect+Village+Dr,+Estes+Park,+CO+80517",
  },
  {
    name: "Manitou Springs",
    location: "Manitou Springs, CO 80829",
    distanceFromDEN: "~10 min drive from Garden of the Gods",
    duration: "1-2 hours",
    pricing: ["FREE to walk around", "Mineral springs: FREE", "Manitou Cliff Dwellings: ~$10 adults, ~$5 children"],
    whyForAria: "Quirky mountain town with natural mineral springs (kids love the bubbling water), penny arcades, candy shops, unique boutiques. The whole town feels like a fairy tale",
    tips: ["Park downtown and walk along Cañon Ave", "The whole town is stroller-friendly", "Great for an unhurried morning before Garden of the Gods", "Mineral Springs — FREE, natural carbonated water fountains scattered around town"],
    website: "https://www.manitosprings.com",
    websiteLabel: "manitosprings.com",
    city: "Colorado Springs",
    free: true,
    highlight: true,
    mapUrl: "https://maps.google.com/?q=Manitou+Springs,+CO+80829",
  },
  {
    name: "Golden / Lookout Mountain",
    location: "Golden, CO 80401",
    distanceFromDEN: "~20 min from Denver",
    duration: "1-1.5 hours",
    pricing: ["FREE (buffalo viewing from road)"],
    whyForAria: "Wild buffalo herd visible from the road on Lookout Mountain! Drive up Lariat Loop Road and see buffalo roaming free. Also: Clear Creek (kids can pan for gold), downtown Golden has fun shops",
    tips: ["Perfect stop between Denver and Boulder/Estes Park", "The buffalo are real, wild, and often right next to the road", "Clear Creek — gold panning, creekside play", "Downtown Golden — fun shops, ice cream"],
    website: "https://www.goldencolorado.com",
    websiteLabel: "goldencolorado.com",
    city: "Golden",
    free: true,
    highlight: true,
    mapUrl: "https://maps.google.com/?q=Golden,+CO+80401",
  },
  {
    name: "Lake Estes",
    location: "1770 Lakeview Dr, Estes Park, CO 80517",
    duration: "1-2 hours",
    pricing: ["Paddle boat rentals: ~$15-20/hr", "Pontoon boat tours: ~$30-40/person", "Walking path: FREE"],
    whyForAria: "Paddle boats on a mountain lake — magical for a 5-year-old. The 3.3-mile paved path around the lake is great for evening walks",
    tips: ["Do this on RMNP evening when everyone is tired from hiking — it's relaxing and right in town", "Mini golf nearby"],
    website: "https://www.lakeestes.com",
    websiteLabel: "lakeestes.com",
    city: "Estes Park",
    mapUrl: "https://maps.google.com/?q=1770+Lakeview+Dr,+Estes+Park,+CO+80517",
  },
  {
    name: "Red Rocks Park & Amphitheatre",
    location: "18300 W Alameda Ave, Morrison, CO 80465",
    distanceFromDEN: "~35 miles, 40 min",
    duration: "1.5-2 hours",
    pricing: ["FREE (when no concert)", "Parking: ~$10"],
    whyForAria: "Massive natural red sandstone amphitheatre, short hiking trails, stunning acoustics",
    tips: ["Check concert schedule — free to visit when no event", "Combine with Denver activities"],
    website: "https://www.redrocksonline.com",
    websiteLabel: "redrocksonline.com",
    city: "Denver",
    free: true,
    mapUrl: "https://maps.google.com/?q=18300+W+Alameda+Ave,+Morrison,+CO+80465",
  },
];

export const bonusAttractions: Attraction[] = [
  {
    name: "Elitch Gardens",
    location: "2000 Elitch Circle, Denver, CO 80204",
    duration: "3-4 hours",
    pricing: ["~$45-73/person (varies by day/package)"],
    whyForAria: "Small amusement park with rides for all ages, including toddler-friendly rides. Roller coasters, carousel, water rides",
    tips: ["Fun but expensive", "Only if Aria loves amusement parks and you skip the aquarium"],
    website: "https://www.elitchgardens.com",
    websiteLabel: "elitchgardens.com",
    city: "Denver",
    mapUrl: "https://maps.google.com/?q=2000+Elitch+Circle,+Denver,+CO+80204",
  },
  {
    name: "Georgetown Loop Railroad",
    location: "Georgetown, CO 80444",
    distanceFromDEN: "~45 min from Denver",
    duration: "~1 hour train ride",
    pricing: ["~$32 adults", "~$16 children (3-12)"],
    whyForAria: "Scenic narrow-gauge train through the mountains. Kids love trains. Beautiful scenery",
    tips: ["Worth it if you're driving through the mountains", "Combine with Golden/buffalo herd day"],
    website: "https://www.georgetownlooprr.com",
    websiteLabel: "georgetownlooprr.com",
    city: "Golden",
    mapUrl: "https://maps.google.com/?q=Georgetown,+CO+80444",
  },
  {
    name: "Broadmoor Seven Falls",
    location: "1045 Lower Gold Camp Rd, Colorado Springs, CO 80906",
    duration: "1.5-2 hours",
    pricing: ["~$23 adults", "~$14 children (5-12)"],
    whyForAria: "7 cascading waterfalls you climb up via stairs. Eagle viewing station. Beautiful and unique",
    tips: ["The 222-step climb might be tough for a 5-year-old", "Do only if you skip Pikes Peak"],
    website: "https://www.broadmoor.com/experiences/seven-falls/",
    websiteLabel: "broadmoor.com",
    city: "Colorado Springs",
    mapUrl: "https://maps.google.com/?q=1045+Lower+Gold+Camp+Rd,+Colorado+Springs,+CO+80906",
  },
  {
    name: "Cave of the Winds",
    location: "100 Cave of the Winds Rd, Manitou Springs, CO 80829",
    duration: "1-1.5 hours",
    pricing: ["~$20 adults", "~$12 children"],
    whyForAria: "Guided cave tour, underground rooms, lantern-lit passages. The 'Wind Tour' is family-friendly",
    tips: ["Fun if Aria likes caves and dark spaces", "Some kids find caves scary — know your child"],
    website: "https://www.caveofthewinds.com",
    websiteLabel: "caveofthewinds.com",
    city: "Colorado Springs",
    mapUrl: "https://maps.google.com/?q=100+Cave+of+the+Winds+Rd,+Manitou+Springs,+CO+80829",
  },
  {
    name: "Wings Over the Rockies Air Museum",
    location: "7711 E Academy Blvd, Denver, CO 80231",
    duration: "1.5-2 hours",
    pricing: ["~$18 adults", "~$13 children"],
    whyForAria: "Real airplanes and helicopters, flight simulators, kids can sit in cockpits",
    tips: ["Great for kid who likes planes", "Skip if not interested in aviation"],
    city: "Denver",
    mapUrl: "https://maps.google.com/?q=7711+E+Academy+Blvd,+Denver,+CO+80231",
  },
];

export type Hotel = {
  name: string;
  address: string;
  why: string;
  rate: string;
  distanceToAttraction?: string;
  booking: string;
  bookingLabel: string;
  city: string;
  highlight?: string;
  mapUrl?: string;
};

export const hotels: Hotel[] = [
  // Denver
  {
    name: "Embassy Suites by Hilton Denver Southeast",
    address: "8501 E Belleview Ave, Greenwood Village, CO 80111",
    why: "Free hot breakfast, free evening reception (drinks + snacks), indoor pool, suites with separate living area (space for Aria), near I-25",
    rate: "$180-250/night (July peak)",
    distanceToAttraction: "~20 min to Denver Zoo",
    booking: "https://www.hilton.com",
    bookingLabel: "hilton.com",
    city: "Denver",
    highlight: "Free breakfast + evening reception saves ~$50-70/day for family",
    mapUrl: "https://maps.google.com/?q=8501+E+Belleview+Ave,+Greenwood+Village,+CO+80111",
  },
  {
    name: "Hampton Inn Denver Downtown",
    address: "1450 Delaware St, Denver, CO 80204",
    why: "Free hot breakfast, indoor pool, downtown location (walk to Union Station), modern rooms",
    rate: "$170-230/night",
    distanceToAttraction: "~10 min to Denver Zoo",
    booking: "https://www.hilton.com",
    bookingLabel: "hilton.com",
    city: "Denver",
    mapUrl: "https://maps.google.com/?q=1450+Delaware+St,+Denver,+CO+80204",
  },
  {
    name: "Homewood Suites by Hilton Denver Tech Center",
    address: "4444 S Syracuse St, Denver, CO 80237",
    why: "Free breakfast, evening social (Mon-Thu), full kitchen in suites (save money on meals), indoor pool",
    rate: "$160-220/night",
    distanceToAttraction: "~20 min to DEN",
    booking: "https://www.hilton.com",
    bookingLabel: "hilton.com",
    city: "Denver",
    highlight: "Kitchenette saves money on meals",
    mapUrl: "https://maps.google.com/?q=4444+S+Syracuse+St,+Denver,+CO+80237",
  },
  // Estes Park
  {
    name: "YMCA of the Rockies — Estes Park Center",
    address: "2515 Tunnel Rd, Estes Park, CO 80517",
    why: "THE family destination in Estes Park. Cabin-style lodging, massive activities program (mini golf, horseback riding, arts & crafts, swimming pool, playground, organized kids activities), beautiful mountain setting, very affordable",
    rate: "$150-250/night (cabins sleep 4-8)",
    distanceToAttraction: "~10 min to RMNP entrance",
    booking: "https://www.ymcarocks.org",
    bookingLabel: "ymcarocks.org",
    city: "Estes Park",
    highlight: "Best for families — tons of kid activities on-site. BOOK EARLY, fills up fast",
    mapUrl: "https://maps.google.com/?q=2515+Tunnel+Rd,+Estes+Park,+CO+80517",
  },
  {
    name: "Holiday Inn Estes Park",
    address: "1635 W Highway 34, Estes Park, CO 80517",
    why: "Reliable chain, indoor pool, free breakfast, restaurant on-site, walking distance to town",
    rate: "$180-280/night (July peak)",
    distanceToAttraction: "~5 min to RMNP entrance",
    booking: "https://www.ihg.com",
    bookingLabel: "ihg.com",
    city: "Estes Park",
    mapUrl: "https://maps.google.com/?q=1635+W+Highway+34,+Estes+Park,+CO+80517",
  },
  {
    name: "Silver Moon Inn",
    address: "200 W Riverside Dr, Estes Park, CO 80517",
    why: "Riverfront location, heated outdoor pool, free breakfast, spacious rooms, walking distance to downtown",
    rate: "$170-250/night",
    booking: "https://www.silvermooninn.com",
    bookingLabel: "silvermooninn.com",
    city: "Estes Park",
    mapUrl: "https://maps.google.com/?q=200+W+Riverside+Dr,+Estes+Park,+CO+80517",
  },
];

export type CarRental = {
  company: string;
  vehicleType: string;
  dailyRate: string;
  total: string;
  notes: string;
};

export const carRentals: CarRental[] = [
  { company: "Enterprise", vehicleType: "Mid-size SUV", dailyRate: "$80-120/day", total: "$480-720", notes: "Best customer service, on-site at DEN" },
  { company: "Budget", vehicleType: "Mid-size SUV", dailyRate: "$70-110/day", total: "$420-660", notes: "Often cheapest, on-site" },
  { company: "Alamo", vehicleType: "Mid-size SUV", dailyRate: "$75-115/day", total: "$450-690", notes: "Good value, on-site" },
  { company: "Hertz", vehicleType: "Mid-size SUV", dailyRate: "$85-130/day", total: "$510-780", notes: "Premium option, on-site" },
  { company: "National", vehicleType: "Mid-size SUV", dailyRate: "$90-140/day", total: "$540-840", notes: "Business-class, on-site" },
];

export const carAdditionalCosts = [
  { item: "Child car seat", cost: "~$10-15/day ($60-90 total)", tip: "OR bring your own (saves $60-90)" },
  { item: "Insurance", cost: "Likely covered by credit card", tip: "Check before trip — skip rental company insurance" },
  { item: "Gas", cost: "~$60-80 for the week", tip: "Mountain driving uses more fuel" },
  { item: "Tolls", cost: "~$5-10", tip: "E-470 toll road near DEN — only if you use it" },
];

export type Restaurant = {
  name: string;
  cuisine: string;
  avgCost: string;
  notes: string;
  city: string;
  address?: string;
  mapUrl?: string;
};

export const restaurants: Restaurant[] = [
  // Denver
  { name: "Illegal Pete's (LoDo)", cuisine: "Burritos/Mexican", avgCost: "$25-35", notes: "Local favorite, huge portions, kid-friendly", city: "Denver", address: "1410 Larimer St, Denver, CO 80202", mapUrl: "https://maps.google.com/?q=1410+Larimer+St,+Denver,+CO+80202" },
  { name: "Snooze AM Eatery", cuisine: "Breakfast/Brunch", avgCost: "$30-40", notes: "Famous pancakes. Breakfast only (closes 2:30 PM)", city: "Denver", address: "1310 E Colfax Ave, Denver, CO 80218", mapUrl: "https://maps.google.com/?q=1310+E+Colfax+Ave,+Denver,+CO+80218" },
  { name: "Snarf's Sandwiches", cuisine: "Sandwiches", avgCost: "$20-30", notes: "Local chain, great subs, affordable", city: "Denver", address: "1075 S Colorado Blvd, Denver, CO 80246", mapUrl: "https://maps.google.com/?q=1075+S+Colorado+Blvd,+Denver,+CO+80246" },
  { name: "Spice Trade Chicken", cuisine: "Fried chicken", avgCost: "$25-35", notes: "Denver institution, casual", city: "Denver", address: "2550 19th St, Denver, CO 80211", mapUrl: "https://maps.google.com/?q=2550+19th+St,+Denver,+CO+80211" },
  // Boulder
  { name: "Qdoba (Pearl Street)", cuisine: "Mexican", avgCost: "$25-35", notes: "Chipotle-style, kid-friendly", city: "Boulder", address: "1300 Pearl St, Boulder, CO 80302", mapUrl: "https://maps.google.com/?q=1300+Pearl+St,+Boulder,+CO+80302" },
  { name: "Chautauqua Dining Hall", cuisine: "American", avgCost: "$35-50", notes: "Historic, beautiful setting, great views", city: "Boulder", address: "900 Chautauqua Pkwy, Boulder, CO 80302", mapUrl: "https://maps.google.com/?q=900+Chautauqua+Pkwy,+Boulder,+CO+80302" },
  { name: "Pearl Street Mall vendors", cuisine: "Various", avgCost: "$15-30", notes: "Street food, ice cream, snacks", city: "Boulder", address: "Pearl St Mall, Boulder, CO 80302", mapUrl: "https://maps.google.com/?q=Pearl+Street+Mall,+Boulder,+CO+80302" },
  // Estes Park
  { name: "Poppy's Pizza & Grill", cuisine: "Pizza/Italian", avgCost: "$30-40", notes: "Local favorite, great pizza", city: "Estes Park", address: "470 Big Thompson Ave, Estes Park, CO 80517", mapUrl: "https://maps.google.com/?q=470+Big+Thompson+Ave,+Estes+Park,+CO+80517" },
  { name: "Nepal's Cafe", cuisine: "Nepalese/Indian", avgCost: "$30-45", notes: "Unique, flavorful, ask for mild for Aria", city: "Estes Park", address: "920 Moraine Ave, Estes Park, CO 80517", mapUrl: "https://maps.google.com/?q=920+Moraine+Ave,+Estes+Park,+CO+80517" },
  { name: "Rock Inn Mountain Tavern", cuisine: "American", avgCost: "$30-45", notes: "Historic cabin, outdoor seating, good burgers", city: "Estes Park", address: "500 W Elkhorn Ave, Estes Park, CO 80517", mapUrl: "https://maps.google.com/?q=500+W+Elkhorn+Ave,+Estes+Park,+CO+80517" },
  { name: "Estes Park Pie Shop", cuisine: "Pies/Dessert", avgCost: "$10-15", notes: "Must-visit for Aria! Amazing pies", city: "Estes Park", address: "330 W Elkhorn Ave, Estes Park, CO 80517", mapUrl: "https://maps.google.com/?q=330+W+Elkhorn+Ave,+Estes+Park,+CO+80517" },
  // Colorado Springs
  { name: "Front Range BBQ", cuisine: "BBQ", avgCost: "$25-40", notes: "Excellent BBQ, casual, affordable", city: "Colorado Springs", address: "3310 W Colorado Ave, Colorado Springs, CO 80904", mapUrl: "https://maps.google.com/?q=3310+W+Colorado+Ave,+Colorado+Springs,+CO+80904" },
  { name: "Pho Brothers", cuisine: "Vietnamese", avgCost: "$25-35", notes: "Excellent pho, affordable, kid-friendly", city: "Colorado Springs", address: "3630 W Colorado Ave, Colorado Springs, CO 80904", mapUrl: "https://maps.google.com/?q=3630+W+Colorado+Ave,+Colorado+Springs,+CO+80904" },
  { name: "Marble Bag", cuisine: "Ice cream", avgCost: "$10-15", notes: "Old Colorado City, Aria will love it", city: "Colorado Springs", address: "220 W Pikes Peak Ave, Colorado Springs, CO 80903", mapUrl: "https://maps.google.com/?q=220+W+Pikes+Peak+Ave,+Colorado+Springs,+CO+80903" },
];

export const moneySavingTips = [
  "Hotels with free breakfast save $30-50/day for a family",
  "Pack snacks and water for RMNP days (no food services inside the park)",
  "Picnic lunches at scenic overlooks are free + memorable",
  "Avoid restaurants inside major attractions (zoo, aquarium) — prices are inflated",
  "Colorado tap water is excellent — bring refillable bottles",
];

export type WeatherData = {
  location: string;
  elevation: string;
  avgHigh: string;
  avgLow: string;
  rainDays: string;
  notes: string;
};

export const weatherData: WeatherData[] = [
  { location: "Denver", elevation: "5,280 ft", avgHigh: "87-90°F", avgLow: "60-64°F", rainDays: "6-8/month", notes: "Hot afternoons, cool evenings" },
  { location: "Boulder", elevation: "5,430 ft", avgHigh: "86-89°F", avgLow: "58-62°F", rainDays: "6-8/month", notes: "Similar to Denver" },
  { location: "Estes Park", elevation: "7,522 ft", avgHigh: "78-82°F", avgLow: "50-55°F", rainDays: "8-10/month", notes: "Cooler, more rain" },
  { location: "Colorado Springs", elevation: "6,035 ft", avgHigh: "83-86°F", avgLow: "55-58°F", rainDays: "7-9/month", notes: "Slightly cooler than Denver" },
  { location: "RMNP Summit", elevation: "12,183 ft", avgHigh: "50-60°F", avgLow: "35-42°F", rainDays: "Daily storms", notes: "Can snow even in August!" },
];

export const safetyRules = [
  { rule: "Afternoon Thunderstorms", detail: "Colorado summer = sunny mornings, thunderstorms developing 2-4 PM. Be off exposed mountain ridges and summits by noon. Afternoon lightning is dangerous above treeline." },
  { rule: "For RMNP", detail: "Plan morning hikes, return to lower elevations or the car by early afternoon." },
  { rule: "Aria Safety", detail: "If thunderstorms hit while driving, stay in the car. If hiking, get below treeline immediately." },
  { rule: "Wildfire Risk", detail: "Peak wildfire season is July-August. Monitor airnow.gov for real-time AQI. If AQI > 150, limit outdoor time for Aria." },
  { rule: "Flash Flood Risk", detail: "Mountain areas (especially RMNP canyons) are prone to flash flooding. Never hike into narrow canyons if storms are forecast." },
  { rule: "Sun Exposure", detail: "UV index at altitude is 3x stronger than sea level. SPF 50+ sunscreen, reapply every 2 hours, hat, sunglasses for everyone including Aria." },
];

export type AltitudeData = {
  location: string;
  elevation: string;
  riskLevel: string;
  color: "green" | "yellow" | "orange" | "red";
};

export const altitudeData: AltitudeData[] = [
  { location: "Denver", elevation: "5,280 ft", riskLevel: "Moderate", color: "green" },
  { location: "Boulder", elevation: "5,430 ft", riskLevel: "Moderate", color: "green" },
  { location: "Estes Park", elevation: "7,522 ft", riskLevel: "Moderate-High", color: "yellow" },
  { location: "RMNP Bear Lake", elevation: "9,450 ft", riskLevel: "High", color: "orange" },
  { location: "RMNP Trail Ridge", elevation: "12,183 ft", riskLevel: "Very High", color: "red" },
  { location: "Pikes Peak Summit", elevation: "14,115 ft", riskLevel: "Extreme", color: "red" },
];

export const altitudeSymptoms = [
  "Headache",
  "Nausea",
  "Dizziness",
  "Fatigue",
  "Loss of appetite",
  "Trouble sleeping",
];

export const altitudeAriaWatch = [
  "Irritability",
  "Not eating",
  "Clinginess",
  "Vomiting",
];

export const altitudePrevention = [
  "Acclimate in Denver first — Day 1 and 2 at 5,280ft before going higher",
  "Hydrate aggressively — 2-3x normal water intake. Bring a water bottle for Aria and refill constantly",
  "Take it slow — No rushing up to 12,000ft. Spend a day at Estes Park (7,500ft) before RMNP",
  "Don't go too high too fast — On RMNP day, start at Bear Lake (9,450ft). If Aria feels fine, drive higher",
  "Pikes Peak caution — 14,115ft is extreme for a 5-year-old. Spend only 15-20 min at summit",
  "Consult pediatrician before trip — ask about altitude sickness prevention for a 5-year-old",
];

export const descendImmediately = [
  "Persistent headache that doesn't improve",
  "Vomiting more than once",
  "Confusion or extreme lethargy",
  "Difficulty walking / loss of coordination",
  "Blue lips or fingernails",
];

export type PackingItem = {
  category: string;
  items: string[];
};

export const packingList: PackingItem[] = [
  {
    category: "For Aria (5-year-old)",
    items: [
      "Sun hat (wide-brim)",
      "Sunglasses (UV-blocking)",
      "Sunscreen SPF 50+ (mineral/zinc oxide for kids)",
      "Light long-sleeve shirt (sun + mountain warmth)",
      "Fleece or light jacket (mountains are cold in morning/evening)",
      "Rain jacket (afternoon storms)",
      "Comfortable walking shoes (closed-toe, broken in)",
      "Water bottle (fun one she'll actually use)",
      "Snacks (granola bars, crackers, fruit — for hiking)",
      "Small backpack (let her carry her own water + snack)",
      "Band-aids + small first aid kit",
      "Motion sickness medication (if needed for mountain roads)",
      "Stroller or carrier (for tired legs)",
      "Swimwear (hotel pools)",
    ],
  },
  {
    category: "For Adults",
    items: [
      "All of Aria's items (minus stroller)",
      "Hiking shoes or trail runners",
      "Layers! (T-shirt → long sleeve → fleece → light jacket)",
      "Daypack with water reservoir (2L minimum)",
      "Binoculars (wildlife viewing in RMNP)",
      "Camera",
      "Car charger + phone mounts",
      "Cooler bag + ice packs (for picnic lunches + cold drinks)",
      "Refillable water bottles (1L each minimum)",
    ],
  },
  {
    category: "Essential Documents",
    items: [
      "Driver's licenses (for car rental)",
      "Health insurance cards",
      "Pediatrician contact info (for altitude questions)",
      "RMNP Timed Entry Permit (printed or on phone)",
      "Hotel confirmations",
      "Car rental confirmation",
      "Flight confirmations",
    ],
  },
];

export const beforeYouLeave = [
  { task: "Book RMNP Timed Entry Permits", deadline: "July 1 at 8:00 AM MT", priority: "critical" },
  { task: "Book car rental (SUV at DEN)", deadline: "ASAP — July is peak season", priority: "critical" },
  { task: "Book hotels (both locations)", deadline: "ASAP — Estes Park fills up", priority: "critical" },
  { task: "Check RMNP permit release date for 2026", deadline: "June 2026", priority: "important" },
  { task: "Consult pediatrician about altitude for Aria", deadline: "2 weeks before", priority: "important" },
  { task: "Book Pikes Peak Cog Railway (if desired)", deadline: "2 weeks before", priority: "important" },
  { task: "Book Estes Park Aerial Tramway (if desired)", deadline: "2 weeks before", priority: "important" },
  { task: "Download offline maps", deadline: "1 day before", priority: "nice" },
  { task: "Check air quality / wildfire status", deadline: "2 days before", priority: "nice" },
  { task: "Print RMNP trail maps (cell service is spotty)", deadline: "1 day before", priority: "nice" },
];

export type BudgetRow = {
  category: string;
  low: string;
  high: string;
  notes: string;
};

export const budgetRows: BudgetRow[] = [
  { category: "Hotels (6 nights)", low: "$1,000", high: "$1,500", notes: "Split stay, mid-range family hotels" },
  { category: "Car rental (6 days)", low: "$480", high: "$780", notes: "Mid-size SUV + gas" },
  { category: "Car seat", low: "$0", high: "$90", notes: "Bring your own = $0" },
  { category: "Food (7 days)", low: "$600", high: "$1,000", notes: "Mix of restaurants + picnics" },
  { category: "Attractions", low: "$300", high: "$550", notes: "Zoo, museum, RMNP, Pikes Peak, tramway, etc." },
  { category: "Gas", low: "$60", high: "$80", notes: "Mountain driving uses more" },
  { category: "Misc (souvenirs, tips)", low: "$100", high: "$200", notes: "" },
];

export const costSavingStrategies = [
  "Hotels with free breakfast save ~$200-300 over the trip",
  "Drury Inn's free evening reception saves ~$150 on dinners",
  "Picnic lunches instead of restaurants save ~$200",
  "Bring your own car seat saves $60-90",
  "Garden of the Gods + Red Rocks + Flatirons + Buffalo Herd + Mineral Springs = FREE major attractions",
  "Denver Zoo + Museum of Nature & Science (same park) = efficient day",
];

export type QuickLink = {
  label: string;
  url: string;
  category: string;
};

export const quickLinks: QuickLink[] = [
  // Attractions
  { label: "Denver Zoo", url: "https://www.denverzoo.org", category: "Attractions" },
  { label: "Denver Museum of Nature & Science", url: "https://www.dmns.org", category: "Attractions" },
  { label: "Children's Museum Denver", url: "https://www.childrensmuseumdenver.org", category: "Attractions" },
  { label: "Downtown Aquarium", url: "https://www.denveraquarium.com", category: "Attractions" },
  { label: "Rocky Mountain NP", url: "https://www.nps.gov/romo", category: "Attractions" },
  { label: "RMNP Timed Entry (Recreation.gov)", url: "https://www.recreation.gov", category: "Attractions" },
  { label: "Garden of the Gods", url: "https://www.gardenofthegods.com", category: "Attractions" },
  { label: "Cheyenne Mountain Zoo", url: "https://www.cmzoo.org", category: "Attractions" },
  { label: "Pikes Peak", url: "https://pikespeak.com", category: "Attractions" },
  { label: "Boulder Flatirons/Chautauqua", url: "https://www.bouldercolorado.gov/parks/chautauqua-park", category: "Attractions" },
  { label: "Estes Park Aerial Tramway", url: "https://www.estesaerialtramway.com", category: "Attractions" },
  { label: "Red Rocks", url: "https://www.redrocksonline.com", category: "Attractions" },
  { label: "Manitou Springs", url: "https://www.manitosprings.com", category: "Attractions" },
  { label: "Georgetown Loop Railroad", url: "https://www.georgetownlooprr.com", category: "Attractions" },
  { label: "Elitch Gardens", url: "https://www.elitchgardens.com", category: "Attractions" },
  { label: "Broadmoor Seven Falls", url: "https://www.broadmoor.com/experiences/seven-falls/", category: "Attractions" },
  { label: "Cave of the Winds", url: "https://www.caveofthewinds.com", category: "Attractions" },
  // Hotels
  { label: "YMCA of the Rockies (Estes Park)", url: "https://www.ymcarocks.org", category: "Hotels" },
  { label: "Hilton (Embassy Suites, Hampton, Homewood)", url: "https://www.hilton.com", category: "Hotels" },
  { label: "Holiday Inn Estes Park", url: "https://www.ihg.com", category: "Hotels" },
  { label: "Silver Moon Inn", url: "https://www.silvermooninn.com", category: "Hotels" },
  // Car Rental
  { label: "Compare all (Kayak)", url: "https://www.kayak.com/cars", category: "Car Rental" },
  { label: "Costco Travel", url: "https://www.costcotravel.com", category: "Car Rental" },
  { label: "Enterprise DEN", url: "https://www.enterprise.com", category: "Car Rental" },
  { label: "Budget DEN", url: "https://www.budget.com", category: "Car Rental" },
  // Weather & Safety
  { label: "Colorado Weather", url: "https://www.weather.gov/bou", category: "Weather & Safety" },
  { label: "Air Quality (wildfire smoke)", url: "https://www.airnow.gov", category: "Weather & Safety" },
  { label: "Wildfire Maps", url: "https://inciweb.nwcg.gov", category: "Weather & Safety" },
  { label: "Road Conditions", url: "https://www.cotrip.gov", category: "Weather & Safety" },
  { label: "RMNP Alerts", url: "https://www.nps.gov/romo/planyourvisit/conditions.htm", category: "Weather & Safety" },
];
