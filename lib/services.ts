export type ServiceSlug =
  | "window-cleaning"
  | "pressure-washing"
  | "soft-washing"
  | "gutter-cleaning";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  href: string;
  cardDescription: string;
  heroSubheading: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  body: string[];
};

export const services: Service[] = [
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Windows",
    href: "/services/window-cleaning",
    cardDescription:
      "Professional interior and exterior window cleaning to help your property look brighter and cleaner.",
    heroSubheading:
      "Residential and commercial window cleaning in Vancouver, WA and nearby Southwest Washington communities.",
    image: "/images/window-cleaning.jpg",
    imageAlt:
      "Traditional Southwest Washington suburban home with clean white-trimmed windows and evergreen trees",
    seoTitle: "Window Cleaning Vancouver WA | North Coast Outdoor Services",
    seoDescription:
      "Professional window cleaning in Vancouver, WA. Residential and commercial window washers serving Camas, Washougal, Battle Ground, and nearby cities. Free estimates.",
    keywords: [
      "window cleaning Vancouver WA",
      "window washers Vancouver WA",
      "residential window cleaning Vancouver WA",
      "commercial window cleaning Vancouver WA",
    ],
    benefits: [
      "Clearer views and brighter interiors",
      "Interior and exterior cleaning available",
      "Careful attention around frames, tracks, and screens",
      "Scheduling that works around your routine",
      "Service for homes and local businesses",
    ],
    process: [
      {
        title: "Request your quote",
        description:
          "Tell us about your property, number of windows, and whether you need interior, exterior, or both.",
      },
      {
        title: "Confirm the details",
        description:
          "We review access notes, property type, and timing so the visit is clear before we arrive.",
      },
      {
        title: "Clean with care",
        description:
          "Windows are cleaned methodically so glass looks clear and surrounding surfaces are treated carefully.",
      },
      {
        title: "Final walkthrough",
        description:
          "We check the finished work with you so you know what was completed before we leave.",
      },
    ],
    faqs: [
      {
        question: "Do you clean both interior and exterior windows?",
        answer:
          "Yes. We can clean exterior windows only, or both interior and exterior depending on what your property needs.",
      },
      {
        question: "Is window cleaning available for businesses in Vancouver?",
        answer:
          "Yes. We provide commercial window cleaning for offices, storefronts, and other local business properties in Vancouver and surrounding cities.",
      },
      {
        question: "How often should Vancouver homes get windows cleaned?",
        answer:
          "Many homeowners schedule cleaning once or twice a year. Homes near trees, busy roads, or with large glass areas may benefit from more frequent service.",
      },
      {
        question: "Do I need to be home during the appointment?",
        answer:
          "For exterior-only cleaning, you often do not need to be present if access is available. Interior cleaning usually requires someone on site.",
      },
    ],
    body: [
      "Window cleaning makes a noticeable difference in how a home or business looks and feels. In Vancouver, WA, frequent rain, pollen, and road film can leave glass streaked and dull. North Coast Outdoor Services provides professional window cleaning that helps restore clarity and curb appeal.",
      "Whether you need residential window cleaning before hosting guests, a seasonal refresh, or commercial window washers for a storefront, we focus on clear communication and careful work. Our service covers Vancouver and nearby communities including Camas, Washougal, Battle Ground, Ridgefield, and more.",
      "Every property is different. Tall panes, skylights, hard water spots, and screened openings all require a thoughtful approach. Share a few details about your project and we will provide a free estimate tailored to your needs.",
    ],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    shortName: "Pressure Washing",
    href: "/services/pressure-washing",
    cardDescription:
      "Remove built-up dirt and grime from appropriate outdoor surfaces.",
    heroSubheading:
      "Exterior pressure washing for driveways, walkways, siding, and outdoor surfaces around Vancouver, WA.",
    image: "/images/pressure-washing.jpg",
    imageAlt:
      "Two-story suburban home with asphalt driveway, garage, and landscaped front yard ready for pressure washing",
    seoTitle: "Pressure Washing Vancouver WA | North Coast Outdoor Services",
    seoDescription:
      "Pressure washing services in Vancouver, WA for driveways, walkways, and exterior surfaces. Serving Camas, Washougal, Battle Ground, and nearby Southwest Washington cities.",
    keywords: [
      "pressure washing Vancouver WA",
      "pressure washing services Vancouver WA",
      "driveway pressure washing Vancouver",
      "exterior pressure washing Vancouver WA",
    ],
    benefits: [
      "Helps restore outdoor surfaces covered in dirt and grime",
      "Useful for driveways, walkways, and suitable exterior surfaces",
      "Improves curb appeal before listings, events, or seasonal resets",
      "Clear guidance on what surfaces are a good fit for cleaning",
      "Convenient local scheduling across Southwest Washington",
    ],
    process: [
      {
        title: "Describe the surface",
        description:
          "Tell us what needs cleaning—driveway, walkway, patio, siding, or another exterior surface.",
      },
      {
        title: "Review the approach",
        description:
          "We confirm the scope and discuss an approach suited to the material and condition of the surface.",
      },
      {
        title: "Clean the area",
        description:
          "Built-up dirt and grime are removed from appropriate outdoor surfaces with careful technique.",
      },
      {
        title: "Inspect the results",
        description:
          "We review the cleaned areas so you can see the finished result before we wrap up.",
      },
    ],
    faqs: [
      {
        question: "What surfaces can you pressure wash?",
        answer:
          "Common projects include driveways, walkways, patios, and other outdoor surfaces that can safely be cleaned with pressure washing. Share photos or details and we will confirm whether your project is a good fit.",
      },
      {
        question: "Do you offer driveway pressure washing in Vancouver?",
        answer:
          "Yes. Driveway pressure washing is one of the most requested exterior cleaning services for Vancouver-area homes.",
      },
      {
        question: "Will pressure washing damage my siding or concrete?",
        answer:
          "Different materials need different levels of care. We discuss the surface type up front and use an approach appropriate for the job.",
      },
      {
        question: "How often should I pressure wash my home’s exterior?",
        answer:
          "Many properties benefit from yearly or every-other-year cleaning, especially after wet seasons when moss, dirt, and buildup become more visible.",
      },
    ],
    body: [
      "Pressure washing is one of the fastest ways to refresh outdoor surfaces around a Vancouver, WA home or business. Over time, rain, tire marks, algae, and everyday dirt settle into concrete, walkways, and exterior surfaces. Professional pressure washing helps remove that buildup and restore a cleaner appearance.",
      "North Coast Outdoor Services provides pressure washing services for driveways, walkways, and other appropriate outdoor surfaces throughout Vancouver and surrounding Southwest Washington cities. We focus on clear estimates, careful surface selection, and results that improve curb appeal.",
      "If you are preparing a property for sale, hosting an event, or simply ready to reset after a wet Pacific Northwest season, request a free quote and tell us which areas you want cleaned.",
    ],
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    shortName: "Soft Washing",
    href: "/services/soft-washing",
    cardDescription:
      "Low-pressure exterior washing to help clean siding, trim, and other delicate outdoor surfaces.",
    heroSubheading:
      "Soft washing for Vancouver, WA homes dealing with algae, mildew, and organic buildup on exterior surfaces.",
    image: "/images/soft-washing.jpg",
    imageAlt:
      "Craftsman-style neighborhood home with siding and trim suited for soft washing in Southwest Washington",
    seoTitle: "Soft Washing Vancouver WA | North Coast Outdoor Services",
    seoDescription:
      "Soft washing in Vancouver, WA for siding, exteriors, and delicate outdoor surfaces. Low-pressure cleaning for algae and mildew across Clark County and nearby cities.",
    keywords: [
      "soft washing Vancouver WA",
      "soft wash Vancouver WA",
      "house soft washing Vancouver",
      "siding soft wash Vancouver WA",
      "soft washing services Southwest Washington",
    ],
    benefits: [
      "Lower-pressure approach suited for many exterior surfaces",
      "Helps address algae, mildew, and organic staining",
      "Useful for siding, trim, and other areas where high pressure may not be ideal",
      "Improves curb appeal after wet Pacific Northwest seasons",
      "Pairs well with gutter cleaning, window cleaning, and pressure washing",
    ],
    process: [
      {
        title: "Describe the exterior",
        description:
          "Tell us about the surfaces involved—siding, trim, or other exterior areas—and what buildup you are seeing.",
      },
      {
        title: "Confirm the approach",
        description:
          "We review the project details and discuss a soft washing approach suited to the surface and condition.",
      },
      {
        title: "Clean with care",
        description:
          "A lower-pressure soft wash helps lift organic buildup from appropriate exterior surfaces.",
      },
      {
        title: "Review the finish",
        description:
          "We walk through the cleaned areas so you can see the result before we wrap up.",
      },
    ],
    faqs: [
      {
        question: "What is soft washing?",
        answer:
          "Soft washing is a lower-pressure exterior cleaning method often used on surfaces where a gentler approach is preferred, such as certain siding and trim areas with algae or mildew buildup.",
      },
      {
        question: "How is soft washing different from pressure washing?",
        answer:
          "Pressure washing relies more on high water pressure for hard surfaces like driveways and walkways. Soft washing uses lower pressure and is often a better fit for delicate exterior surfaces.",
      },
      {
        question: "Do Vancouver homes need soft washing?",
        answer:
          "Many Clark County and Southwest Washington homes deal with algae, mildew, and organic staining because of shade and moisture. Soft washing can help refresh those exterior surfaces.",
      },
      {
        question: "Can soft washing be combined with other services?",
        answer:
          "Yes. Soft washing is often paired with gutter cleaning, window cleaning, or driveway pressure washing for a fuller exterior refresh.",
      },
    ],
    body: [
      "Soft washing is a smart exterior cleaning option for many Vancouver, WA homes. In the Pacific Northwest, shade, moisture, and mild temperatures create ideal conditions for algae, mildew, and organic staining on siding and other outdoor surfaces. Soft washing uses a lower-pressure approach designed to help clean those areas carefully.",
      "North Coast Outdoor Services provides soft washing throughout Vancouver and surrounding Southwest Washington communities. If your home has darkened siding, streaking under eaves, or buildup on exterior walls, soft washing may be a better fit than high-pressure cleaning alone.",
      "Request a free quote and tell us which exterior surfaces need attention. We can also help coordinate soft washing with gutter cleaning, window cleaning, or pressure washing when your property needs a broader reset.",
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutters",
    href: "/services/gutter-cleaning",
    cardDescription:
      "Clear leaves and debris from gutters to support proper drainage.",
    heroSubheading:
      "Gutter cleaning and maintenance support for Vancouver, WA homes dealing with leaves, needles, and seasonal debris.",
    image: "/images/gutter-cleaning.jpg",
    imageAlt:
      "Traditional Pacific Northwest home with visible roofline and gutters surrounded by trees and autumn leaves",
    seoTitle: "Gutter Cleaning Vancouver WA | North Coast Outdoor Services",
    seoDescription:
      "Gutter cleaning in Vancouver, WA to clear leaves and debris and support proper drainage. Serving Camas, Washougal, Battle Ground, Ridgefield, and nearby cities.",
    keywords: [
      "gutter cleaning Vancouver WA",
      "gutter cleaners Vancouver WA",
      "gutter cleaning services Vancouver WA",
      "gutter maintenance Vancouver WA",
    ],
    benefits: [
      "Helps gutters move water away from the home more effectively",
      "Clears leaves, needles, and seasonal debris",
      "Supports better drainage during rainy Southwest Washington weather",
      "Useful before and after heavy leaf drop",
      "Pairs well with window cleaning and exterior washing",
    ],
    process: [
      {
        title: "Share property details",
        description:
          "Let us know your home’s approximate size, gutter access, and whether overflow or clogging has been an issue.",
      },
      {
        title: "Schedule the visit",
        description:
          "We confirm timing and any access notes so the appointment is straightforward.",
      },
      {
        title: "Clear the gutters",
        description:
          "Leaves and debris are removed so water can move through the system more freely.",
      },
      {
        title: "Review drainage notes",
        description:
          "We share what we found and whether follow-up maintenance may be helpful for your property.",
      },
    ],
    faqs: [
      {
        question: "How often should gutters be cleaned in Southwest Washington?",
        answer:
          "Many homes benefit from cleaning at least once or twice a year, especially in fall when leaves and needles collect quickly. Properties under heavy tree cover may need more frequent service.",
      },
      {
        question: "What happens if gutters stay clogged?",
        answer:
          "Clogged gutters can cause water to overflow near the foundation, splash onto siding, and create damp areas around the home. Regular cleaning helps support proper drainage.",
      },
      {
        question: "Do you clean gutters on multi-story homes?",
        answer:
          "Many multi-story homes can be serviced depending on access and safety. Share details about your property when you request a quote.",
      },
      {
        question: "Can gutter cleaning be combined with other services?",
        answer:
          "Yes. Many customers combine gutter cleaning with window cleaning or pressure washing for a fuller exterior refresh.",
      },
    ],
    body: [
      "Gutter cleaning is an important part of exterior home maintenance in Vancouver, WA. The Pacific Northwest’s wet weather and abundant trees mean gutters can fill with leaves, needles, and debris quickly. When that happens, water may overflow instead of draining away from the home.",
      "North Coast Outdoor Services provides gutter cleaning services designed to clear debris and support better drainage. We serve Vancouver and surrounding communities where seasonal debris is a regular concern for homeowners.",
      "If you have noticed overflow during storms, staining below the roofline, or simply want to stay ahead of fall leaf drop, request a free estimate. We will help you schedule gutter maintenance at a time that works for your property.",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): ServiceSlug[] {
  return services.map((service) => service.slug);
}
