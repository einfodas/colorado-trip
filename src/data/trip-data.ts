// Updated for v2
// Colorado Family Vacation Plan — All trip data
// Source: Obsidian vault Research/Colorado-Family-Vacation-Plan-July-2026.md
// Updated: June 23, 2026 — includes Denver Museum of Nature & Science, Manitou Springs, Golden/Buffalo Herd, Echo Lake, Lake Estes

export const tripMeta = {
  title: "Colorado Family Vacation",
  dates: "July 29 – August 4, 2026",
  duration: "7 Days, 6 Nights",
  family: ["Jay", "Moon", "Aria (age 5)"],
  budgetRange: "$1,925 confirmed + food/activities",
  baseCities: "Denver (4 nights) + Estes Park (2 nights)",
};

export type BeforeYouLeaveItem = {
  task: string;
  deadline: string;
  priority: "critical" | "important" | "nice" | "completed";
};

export type CarAdditionalCost = {
  item: string;
  cost: string;
  tip: string;
};

export type SafetyRule = {
  rule: string;
  detail: string;
};

export type BudgetRow = {
  category: string;
  low: string;
  high: string;
  notes?: string;
};

export type Flight = {
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  date: string;
};

export const flights: Flight[] = [
  {
    airline: "Delta",
    flightNumber: "3876",
    from: "Austin (AUS)",
    to: "Denver (DEN)",
    departure: "7:25 AM",
    arrival: "8:48 AM",
    date: "Wed, Jul 29",
  },
  {
    airline: "Delta",
    flightNumber: "3876",
    from: "Denver (DEN)",
    to: "Austin (AUS)",
    departure: "9:29 AM",
    arrival: "12:44 PM",
    date: "Tue, Aug 4",
  },
];

export type TimelineItem = {
  time: string;
  activity: string;
  notes: string;
  mapUrl?: string;
  pricing?: string;
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
  rainPlan?: string;
};

export const itinerary: DayPlan[] = [
  {
    day: 1,
    date: "July 29",
    dayName: "Wednesday",
    theme: "Land, settle in, easy start",
    location: "Denver",
    timeline: [
      { time: "8:48 AM", activity: "Arrive DEN (Delta 3876)", notes: "" },
      { time: "9:15 AM", activity: "Collect luggage", notes: "Allow 30 min for baggage claim" },
      { time: "9:45 AM", activity: "Go to Budget Fastbreak Counter", notes: "Follow signs to rental car garage. Fastbreak = skip counter, go straight to vehicle" },
      { time: "10:00 AM", activity: "Pick up Budget rental car", notes: "Reservation #00841958US5. Standard SUV (Chevy Equinox)", mapUrl: "https://maps.google.com/?q=Denver+International+Airport+Car+Rental" },
      { time: "10:15 AM", activity: "Drive to DoubleTree Denver", notes: "~25 min from DEN", mapUrl: "https://maps.google.com/?q=3203+Quebec+St,+Denver,+CO+80207" },
      { time: "10:45 AM", activity: "Early check-in or luggage drop", notes: "Request early check-in (4 PM standard). If room not ready, leave luggage at front desk" },
      { time: "11:15 AM", activity: "Denver Union Station", notes: "Free to walk around, kid-friendly fountains, ice cream at Milkbox Ice Creamery inside", mapUrl: "https://maps.google.com/?q=1701+Wynkoop+St,+Denver,+CO+80202", pricing: "Free" },
      { time: "12:30 PM", activity: "Lunch at Union Station or LoDo", notes: "Multiple restaurants inside Union Station" },
      { time: "2:00 PM", activity: "Explore downtown Denver", notes: "16th Street Mall, Larimer Square, window shopping" },
      { time: "4:00 PM", activity: "Check into DoubleTree Denver", notes: "Rest, let Aria adjust to altitude. Itinerary #73485184920880", mapUrl: "https://maps.google.com/?q=3203+Quebec+St,+Denver,+CO+80207" },
      { time: "6:00 PM", activity: "Dinner at Illegal Pete's (LoDo)", notes: "Casual, affordable, kid-approved burritos", mapUrl: "https://maps.google.com/?q=1410+Larimer+St,+Denver,+CO+80202", pricing: "~$25-35 family" },
      { time: "7:30 PM", activity: "Return to hotel, early bedtime", notes: "Altitude adjustment: critical first night" },
    ],
    driving: "DEN → Union Station (~30 min) → Hotel (~10 min) → LoDo (~15 min) → Hotel",
    totalDriving: "~55 min",
    rainPlan: "Denver Union Station + Milkbox Ice Creamery are indoors. 16th Street Mall covered walkways. Downtown Aquarium (indoor, ~$30-35 adult) as backup afternoon activity.",
  },
  {
    day: 2,
    date: "July 30",
    dayName: "Thursday",
    theme: "Full Denver kid day (indoor — hot weather)",
    location: "Denver",
    timeline: [
      { time: "8:00 AM", activity: "Hotel breakfast", notes: "" },
      { time: "8:45 AM", activity: "Leave hotel for Downtown Aquarium", notes: "~15 min drive" },
      { time: "9:00 AM", activity: "Downtown Aquarium Denver", notes: "2-3 hrs. Fully indoor & air-conditioned. Touch tanks, shark tunnel, stingray bay, aquarium tunnel you walk through. Great for Aria", mapUrl: "https://maps.google.com/?q=4100+E+35th+Ave,+Denver,+CO+80216", pricing: "Adults ~$30-35, Children (3-11) ~$25-28, Under 3 Free" },
      { time: "12:00 PM", activity: "Lunch near Aquarium or drive to City Park", notes: "" },
      { time: "1:30 PM", activity: "Denver Museum of Nature & Science", notes: "2-3 hrs. Fully indoor & air-conditioned. DINOSAURS! Planetarium, IMAX, hands-on exhibits", mapUrl: "https://maps.google.com/?q=2001+Colorado+Blvd,+Denver,+CO+80205", pricing: "Adults ~$20, Children ~$15, Under 3 Free, IMAX ~$7-8" },
      { time: "5:00 PM", activity: "Return to hotel, rest/pool time", notes: "" },
      { time: "6:30 PM", activity: "Dinner", notes: "See Denver dining options" },
    ],
    driving: "Hotel → Aquarium (~15 min) → Museum (~15 min) → Hotel (~15 min)",
    totalDriving: "~45 min",
    rainPlan: "Both Aquarium and Museum are fully indoors — heat/rain proof. If too hot or tired, skip Museum and do extended Aquarium + gift shop.",
  },
  {
    day: 3,
    date: "July 31",
    dayName: "Friday",
    theme: "Children's Museum + Red Rocks",
    location: "Denver",
    timeline: [
      { time: "8:00 AM", activity: "Hotel breakfast", notes: "" },
      { time: "9:15 AM", activity: "Leave hotel for Children's Museum", notes: "~15 min drive" },
      { time: "9:30 AM", activity: "Children's Museum of Denver", notes: "2-3 hrs. Purpose-built for young children. Water play area, climbing structures, art studio, pretend grocery store, train table. One of the best children's museums in the country", mapUrl: "https://maps.google.com/?q=2121+Children's+Museum+Dr,+Denver,+CO+80211", pricing: "All ages: ~$17-20 per person (flat rate), Under 1: Free" },
      { time: "12:30 PM", activity: "Lunch near Children's Museum", notes: "Highlands area has lots of family-friendly restaurants" },
      { time: "2:00 PM", activity: "Return to hotel, rest/pool time", notes: "Aria will be tired from the museum" },
      { time: "4:00 PM", activity: "Red Rocks Park & Amphitheatre", notes: "Massive natural red sandstone amphitheatre, short hiking trails, stunning acoustics. FREE when no concert", mapUrl: "https://maps.google.com/?q=18300+W+Alameda+Ave,+Morrison,+CO+80465", pricing: "Free (when no concert), Parking: ~$10" },
      { time: "6:30 PM", activity: "Dinner in Red Rocks area or back in Denver", notes: "" },
      { time: "8:00 PM", activity: "Return to hotel", notes: "" },
    ],
    driving: "Hotel → Children's Museum (~15 min) → Red Rocks (~30 min) → Hotel (~30 min)",
    totalDriving: "~1.25 hrs",
    rainPlan: "Children's Museum is indoors. Red Rocks can swap for Downtown Aquarium or extended Children's Museum visit if heavy afternoon rain.",
  },
  {
    day: 4,
    date: "August 1",
    dayName: "Saturday",
    theme: "Golden buffalo herd + Boulder Flatirons + scenic drive",
    location: "Denver → Golden → Boulder → Denver",
    timeline: [
      { time: "8:00 AM", activity: "Leave hotel for Golden", notes: "~30 min drive" },
      { time: "8:30 AM", activity: "Lookout Mountain + Buffalo Herd", notes: "FREE! Wild buffalo herd roaming on Lookout Mountain. Drive up, see buffalo from the car. Aria will LOVE this. Also: Lariat Loop scenic drive", mapUrl: "https://maps.google.com/?q=Lookout+Mountain,+Golden,+CO+80403", pricing: "Free" },
      { time: "10:00 AM", activity: "Drive Golden → Boulder", notes: "~20 min" },
      { time: "10:45 AM", activity: "Boulder Flatirons at Chautauqua Park", notes: "Easy 1-mile loop trail, stunning rock formations, kid-friendly. Free.", mapUrl: "https://maps.google.com/?q=Chautauqua+Park,+Boulder,+CO+80302", pricing: "Free" },
      { time: "12:00 PM", activity: "Lunch on Pearl Street Mall (Boulder)", notes: "Outdoor pedestrian mall, street performers, lots of food options", mapUrl: "https://maps.google.com/?q=Pearl+Street+Mall,+Boulder,+CO+80302", pricing: "~$20-35 family" },
      { time: "1:30 PM", activity: "Drive back to Denver", notes: "~45 min via US-36" },
      { time: "2:30 PM", activity: "Return to hotel, rest/pool time", notes: "Pack for tomorrow's drive to Estes Park" },
      { time: "6:30 PM", activity: "Dinner near hotel", notes: "" },
      { time: "8:00 PM", activity: "Early bedtime", notes: "Big day tomorrow: drive to Estes Park" },
    ],
    driving: "Denver → Golden (30 min) → Boulder (20 min) → Denver (45 min)",
    totalDriving: "~1.5 hrs",
    rainPlan: "Buffalo herd viewing is from car (fine in rain). If heavy rain, swap Flatirons hike for indoor Boulder: ABC Kids Climbing, Museum of Boulder, or Pearl Street Mall shops with covered walkways.",
  },
  {
    day: 5,
    date: "August 2",
    dayName: "Sunday",
    theme: "Denver → Colorado Springs → Estes Park (scenic travel day)",
    location: "Denver → Colorado Springs → Estes Park",
    timeline: [
      { time: "8:00 AM", activity: "Hotel breakfast at DoubleTree", notes: "" },
      { time: "9:00 AM", activity: "Checkout from DoubleTree Denver", notes: "Itinerary #73485184920880. Load car and head south", mapUrl: "https://maps.google.com/?q=3203+Quebec+St,+Denver,+CO+80207" },
      { time: "9:15 AM", activity: "Drive Denver → Colorado Springs", notes: "~1 hour via I-25 S", mapUrl: "https://maps.google.com/?q=Garden+of+the+Gods,+1805+N+30th+St,+Colorado+Springs,+CO+80904" },
      { time: "10:15 AM", activity: "Garden of the Gods", notes: "FREE! Dramatic red rock formations, easy paved trails, Visitor Center with interactive exhibits. Perfect for Aria. Perkins Central Garden Trail is stroller-friendly (1.5 mi loop)", mapUrl: "https://maps.google.com/?q=Garden+of+the+Gods,+1805+N+30th+St,+Colorado+Springs,+CO+80904", pricing: "Free" },
      { time: "12:00 PM", activity: "Drive to Manitou Springs", notes: "~10 min from Garden of the Gods", mapUrl: "https://maps.google.com/?q=Manitou+Springs,+CO+80829" },
      { time: "12:15 PM", activity: "Lunch in Manitou Springs", notes: "Quirky mountain town. Front Range BBQ or any café along Cañon Ave", mapUrl: "https://maps.google.com/?q=Manitou+Springs,+CO+80829", pricing: "~$25-40 family" },
      { time: "1:00 PM", activity: "Explore Manitou Springs", notes: "Natural mineral springs (FREE, fun bubbling water for Aria), penny arcades, candy shops. The whole town feels like a fairy tale. Stroller-friendly", mapUrl: "https://maps.google.com/?q=Manitou+Springs,+CO+80829", pricing: "Free to explore" },
      { time: "2:00 PM", activity: "Drive Manitou Springs → Estes Park", notes: "~2 hours via US-24 W to I-25 N to US-34 W", mapUrl: "https://maps.google.com/?q=Estes+Park,+CO+80517" },
      { time: "4:00 PM", activity: "Check into Coyote Mountain Lodge", notes: "Booking #1658112994707402", mapUrl: "https://maps.google.com/?q=1340+Big+Thompson+Ave,+Estes+Park,+CO+80517" },
      { time: "4:30 PM", activity: "Estes Park downtown", notes: "Walk around, fudge shops, taffy, souvenir. Aria will love the candy stores", mapUrl: "https://maps.google.com/?q=Downtown+Estes+Park,+CO+80517" },
      { time: "6:00 PM", activity: "Dinner in Estes Park", notes: "See Estes Park dining options" },
      { time: "7:30 PM", activity: "Return to hotel, rest", notes: "Big day tomorrow: RMNP!" },
    ],
    driving: "Denver → Colorado Springs (1 hr) → Manitou Springs (10 min) → Estes Park (2 hrs)",
    totalDriving: "~3.5 hrs",
    rainPlan: "Garden of the Gods paved trails work in light rain. Manitou Springs has indoor candy shops and arcades. If heavy rain, skip Garden of the Gods, do Manitou Springs indoor activities, then drive directly to Estes Park.",
  },
  {
    day: 6,
    date: "August 3",
    dayName: "Monday",
    theme: "Full day in RMNP: the highlight",
    location: "Estes Park (Coyote Mountain Lodge, 1340 Big Thompson Ave)",
    timeline: [
      { time: "7:30 AM", activity: "Breakfast at Coyote Mountain Lodge", notes: "Pack snacks, water, and picnic lunch. Sunscreen, hats, layers for altitude" },
      { time: "8:00 AM", activity: "Leave Coyote Mountain Lodge", notes: "Drive to RMNP Bear Lake Road entrance (~10 min to Visitor Center, ~43 min to Bear Lake)" },
      { time: "8:15 AM", activity: "Beaver Meadows Visitor Center", notes: "Quick stop: Get Junior Ranger booklet for Aria, park map, validate Timed Entry Permit, use restrooms. If Bear Lake parking full, get shuttle info here", mapUrl: "https://maps.google.com/?q=Beaver+Meadows+Visitor+Center,+1000+US+Highway+36,+Estes+Park,+CO+80517" },
      { time: "8:30 AM", activity: "Drive to Bear Lake", notes: "~37 min from Visitor Center via Bear Lake Rd. If parking full at Bear Lake, park at Park & Ride and take free shuttle" },
      { time: "9:15 AM", activity: "Bear Lake", notes: "Easy 0.6-mile loop. Stunning mountain reflections. Perfect for Aria. Iconic RMNP spot!", mapUrl: "https://maps.google.com/?q=Bear+Lake,+Rocky+Mountain+National+Park,+Estes+Park,+CO", pricing: "Park $30/vehicle + Timed Entry $2" },
      { time: "10:00 AM", activity: "Sprague Lake (5 min drive)", notes: "Flat 0.8-mile loop, stroller accessible, incredible views. Elk often spotted here. Great for photos", mapUrl: "https://maps.google.com/?q=Sprague+Lake,+Rocky+Mountain+National+Park,+CO" },
      { time: "11:00 AM", activity: "Drive Trail Ridge Road up", notes: "Highest continuous paved road in US! Climb from 7,500ft to 12,000ft. Stop at Rainbow Curve, Forest Canyon Overlook. Watch for altitude symptoms in Aria", mapUrl: "https://maps.google.com/?q=Trail+Ridge+Road,+Rocky+Mountain+National+Park,+CO" },
      { time: "11:45 AM", activity: "Forest Canyon Pass (11,800 ft)", notes: "Short walk to overlook. Incredible views. Can be cold even in August — bring layers!" },
      { time: "12:15 PM", activity: "Drive to Alpine Visitor Center", notes: "Continue on Trail Ridge Road to the highest point. ~20 min drive" },
      { time: "12:45 PM", activity: "Alpine Visitor Center (11,796 ft)", notes: "Highest visitor center in NPS! Gift shop, snacks, restrooms, views. Good lunch stop with views", mapUrl: "https://maps.google.com/?q=Alpine+Visitor+Center,+Rocky+Mountain+National+Park,+CO" },
      { time: "1:30 PM", activity: "Picnic lunch at Alpine Visitor Center", notes: "Eat with panoramic views. Let Aria run around (carefully — altitude!)" },
      { time: "2:30 PM", activity: "Drive back down Trail Ridge Road", notes: "Stop at Many Parks Curve Overlook for photos. Different views coming down" },
      { time: "3:30 PM", activity: "Drive to Lily Lake", notes: "~30 min from Many Parks Curve. Different area of the park, less crowded" },
      { time: "4:00 PM", activity: "Lily Lake", notes: "Easy 0.8-mile flat loop. Beautiful lily pads, mountain views, very kid-friendly. Great late afternoon spot", mapUrl: "https://maps.google.com/?q=Lily+Lake,+Rocky+Mountain+National+Park,+CO" },
      { time: "5:00 PM", activity: "Moraine Park (elk viewing)", notes: "Famous elk meadow. Late afternoon = elk active! Aria will love seeing the elk herds. Drive through, photos, short walk", mapUrl: "https://maps.google.com/?q=Moraine+Park,+Rocky+Mountain+National+Park,+CO" },
      { time: "6:00 PM", activity: "Drive back to Beaver Meadows area", notes: "~15 min from Moraine Park" },
      { time: "6:30 PM", activity: "Estes Park downtown for early dinner", notes: "Walk around, grab dinner. Poppy's Pizza, Nepal's Cafe, or Rock Inn Mountain Tavern. Souvenir shops for Aria" },
      { time: "7:30 PM", activity: "Return to RMNP for sunset", notes: "Drive back into park for golden hour views" },
      { time: "7:45 PM", activity: "Sunset at Sprague Lake or Bear Lake Road", notes: "Golden hour = best photos. Wildlife active at dusk. Stay until ~8 PM", mapUrl: "https://maps.google.com/?q=Sprague+Lake,+Rocky+Mountain+National+Park,+CO" },
      { time: "8:00 PM", activity: "Drive back to Coyote Mountain Lodge", notes: "~10-15 min from park entrance" },
      { time: "8:15 PM", activity: "Return to lodge, pack for early departure", notes: "Flight at 9:29 AM — need to leave by 6:00 AM tomorrow" },
    ],
    driving: "Lodge → Visitor Center (10 min) → Bear Lake (~37 min) → Sprague Lake (5 min) → Trail Ridge Road up (~45 min) → Alpine Visitor Center → Lily Lake (~30 min) → Moraine Park (~15 min) → Lodge (~10 min)",
    totalDriving: "~2.5 hrs total driving",
    critical: "CRITICAL: Timed Entry Permit required! Book at recreation.gov. Bear Lake parking may be full after 8 AM — use free shuttle from Park & Ride if needed.",
    rainPlan: "Afternoon thunderstorms common. If storms after 2 PM, skip Lily Lake/Moraine Park, do indoor Estes Park activities: Estes Park Museum, Creativity Cabin (pottery), The Bull Pin (bowling/arcade), Time Emporium (escape room).",
  },
  {
    day: 7,
    date: "August 4",
    dayName: "Tuesday",
    theme: "Early departure, fly home",
    location: "Estes Park → Denver Airport",
    timeline: [
      { time: "5:30 AM", activity: "Early checkout from Coyote Mountain Lodge", notes: "Check out by 6:00 AM latest" },
      { time: "6:00 AM", activity: "Drive Estes Park → DEN Airport", notes: "~1.5 hrs via US-34 E to I-25 S. Leave by 6 AM to arrive by 7:30 AM", mapUrl: "https://maps.google.com/?q=Denver+International+Airport,+8500+Pe%C3%B1a+Blvd,+Denver,+CO+80249" },
      { time: "7:30 AM", activity: "Arrive DEN, drive to Budget return garage", notes: "Follow signs to rental car return. Budget is on-site" },
      { time: "7:45 AM", activity: "Return Budget rental car", notes: "Reservation #00841958US5. Fuel up before returning if needed" },
      { time: "8:00 AM", activity: "Shuttle/walk to terminal", notes: "~10-15 min to terminal from rental car garage" },
      { time: "8:15 AM", activity: "Terminal, check bags, security", notes: "Delta check-in. Grab quick breakfast at airport" },
      { time: "9:29 AM", activity: "Flight Delta 3876: DEN → AUS", notes: "Arrives Austin 12:44 PM" },
    ],
    driving: "Estes Park → DEN (1.5 hrs)",
    totalDriving: "~1.5 hrs",
    critical: "Flight at 9:29 AM — MUST leave Estes Park by 6:00 AM",
    rainPlan: "Minimal rain concern — mostly in car/airport. If road conditions bad, allow extra 30 min for Estes Park → DEN drive via US-36 instead of US-34.",
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
    pricing: ["Park entrance: $30/vehicle (7-day pass) or $15/person (walk/bike)", "Timed Entry Permit: REQUIRED: $2 reservation fee per permit"],
    whyForAria: "Bear Lake (easy 0.6-mile loop), Sprague Lake (stroller accessible), Echo Lake (beautiful mountain reflections), Lily Lake (lily pads), wildlife viewing (elk, moose, bighorn sheep), scenic drives",
    tips: [
      "Timed Entry Permits REQUIRED during peak season (late May through mid-October)",
      "Advance release: 1st of prior month at 8:00 AM MT (for Aug 1, permits go on sale July 1 at 8 AM MT)",
      "Day-before release: Additional permits at 4:00 PM MT the day before",
      "Book at recreation.gov: search 'Rocky Mountain'",
      "Enter before 9 AM to avoid parking nightmares",
      "Bear Lake parking fills by 8:30 AM on weekends, go early or use shuttle",
      "Pack layers: temperature drops 5-11°C at higher elevations",
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
    tips: ["Go early morning or late afternoon for best light and fewer crowds", "The Perkins Central Garden Trail is fully paved and stroller-friendly (1.5 mi loop)", "Combine with Manitou Springs (10 min drive)", "NOT FEASIBLE with current bookings: 4+ hours round trip from Estes Park"],
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
    whyForAria: "Built into the mountainside, unique experience. Giraffe feeding (hand-feed giraffes!), monkey island, playground, carousel, African Rift Valley Climb. One of the most interactive zoos in the country",
    tips: ["It's on a mountainside, expect hills and stairs", "Bring a sturdy stroller or be prepared to carry", "Go early for active animals", "NOT FEASIBLE with current bookings: 4+ hours round trip from Estes Park"],
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
    whyForAria: "14,115ft summit, highest point most people will ever visit. Cog Railway is more memorable for kids",
    tips: [
      "Summit is 14,115ft, EXTREME altitude for a 5-year-old",
      "Spend only 15-20 min at summit",
      "If Aria complains of headache or nausea, descend immediately",
      "Cog Railway is more memorable but takes longer (~3 hrs round trip)",
      "Highway drive is ~1.5 hrs round trip",
      "Dress warmly at summit even in summer (can be -1 to 4°C)",
      "Book Cog Railway in advance, sells out",
    ],
    website: "https://pikespeak.com",
    websiteLabel: "pikespeak.com",
    city: "Colorado Springs",
    mapUrl: "https://maps.google.com/?q=Pikes+Peak,+Colorado+Springs,+CO",
  },
  {
    name: "Boulder Flatirons at Chautauqua Park",
    location: "900 Chautauqua Pkwy, Boulder, CO 80302",
    distanceFromDEN: "~30 miles, 40 min",
    duration: "1.5-2 hours",
    pricing: ["FREE"],
    whyForAria: "Iconic Colorado rock formations, easy trails, open meadows to run around, picnic areas",
    tips: ["Parking fills fast on weekends, arrive before 10 AM", "The Chautauqua dining hall has a nice restaurant for lunch"],
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
    tips: ["Check weather: tram may close in high winds"],
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
    tips: ["Park downtown and walk along Cañon Ave", "The whole town is stroller-friendly", "Great for an unhurried morning before Garden of the Gods", "Mineral Springs: FREE, natural carbonated water fountains scattered around town"],
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
    tips: ["Perfect stop between Denver and Boulder/Estes Park", "The buffalo are real, wild, and often right next to the road", "Clear Creek: gold panning, creekside play", "Downtown Golden: fun shops, ice cream"],
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
    whyForAria: "Paddle boats on a mountain lake, magical for a 5-year-old. The 3.3-mile paved path around the lake is great for evening walks",
    tips: ["Do this on RMNP evening when everyone is tired from hiking, it's relaxing and right in town", "Mini golf nearby"],
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
    tips: ["Check concert schedule: free to visit when no event", "Combine with Denver activities"],
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
    tips: ["Fun if Aria likes caves and dark spaces", "Some kids find caves scary, know your child"],
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
  confirmed?: boolean;
  checkIn?: string;
  checkOut?: string;
  confirmationNo?: string;
};

export const hotels: Hotel[] = [
  // Denver — CONFIRMED BOOKING
  {
    name: "DoubleTree By Hilton Hotel Denver",
    address: "3203 Quebec St, Denver, CO 80207",
    why: "Confirmed booking. Full-service Hilton with indoor pool, restaurant, free WiFi. Near Cherry Creek and Denver Zoo",
    rate: "Booked",
    distanceToAttraction: "~15 min to Denver Zoo",
    booking: "https://www.hilton.com",
    bookingLabel: "hilton.com",
    city: "Denver",
    highlight: "CONFIRMED: Jul 29 – Aug 2 (4 nights). Itinerary #73485184920880",
    mapUrl: "https://maps.google.com/?q=3203+Quebec+St,+Denver,+CO+80207",
    confirmed: true,
    checkIn: "Wed, Jul 29, 4:00 PM",
    checkOut: "Sun, Aug 2, 11:00 AM",
    confirmationNo: "73485184920880",
  },
  // Estes Park — CONFIRMED BOOKING
  {
    name: "Coyote Mountain Lodge",
    address: "1340 Big Thompson Ave, Estes Park, CO 80517",
    why: "Confirmed booking. Mountain lodge setting, walking distance to downtown Estes Park, heated outdoor pool",
    rate: "Booked",
    distanceToAttraction: "~10 min to RMNP entrance",
    booking: "https://www.coyotemountainlodge.com",
    bookingLabel: "coyotemountainlodge.com",
    city: "Estes Park",
    highlight: "CONFIRMED: Aug 2 – Aug 4 (2 nights). Booking #1658112994707402",
    mapUrl: "https://maps.google.com/?q=1340+Big+Thompson+Ave,+Estes+Park,+CO+80517",
    confirmed: true,
    checkIn: "Sun, Aug 2, 4:00 PM",
    checkOut: "Tue, Aug 4, 11:00 AM",
    confirmationNo: "1658112994707402",
  },
];

export type CarRental = {
  company: string;
  vehicleType: string;
  pickup: string;
  return: string;
  total: string;
  confirmationNo: string;
  notes: string;
  status: "confirmed" | "pending";
};

export const carRentals: CarRental[] = [
  {
    company: "Budget",
    vehicleType: "Standard SUV (Chevrolet Equinox or similar)",
    pickup: "Denver Intl Airport (DEN), Wed Jul 29, 10:00 AM",
    return: "Denver Intl Airport (DEN), Tue Aug 4, 8:00 AM",
    total: "$407.94",
    confirmationNo: "00841958US5",
    notes: "Prepaid. Fastbreak Counter. Unlimited mileage. All insurance declined.",
    status: "confirmed",
  },
];

export const carAdditionalCosts: CarAdditionalCost[] = [
  { item: "Child car seat", cost: "~$10-15/day ($60-90 total)", tip: "OR bring your own (saves $60-90)" },
  { item: "Insurance", cost: "Likely covered by credit card", tip: "Check before trip: skip rental company insurance" },
  { item: "Gas", cost: "~$60-80 for the week", tip: "Mountain driving uses more fuel" },
  { item: "Tolls", cost: "~$5-10", tip: "E-470 toll road near DEN: only if you use it" },
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
  "Avoid restaurants inside major attractions (zoo, aquarium), prices are inflated",
  "Colorado tap water is excellent, bring refillable bottles",
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
  { location: "Denver", elevation: "5,280 ft", avgHigh: "31-32°C", avgLow: "16-18°C", rainDays: "6-8/month", notes: "Hot afternoons, cool evenings" },
  { location: "Boulder", elevation: "5,430 ft", avgHigh: "30-32°C", avgLow: "14-17°C", rainDays: "6-8/month", notes: "Similar to Denver" },
  { location: "Estes Park", elevation: "7,522 ft", avgHigh: "26-28°C", avgLow: "10-13°C", rainDays: "8-10/month", notes: "Cooler, more rain" },
  { location: "Colorado Springs", elevation: "6,035 ft", avgHigh: "28-30°C", avgLow: "13-14°C", rainDays: "7-9/month", notes: "Slightly cooler than Denver" },
  { location: "RMNP Summit", elevation: "12,183 ft", avgHigh: "10-16°C", avgLow: "2-6°C", rainDays: "Daily storms", notes: "Can snow even in August!" },
];

export const safetyRules: SafetyRule[] = [
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
  "Acclimate in Denver first: Day 1 and 2 at 5,280ft before going higher",
  "Hydrate aggressively: 2-3x normal water intake. Bring a water bottle for Aria and refill constantly",
  "Take it slow: No rushing up to 12,000ft. Spend a day at Estes Park (7,500ft) before RMNP",
  "Don't go too high too fast: On RMNP day, start at Bear Lake (9,450ft). If Aria feels fine, drive higher",
  "Pikes Peak caution: 14,115ft is extreme for a 5-year-old. Spend only 15-20 min at summit",
  "Consult pediatrician before trip: ask about altitude sickness prevention for a 5-year-old",
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
      "Snacks (granola bars, crackers, fruit: for hiking)",
      "Small backpack (let her carry her own water + snack)",
      "Band-aids + small first aid kit",
      "Motion sickness medication (if needed for mountain roads)",
      "Lightweight stroller or carrier (ONLY if Aria gets tired easily — most 5-year-olds can handle this trip)",
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

export const beforeYouLeave: BeforeYouLeaveItem[] = [
  { task: "Book RMNP Timed Entry Permits", deadline: "July 1 at 8:00 AM MT", priority: "critical" },
  { task: "Book car rental (SUV at DEN)", deadline: "BOOKED: Budget #00841958US5", priority: "completed" },
  { task: "Book hotels (both locations)", deadline: "ALREADY BOOKED", priority: "completed" },
  { task: "Check RMNP permit release date for 2026", deadline: "June 2026", priority: "important" },
  { task: "Consult pediatrician about altitude for Aria", deadline: "2 weeks before", priority: "important" },
  { task: "Book Pikes Peak Cog Railway (if desired)", deadline: "2 weeks before", priority: "important" },
  { task: "Book Estes Park Aerial Tramway (if desired)", deadline: "2 weeks before", priority: "important" },
  { task: "Download offline maps", deadline: "1 day before", priority: "nice" },
  { task: "Check air quality / wildfire status", deadline: "2 days before", priority: "nice" },
  { task: "Print RMNP trail maps (cell service is spotty)", deadline: "1 day before", priority: "nice" },
];



export const budgetRows: BudgetRow[] = [
  { category: "Flights (3 passengers)", low: "$512", high: "$512", notes: "Delta 3876, all paid" },
  { category: "Hotels (6 nights)", low: "$1,004", high: "$1,004", notes: "Denver $646 + Estes Park $359" },
  { category: "Car rental (6 days)", low: "$408", high: "$408", notes: "Budget Standard SUV, prepaid" },
  { category: "Car seat", low: "$0", high: "$90", notes: "Bring your own = $0" },
  { category: "Food (7 days)", low: "$600", high: "$1,000", notes: "Mix of restaurants + picnics" },
  { category: "Attractions", low: "$300", high: "$550", notes: "Zoo, museum, RMNP, Pikes Peak, tramway, etc." },
  { category: "Gas", low: "$60", high: "$80", notes: "Mountain driving uses more" },
  { category: "Misc (souvenirs, tips)", low: "$100", high: "$200", notes: "" },
];

export const costSavingStrategies = [
  "Hotels with free breakfast save ~$200-300 over the trip",
  "DoubleTree's warm cookie at check-in makes Aria's day — free!",
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
  // Hotels (Confirmed Bookings)
  { label: "DoubleTree Denver (Confirmed)", url: "https://www.hilton.com", category: "Hotels" },
  { label: "Coyote Mountain Lodge (Confirmed)", url: "https://www.coyotemountainlodge.com", category: "Hotels" },
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
