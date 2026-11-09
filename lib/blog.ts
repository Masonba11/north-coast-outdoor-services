export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  image: string;
  keywords: string[];
  content: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-clean-windows-vancouver-wa",
    title: "How Often Should You Clean Your Windows in Vancouver, WA?",
    description:
      "A practical guide to residential window cleaning frequency for Vancouver, WA homes dealing with rain, pollen, and road film.",
    date: "2026-03-12",
    readingTime: "6 min read",
    image: "/images/window-cleaning.jpg",
    keywords: [
      "window cleaning Vancouver WA",
      "residential window cleaning Vancouver WA",
    ],
    content: [
      {
        type: "p",
        text: "Vancouver, WA homeowners ask about window cleaning frequency more than almost any other exterior maintenance question. The honest answer depends on your neighborhood, nearby trees, road exposure, and how important clear glass is to your daily comfort.",
      },
      {
        type: "h2",
        text: "A practical starting point for most homes",
      },
      {
        type: "p",
        text: "Many Vancouver-area homes look and feel better with professional window cleaning once or twice a year. A spring cleaning removes pollen and winter residue. A fall cleaning resets glass before holiday gatherings and the wetter months ahead.",
      },
      {
        type: "p",
        text: "If your home sits near a busy road, construction, or heavy tree cover, you may prefer a more frequent schedule. Storefronts and commercial properties often need shorter intervals because first impressions matter every day.",
      },
      {
        type: "h2",
        text: "Signs your windows are ready for service",
      },
      {
        type: "ul",
        items: [
          "Water spots remain after rain dries",
          "Pollen leaves a yellow film on exterior glass",
          "Indoor light feels dull even on bright days",
          "Sliding doors and picture windows look streaked",
          "You are preparing for photos, guests, or a listing",
        ],
      },
      {
        type: "h2",
        text: "Interior vs. exterior cleaning",
      },
      {
        type: "p",
        text: "Exterior glass usually shows weather first, but interior windows collect cooking residue, dust, and fingerprints. A combined interior and exterior cleaning creates the biggest visual change. If budget or timing is limited, start with the elevations you see and use most.",
      },
      {
        type: "h2",
        text: "How local weather affects the schedule",
      },
      {
        type: "p",
        text: "Southwest Washington rain does not keep windows clean on its own. Rain can redistribute dirt and leave mineral spots behind. Pairing window cleaning with seasonal gutter care is also helpful because overflow can streak siding and splash back onto glass.",
      },
      {
        type: "p",
        text: "If you are ready for clearer views, explore our window cleaning service in Vancouver, WA or request a free quote for your home or business.",
      },
    ],
  },
  {
    slug: "why-gutter-cleaning-matters-southwest-washington",
    title: "Why Gutter Cleaning Is Important in Southwest Washington",
    description:
      "Learn how leaves, needles, and heavy rain make gutter cleaning essential for homes across Southwest Washington.",
    date: "2026-03-26",
    readingTime: "7 min read",
    image: "/images/gutter-cleaning.jpg",
    keywords: [
      "gutter cleaning Vancouver WA",
      "gutter maintenance Vancouver WA",
    ],
    content: [
      {
        type: "p",
        text: "Gutters are easy to ignore until water starts spilling over the edge during a storm. In Southwest Washington, that moment arrives faster than many homeowners expect because trees, moss, and long rainy seasons work against clear drainage.",
      },
      {
        type: "h2",
        text: "What clogged gutters actually do",
      },
      {
        type: "p",
        text: "When gutters fill with leaves and needles, rainwater has nowhere useful to go. It can overflow near the foundation, soak landscaping against the siding, and create damp areas around entryways. Over time, that overflow can also stain fascia and contribute to slippery walkways.",
      },
      {
        type: "h2",
        text: "Why this region needs more attention",
      },
      {
        type: "ul",
        items: [
          "Evergreen needles accumulate even when deciduous trees are bare",
          "Fall storms move debris quickly into downspouts",
          "Wet winters keep moisture against the home if drainage fails",
          "Shaded lots encourage moss and organic buildup",
        ],
      },
      {
        type: "h2",
        text: "A simple maintenance rhythm",
      },
      {
        type: "p",
        text: "Most homes benefit from gutter cleaning at least once or twice a year. Properties under dense tree cover may need more frequent visits. The best schedule is the one that prevents overflow before the heaviest rains arrive.",
      },
      {
        type: "h2",
        text: "Pair gutters with other exterior care",
      },
      {
        type: "p",
        text: "Gutter cleaning pairs well with window cleaning and pressure washing. Clearing the drainage system first helps reduce streaks and splash-back on freshly cleaned surfaces. If your Vancouver-area home has had overflow issues, start with a gutter inspection and cleaning quote.",
      },
    ],
  },
  {
    slug: "when-to-pressure-wash-your-home",
    title: "When Should You Pressure Wash Your Home?",
    description:
      "Find out the best times to schedule pressure washing for driveways, walkways, and exterior surfaces in the Vancouver, WA area.",
    date: "2026-04-09",
    readingTime: "6 min read",
    image: "/images/pressure-washing.jpg",
    keywords: [
      "pressure washing Vancouver WA",
      "driveway pressure washing Vancouver",
    ],
    content: [
      {
        type: "p",
        text: "Pressure washing is most effective when it is timed to your property’s actual condition—not just the calendar. Still, certain seasons and situations make exterior washing especially worthwhile for Vancouver, WA homes.",
      },
      {
        type: "h2",
        text: "Best times for most properties",
      },
      {
        type: "p",
        text: "Spring is popular because winter leaves behind mud, moss, and tire marks. Early fall is another strong window, especially if you want clean walkways and patios before gatherings or wetter weather returns.",
      },
      {
        type: "h2",
        text: "Situations that call for sooner service",
      },
      {
        type: "ul",
        items: [
          "Driveways look dark or streaked from tire marks and dirt",
          "Walkways feel slick from organic buildup",
          "You are listing your home or hosting an event",
          "Patio furniture season is starting and the hardscape looks dull",
          "Construction dust or landscaping work left residue behind",
        ],
      },
      {
        type: "h2",
        text: "Match the method to the surface",
      },
      {
        type: "p",
        text: "Not every surface should be treated the same way. Concrete driveways, paver patios, and some siding materials each need an appropriate approach. A good quote conversation includes what you want cleaned and what condition the surface is in today.",
      },
      {
        type: "h2",
        text: "Make the results last longer",
      },
      {
        type: "p",
        text: "After pressure washing, keep gutters clear and trim vegetation away from walls and walkways where possible. That reduces the speed at which debris and moisture rebuild on outdoor surfaces. Ready for a cleaner driveway or patio? Review our pressure washing services and request an estimate.",
      },
    ],
  },
  {
    slug: "how-rain-and-debris-affect-gutters",
    title: "How Rain and Debris Affect Your Gutters",
    description:
      "Understand how Pacific Northwest rain and debris interact inside gutter systems—and what homeowners can do about it.",
    date: "2026-04-23",
    readingTime: "5 min read",
    image: "/images/gutter-cleaning.jpg",
    keywords: [
      "gutter cleaning services Vancouver WA",
      "gutter cleaners Vancouver WA",
    ],
    content: [
      {
        type: "p",
        text: "Gutters are designed to move water away from your home. When rain arrives and the system is already packed with debris, that design fails quickly. Understanding the relationship between rainfall and buildup makes maintenance decisions easier.",
      },
      {
        type: "h2",
        text: "Debris changes how water moves",
      },
      {
        type: "p",
        text: "Leaves, shingle grit, and evergreen needles create dams inside gutters. Water pools behind those dams, then spills over the front edge. The overflow often lands exactly where you do not want it: beside the foundation, across walkways, or down the face of siding.",
      },
      {
        type: "h2",
        text: "Rain reveals problems you cannot see from the ground",
      },
      {
        type: "ul",
        items: [
          "Waterfalls at overflow points during storms",
          "Damp soil concentrated at the same corner after every rainfall",
          "Staining below the roofline",
          "Downspouts that release little water even in heavy rain",
        ],
      },
      {
        type: "h2",
        text: "Why waiting until spring can cost you comfort",
      },
      {
        type: "p",
        text: "If gutters clog in November and stay that way through winter, the home may deal with months of poor drainage. Cleaning before the wettest stretch—or as soon as overflow appears—helps protect everyday comfort around the property.",
      },
      {
        type: "p",
        text: "For local help, visit our gutter cleaning page or contact North Coast Outdoor Services for a free quote in Vancouver and nearby communities.",
      },
    ],
  },
  {
    slug: "window-cleaning-tips-pacific-northwest-homeowners",
    title: "Window Cleaning Tips for Pacific Northwest Homeowners",
    description:
      "Helpful window care tips for Pacific Northwest homeowners dealing with rain, pollen, and cloudy-season glass buildup.",
    date: "2026-05-07",
    readingTime: "6 min read",
    image: "/images/window-cleaning.jpg",
    keywords: [
      "window washers Vancouver WA",
      "window cleaning Vancouver WA",
    ],
    content: [
      {
        type: "p",
        text: "Pacific Northwest homes ask a lot of their windows. Long wet seasons, pollen bursts, and stretches of gray weather make clean glass feel especially valuable when the sun finally returns. A few practical habits can help between professional cleanings.",
      },
      {
        type: "h2",
        text: "Focus on the windows you use most",
      },
      {
        type: "p",
        text: "If a full-home cleaning is not due yet, prioritize patio doors, kitchen windows, and the glass you look through every morning. Keeping high-use panes cleaner improves daily comfort even before a complete service appointment.",
      },
      {
        type: "h2",
        text: "Watch for overflow and sprinkler spots",
      },
      {
        type: "ul",
        items: [
          "Redirect sprinklers that spray directly onto glass",
          "Keep gutters clear so overflow does not streak windows below",
          "Wipe accessible sills so dirt does not wash down the pane in the next rain",
          "Note hard-water spotting early before it becomes stubborn",
        ],
      },
      {
        type: "h2",
        text: "Screens and tracks matter too",
      },
      {
        type: "p",
        text: "Clean glass can still look unfinished if screens are dusty or tracks are packed with grit. Mention screens and tracks when you request service so the final result matches the rest of the window system.",
      },
      {
        type: "h2",
        text: "Know when to call for help",
      },
      {
        type: "p",
        text: "Upper-story glass, large commercial panes, and heavily soiled exteriors are often better handled professionally. North Coast Outdoor Services provides residential and commercial window cleaning across Vancouver, WA and surrounding cities. Request a free quote when your windows are ready for a reset.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
