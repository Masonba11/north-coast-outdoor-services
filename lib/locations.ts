import { services } from "./services";

export type LocationSlug =
  | "vancouver-wa"
  | "camas-wa"
  | "washougal-wa"
  | "battle-ground-wa"
  | "ridgefield-wa"
  | "woodland-wa"
  | "brush-prairie-wa"
  | "la-center-wa"
  | "kalama-wa";

export type Location = {
  slug: LocationSlug;
  name: string;
  shortName: string;
  state: "WA";
  href: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  localNotes: {
    windows: string;
    pressure: string;
    softWash: string;
    gutters: string;
  };
  faqs: { question: string; answer: string }[];
  nearby: LocationSlug[];
};

export const locations: Location[] = [
  {
    slug: "vancouver-wa",
    name: "Vancouver, WA",
    shortName: "Vancouver",
    state: "WA",
    href: "/service-areas/vancouver-wa",
    featured: true,
    seoTitle:
      "Exterior Cleaning Vancouver WA | Windows, Soft Wash, Pressure & Gutters",
    seoDescription:
      "North Coast Outdoor Services provides window cleaning, soft washing, pressure washing, and gutter cleaning in Vancouver, WA. Request a free quote for your home or business.",
    h1: "Exterior Cleaning Services in Vancouver, WA",
    intro: [
      "Vancouver, Washington is the primary service focus for North Coast Outdoor Services. From established neighborhoods near downtown to newer developments across the city, homes and businesses benefit from regular window cleaning, soft washing, pressure washing, and gutter care.",
      "Pacific Northwest weather leaves its mark here. Rain, pollen, algae, road film, and seasonal debris can dull glass, stain outdoor surfaces, and clog gutters. Our team helps Vancouver property owners keep exteriors looking clean and cared for with clear communication and free estimates.",
      "Whether you need a one-time refresh or recurring exterior cleaning, we make it easy to request a quote and schedule service that fits your property.",
    ],
    localNotes: {
      windows:
        "Vancouver homes with large picture windows, sliding doors, and storefront glass often need more frequent cleaning because rain and road film build up quickly. Residential and commercial window cleaning are both available throughout the city.",
      pressure:
        "Driveways, walkways, and patios around Vancouver collect tire marks, moss, and dirt through wet months. Pressure washing is a practical way to reset outdoor surfaces before hosting, listing a home, or starting a new season.",
      softWash:
        "Shaded Vancouver exteriors often develop algae and mildew on siding and trim. Soft washing offers a lower-pressure option for refreshing those surfaces without relying on high-pressure cleaning alone.",
      gutters:
        "Mature trees across many Vancouver neighborhoods mean gutters fill with leaves and needles. Regular gutter cleaning helps water drain away from the foundation during the city’s rainy stretches.",
    },
    faqs: [
      {
        question: "Do you serve all of Vancouver, WA?",
        answer:
          "Yes. Vancouver is our primary service city. Share your address or neighborhood when you request a quote so we can confirm scheduling details.",
      },
      {
        question: "Can I book more than one service at once?",
        answer:
          "Absolutely. Many Vancouver customers combine window cleaning with soft washing, gutter cleaning, or pressure washing for a fuller exterior refresh.",
      },
      {
        question: "How do free estimates work?",
        answer:
          "Submit the quote form with your service needs and property details. We review the information and follow up to discuss scope and next steps.",
      },
    ],
    nearby: ["camas-wa", "washougal-wa", "battle-ground-wa", "ridgefield-wa"],
  },
  {
    slug: "camas-wa",
    name: "Camas, WA",
    shortName: "Camas",
    state: "WA",
    href: "/service-areas/camas-wa",
    seoTitle: "Window Cleaning & Exterior Cleaning in Camas, WA",
    seoDescription:
      "Professional window cleaning, soft washing, pressure washing, and gutter cleaning in Camas, WA. Local exterior cleaning from North Coast Outdoor Services. Free estimates.",
    h1: "Window Cleaning & Exterior Cleaning in Camas, WA",
    intro: [
      "Camas, WA sits just east of Vancouver and is known for tree-lined neighborhoods, hillside views, and well-kept homes. That setting is beautiful—and it also means pollen, leaf litter, and moisture regularly settle onto glass, gutters, and outdoor surfaces.",
      "North Coast Outdoor Services provides window cleaning, soft washing, pressure washing, and gutter cleaning for Camas homeowners and local businesses who want dependable exterior care without guesswork.",
      "From Lacamas Lake-area homes to properties closer to downtown Camas, we help keep exteriors clear, clean, and ready for Southwest Washington weather.",
    ],
    localNotes: {
      windows:
        "Camas homes with forested lots and lake-area views often deal with pollen film and water spots on exterior glass. Professional window cleaning helps restore brightness inside and out.",
      pressure:
        "Hillside driveways and shaded walkways in Camas can collect moss and grime. Pressure washing helps restore traction and appearance on appropriate outdoor surfaces.",
      softWash:
        "Tree cover around many Camas homes encourages algae and mildew on siding. Soft washing helps refresh those exterior surfaces with a lower-pressure approach.",
      gutters:
        "Because Camas has so many mature trees, gutter cleaning is especially useful in fall and after windstorms when needles and leaves collect quickly.",
    },
    faqs: [
      {
        question: "Do you provide residential window cleaning in Camas?",
        answer:
          "Yes. Residential window cleaning is one of the most requested services for Camas homes, including interior and exterior options.",
      },
      {
        question: "Is Camas included in your regular service area?",
        answer:
          "Yes. Camas is part of our core Southwest Washington coverage along with Vancouver and Washougal.",
      },
      {
        question: "When is the best time to clean gutters in Camas?",
        answer:
          "Many Camas homeowners schedule gutter cleaning after major leaf drop in fall, with an additional visit in spring if trees surround the property.",
      },
    ],
    nearby: ["vancouver-wa", "washougal-wa", "brush-prairie-wa"],
  },
  {
    slug: "washougal-wa",
    name: "Washougal, WA",
    shortName: "Washougal",
    state: "WA",
    href: "/service-areas/washougal-wa",
    seoTitle: "Pressure Washing & Window Cleaning in Washougal, WA",
    seoDescription:
      "Exterior cleaning in Washougal, WA including window cleaning, soft washing, pressure washing, and gutter cleaning. Request a free quote from North Coast Outdoor Services.",
    h1: "Exterior Cleaning Services in Washougal, WA",
    intro: [
      "Washougal, WA offers a mix of river-adjacent properties, residential neighborhoods, and homes with generous outdoor space. Those settings look their best when windows are clear, hardscapes are clean, and gutters are free of debris.",
      "North Coast Outdoor Services brings professional exterior cleaning to Washougal with the same attention to detail we provide throughout the Vancouver metro area.",
      "If your Washougal property needs a seasonal reset or a one-time deep clean before guests arrive, we are ready to help.",
    ],
    localNotes: {
      windows:
        "Homes near open areas and riverside corridors in Washougal often collect dust and weather film on exterior glass. Window cleaning restores clearer views of the surrounding landscape.",
      pressure:
        "Patios, driveways, and walkways around Washougal properties benefit from pressure washing after wet months when dirt and organic buildup become more noticeable.",
      softWash:
        "Moisture along the Washougal corridor can leave organic staining on exterior walls. Soft washing is a helpful option for siding and trim that need a gentler clean.",
      gutters:
        "Gutter cleaning is especially helpful for Washougal homes surrounded by trees or situated where windblown debris gathers along the roofline.",
    },
    faqs: [
      {
        question: "Can you clean both windows and gutters in one visit?",
        answer:
          "Yes. Many Washougal customers book combined services so multiple exterior needs are handled in a single appointment when scheduling allows.",
      },
      {
        question: "Do you serve newer developments and established neighborhoods?",
        answer:
          "Yes. Share your address and project details when requesting a quote and we will confirm service for your Washougal property.",
      },
      {
        question: "What information should I include in my quote request?",
        answer:
          "Property type, services needed, approximate size or number of windows, and any access notes help us respond with a clearer estimate.",
      },
    ],
    nearby: ["camas-wa", "vancouver-wa", "brush-prairie-wa"],
  },
  {
    slug: "battle-ground-wa",
    name: "Battle Ground, WA",
    shortName: "Battle Ground",
    state: "WA",
    href: "/service-areas/battle-ground-wa",
    seoTitle: "Gutter Cleaning & Exterior Services in Battle Ground, WA",
    seoDescription:
      "Window cleaning, pressure washing, and gutter cleaning in Battle Ground, WA. North Coast Outdoor Services helps local homes stay clean through every season.",
    h1: "Exterior Cleaning in Battle Ground, WA",
    intro: [
      "Battle Ground, WA continues to grow, with family homes, larger lots, and plenty of outdoor living space. Those properties gather pollen, mud, and leaf debris throughout the year—especially after long stretches of rain.",
      "North Coast Outdoor Services supports Battle Ground homeowners with window cleaning, soft washing, pressure washing, and gutter cleaning designed for Southwest Washington conditions.",
      "From first impressions at the curb to cleaner glass indoors, exterior cleaning helps Battle Ground properties look maintained and welcoming.",
    ],
    localNotes: {
      windows:
        "Battle Ground homes with covered porches and multi-panel windows benefit from routine cleaning that removes pollen and rain spots from glass and nearby frames.",
      pressure:
        "Long driveways and outdoor gathering spaces are common in Battle Ground. Pressure washing helps clear dirt and grime from appropriate hard surfaces.",
      softWash:
        "Larger Battle Ground lots often include shaded siding that develops algae over wet seasons. Soft washing helps restore a cleaner exterior look.",
      gutters:
        "Larger lots and nearby trees mean Battle Ground gutters can fill quickly. Seasonal gutter cleaning helps keep drainage working during wet weather.",
    },
    faqs: [
      {
        question: "Do you offer free estimates in Battle Ground?",
        answer:
          "Yes. Battle Ground property owners can request a free quote online or by phone for any of our exterior cleaning services.",
      },
      {
        question: "Is pressure washing useful after winter?",
        answer:
          "Yes. Many customers schedule pressure washing in spring to remove winter buildup from driveways and walkways.",
      },
      {
        question: "Can commercial properties in Battle Ground request service?",
        answer:
          "Yes. Tell us about your business property and the services you need when you submit a quote request.",
      },
    ],
    nearby: ["brush-prairie-wa", "vancouver-wa", "ridgefield-wa", "la-center-wa"],
  },
  {
    slug: "ridgefield-wa",
    name: "Ridgefield, WA",
    shortName: "Ridgefield",
    state: "WA",
    href: "/service-areas/ridgefield-wa",
    seoTitle: "Window Cleaning Ridgefield WA | North Coast Outdoor Services",
    seoDescription:
      "Professional window cleaning, soft washing, pressure washing, and gutter cleaning in Ridgefield, WA. Free estimates from North Coast Outdoor Services.",
    h1: "Window Cleaning & Exterior Care in Ridgefield, WA",
    intro: [
      "Ridgefield, WA blends historic charm with expanding residential communities. Clean windows, tidy hardscapes, and clear gutters help homes throughout Ridgefield stand out—especially in a climate where weather residue builds up often.",
      "North Coast Outdoor Services provides exterior cleaning for Ridgefield homeowners who want reliable local service and straightforward communication.",
      "Whether your property is near the waterfront area or in a newer neighborhood, we can help plan the right mix of window, pressure washing, and gutter services.",
    ],
    localNotes: {
      windows:
        "Ridgefield homes with large rear windows and covered outdoor rooms benefit from regular window cleaning that keeps views clear and interiors brighter.",
      pressure:
        "New concrete, walkways, and patio spaces in Ridgefield developments often need pressure washing after construction dust settles or after a muddy season.",
      softWash:
        "Ridgefield homes with covered areas and north-facing walls can collect organic film. Soft washing helps clean those exterior surfaces carefully.",
      gutters:
        "Gutter cleaning helps Ridgefield properties stay ahead of overflow during fall storms and prolonged rainy periods.",
    },
    faqs: [
      {
        question: "Do you serve both older and newer Ridgefield neighborhoods?",
        answer:
          "Yes. Ridgefield’s mix of established and newer homes is part of our regular service coverage.",
      },
      {
        question: "Can I schedule service before listing my home?",
        answer:
          "Yes. Exterior cleaning before photos and showings is a popular request and can include windows, driveways, and gutters.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend requesting a quote as soon as you know your preferred timing, especially during busy spring and fall seasons.",
      },
    ],
    nearby: ["vancouver-wa", "la-center-wa", "woodland-wa", "battle-ground-wa"],
  },
  {
    slug: "woodland-wa",
    name: "Woodland, WA",
    shortName: "Woodland",
    state: "WA",
    href: "/service-areas/woodland-wa",
    seoTitle: "Exterior Cleaning Woodland WA | Windows, Pressure & Gutters",
    seoDescription:
      "North Coast Outdoor Services offers window cleaning, soft washing, pressure washing, and gutter cleaning in Woodland, WA. Request your free local estimate today.",
    h1: "Exterior Cleaning Services in Woodland, WA",
    intro: [
      "Woodland, WA sits along the I-5 corridor north of Vancouver and includes a practical mix of residential properties and local businesses. Exterior cleaning helps those properties stay presentable through wet winters and dusty dry stretches.",
      "North Coast Outdoor Services brings window cleaning, soft washing, pressure washing, and gutter cleaning to Woodland with a focus on clear estimates and dependable scheduling.",
      "If your Woodland home or business needs a cleaner exterior, start with a free quote and tell us which services matter most.",
    ],
    localNotes: {
      windows:
        "Woodland properties near higher-traffic corridors often see more road film on exterior glass. Professional window cleaning helps restore clarity for both homes and storefronts.",
      pressure:
        "Driveway and walkway pressure washing is useful for Woodland properties dealing with tracked-in dirt, seasonal stains, and outdoor buildup.",
      softWash:
        "Woodland exteriors can pick up mildew and organic staining through damp months. Soft washing offers a lower-pressure way to freshen siding and trim.",
      gutters:
        "Gutter cleaning supports proper drainage for Woodland homes where wind and nearby vegetation send debris into gutter systems.",
    },
    faqs: [
      {
        question: "Is Woodland part of your regular coverage area?",
        answer:
          "Yes. Woodland is included in our Southwest Washington service area along with Ridgefield, La Center, and Kalama.",
      },
      {
        question: "Do you clean commercial windows in Woodland?",
        answer:
          "Yes. Commercial window cleaning can be requested for eligible local business properties.",
      },
      {
        question: "What if I only need one service?",
        answer:
          "Single-service visits are welcome. You can request window cleaning, pressure washing, or gutter cleaning on their own.",
      },
    ],
    nearby: ["ridgefield-wa", "la-center-wa", "kalama-wa"],
  },
  {
    slug: "brush-prairie-wa",
    name: "Brush Prairie, WA",
    shortName: "Brush Prairie",
    state: "WA",
    href: "/service-areas/brush-prairie-wa",
    seoTitle: "Gutter & Window Cleaning in Brush Prairie, WA",
    seoDescription:
      "Exterior cleaning for Brush Prairie, WA homes including gutter cleaning, window cleaning, and pressure washing. Free quotes from North Coast Outdoor Services.",
    h1: "Exterior Cleaning in Brush Prairie, WA",
    intro: [
      "Brush Prairie, WA is known for spacious properties, rural-residential character, and plenty of surrounding greenery. That setting creates a real need for gutter cleaning, clear windows, and occasional hard-surface washing.",
      "North Coast Outdoor Services helps Brush Prairie homeowners maintain cleaner exteriors with services tailored to larger lots and tree-covered surroundings.",
      "From seasonal leaf drop to pollen season, we make it easier to keep your property’s exterior in good shape.",
    ],
    localNotes: {
      windows:
        "Brush Prairie homes often have expansive glass facing yards and trees. Window cleaning removes pollen and weather film so indoor spaces feel brighter.",
      pressure:
        "Long driveways and outdoor work areas benefit from pressure washing when mud, algae, or tire marks begin to build up.",
      softWash:
        "Heavy tree cover in Brush Prairie creates shaded walls that often grow algae. Soft washing helps clean those exterior surfaces without relying only on high pressure.",
      gutters:
        "Tree density around many Brush Prairie properties makes gutter cleaning one of the most valuable recurring exterior services.",
    },
    faqs: [
      {
        question: "Are larger rural-residential lots in Brush Prairie eligible?",
        answer:
          "Yes. Share details about driveway length, gutter access, and window count so we can estimate accurately.",
      },
      {
        question: "How often should Brush Prairie gutters be cleaned?",
        answer:
          "Properties under heavy tree cover may need cleaning more than once a year. Fall is the most common season, with spring follow-up when needed.",
      },
      {
        question: "Can you combine services for a seasonal reset?",
        answer:
          "Yes. Many Brush Prairie customers book windows, gutters, and pressure washing together for a full exterior refresh.",
      },
    ],
    nearby: ["battle-ground-wa", "camas-wa", "vancouver-wa", "la-center-wa"],
  },
  {
    slug: "la-center-wa",
    name: "La Center, WA",
    shortName: "La Center",
    state: "WA",
    href: "/service-areas/la-center-wa",
    seoTitle: "Window Cleaning & Pressure Washing in La Center, WA",
    seoDescription:
      "North Coast Outdoor Services provides window cleaning, soft washing, pressure washing, and gutter cleaning in La Center, WA. Request a free estimate for your property.",
    h1: "Exterior Cleaning Services in La Center, WA",
    intro: [
      "La Center, WA offers a quieter residential pace with homes that often sit on generous lots. Keeping those properties clean means staying ahead of moss, leaf litter, and rain residue that come with Southwest Washington weather.",
      "North Coast Outdoor Services provides La Center homeowners with professional window cleaning, soft washing, pressure washing, and gutter cleaning backed by clear communication and free estimates.",
      "Whether you need a one-time appointment or help planning seasonal maintenance, we are ready to assist.",
    ],
    localNotes: {
      windows:
        "La Center homes with covered porches and multi-angle window layouts benefit from careful interior and exterior glass cleaning.",
      pressure:
        "Pressure washing helps refresh driveways, walkways, and outdoor living areas that collect organic buildup in shaded or damp spots.",
      softWash:
        "La Center homes with shaded elevations often see algae or mildew on siding. Soft washing helps restore a cleaner exterior appearance.",
      gutters:
        "Gutter cleaning is a smart preventive step for La Center properties before the heaviest stretch of fall and winter rain.",
    },
    faqs: [
      {
        question: "Do you travel to La Center for single-service jobs?",
        answer:
          "Yes. Window cleaning, pressure washing, and gutter cleaning can each be booked on their own.",
      },
      {
        question: "What is the best season for exterior cleaning in La Center?",
        answer:
          "Spring and fall are popular, but service can be helpful any time dirt, debris, or overflow becomes noticeable.",
      },
      {
        question: "How do I get started?",
        answer:
          "Use the quote form, call, or email with your address and the services you need. We will follow up to discuss details.",
      },
    ],
    nearby: ["ridgefield-wa", "woodland-wa", "battle-ground-wa", "brush-prairie-wa"],
  },
  {
    slug: "kalama-wa",
    name: "Kalama, WA",
    shortName: "Kalama",
    state: "WA",
    href: "/service-areas/kalama-wa",
    seoTitle: "Exterior Cleaning Kalama WA | North Coast Outdoor Services",
    seoDescription:
      "Window cleaning, pressure washing, and gutter cleaning in Kalama, WA. Local exterior cleaning from North Coast Outdoor Services with free estimates.",
    h1: "Exterior Cleaning Services in Kalama, WA",
    intro: [
      "Kalama, WA sits along the Columbia River corridor and includes homes and businesses that deal with river-area weather, wind, and seasonal debris. Clean exteriors help properties look cared for and ready for visitors year-round.",
      "North Coast Outdoor Services extends window cleaning, soft washing, pressure washing, and gutter cleaning to Kalama as part of our broader Southwest Washington coverage.",
      "If your Kalama property needs clearer windows, cleaner hardscapes, or cleared gutters, request a free quote and we will help plan the next step.",
    ],
    localNotes: {
      windows:
        "Kalama properties can collect weather film and dust on exterior glass. Window cleaning restores a cleaner look for homes and local commercial spaces.",
      pressure:
        "Driveways and outdoor surfaces benefit from pressure washing after muddy seasons or when grime becomes concentrated near entryways.",
      softWash:
        "River-corridor moisture around Kalama can encourage organic staining on exterior walls. Soft washing helps refresh siding and trim with a gentler approach.",
      gutters:
        "Gutter cleaning helps Kalama homes manage rainfall more effectively by clearing leaves and debris before storms arrive.",
    },
    faqs: [
      {
        question: "Is Kalama within your service area?",
        answer:
          "Yes. Kalama is included along with Woodland and other nearby communities north of Vancouver.",
      },
      {
        question: "Can I request a quote if I am not sure which service I need?",
        answer:
          "Yes. Describe what you are seeing—dirty windows, stained concrete, overflowing gutters—and we can help recommend the right service.",
      },
      {
        question: "Do you serve both homes and businesses in Kalama?",
        answer:
          "Yes. Residential and commercial exterior cleaning requests are both welcome.",
      },
    ],
    nearby: ["woodland-wa", "ridgefield-wa", "la-center-wa"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getLocationSlugs(): LocationSlug[] {
  return locations.map((location) => location.slug);
}

export function getFeaturedLocation(): Location {
  return locations.find((location) => location.featured) ?? locations[0];
}

export const serviceLinksForLocations = services.map((service) => ({
  name: service.name,
  href: service.href,
}));
