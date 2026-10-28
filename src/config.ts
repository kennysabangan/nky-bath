/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 *
 * Content rules (these keep the site out of trouble with Google and the FTC):
 * - No invented reviews, ratings, review counts, or "years in business".
 * - No credentials (licensed, insured, background-checked, guarantees,
 *   warranties, financing) until the service partner actually has them.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Bathroom Refinishing Pros",
  phone: "(859) 900-8065",
  phoneE164: "+18599008065",
  domain: "nkybathpros.com",
  siteUrl: "https://nkybathpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "bathroom refinishing",
  serviceKeywordPlural: "bathroom refinishing services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Northern Kentucky Bathroom Refinishing Service",
  heroSubtext: "New bathroom look for 75% less than replacement. Call for a free estimate.",
  heroAlt: "Professional bathtub refinishing in progress",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Bathtub Refinishing",
      slug: "bathtub-refinishing",
      description:
        "Porcelain, fiberglass, and cast iron tubs restored to a smooth, glossy finish in 3-5 hours. Chips are repaired before the new coating goes on.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Shower & Tile Refinishing",
      slug: "shower-tile-refinishing",
      description:
        "Refinish cracked, stained, or outdated shower stalls and tile surrounds. Choose any color. Ready to use in 24-48 hours.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Countertop Refinishing",
      slug: "countertop-refinishing",
      description:
        "Laminate, cultured marble, and tile countertops refinished to look like granite or stone. Fraction of replacement cost. Done in one day.",
      photo: "/photos/countertop-refinishing.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does bathtub refinishing cost?",
      answer:
        "Refinishing typically costs 75-90% less than replacing the tub. Call (859) 900-8065 for a free quote.",
    },
    {
      question: "How long does refinishing take?",
      answer:
        "Most bathtubs take 3-5 hours. Showers and tile take 4-6 hours. Ready to use in 24-48 hours.",
    },
    {
      question: "How long does a refinished surface last?",
      answer:
        "A refinished tub can last 10-15 years with proper care: use non-abrasive cleaners and avoid bath mats with suction cups. The coatings are commercial-grade and built for daily use.",
    },
    {
      question: "Can I change the color?",
      answer:
        "Yes. We can refinish your tub, shower, or tile in any color. Popular choices include white, almond, gray, and custom colors.",
    },
    {
      question: "Is refinishing safe?",
      answer:
        "Yes. We use low-VOC products and proper ventilation. The surface is fully cured and safe within 24-48 hours.",
    },
    {
      question: "How do I care for a refinished tub?",
      answer:
        "Wait the full 24-48 hours before using it. After that, clean with mild, non-abrasive cleaners, skip suction-cup bath mats, and fix dripping faucets so water doesn't sit on the finish.",
    },
    {
      question: "What surfaces can you refinish?",
      answer:
        "Bathtubs (porcelain, fiberglass, cast iron), showers, tile surrounds, countertops, sinks, and vanities.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 900-8065. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "NKY Bathroom Refinishing Pros provides affordable bathroom refinishing in Florence that updates outdated bathrooms without the cost of a full renovation. Whether you live near the Florence Mall area or in one of the established neighborhoods off US-42, our team restores bathtubs, showers, and tile to like-new condition in just hours. Florence has a mix of older homes with original fixtures and newer builds, and we refinish porcelain, fiberglass, and cast iron tubs in both. You save thousands compared to replacement and get a durable finish that can last 10-15 years with proper care.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic homes and older apartments often come with dated, stained, or worn bathtubs and tile — and bathroom refinishing is the smart solution. NKY Bathroom Refinishing Pros serves Covington residents from the charming Victorian homes of Licking Riverside to the apartments and condos along Madison Avenue. Our refinishing process restores porcelain, fiberglass, and cast iron surfaces to a smooth, glossy finish in just hours, at a fraction of what replacement costs. It's a clean, fast way to get a bathroom that looks remodeled without the price tag.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect quality work on every project. NKY Bathroom Refinishing Pros delivers exactly that — professional bathroom refinishing that restores old bathtubs, showers, and countertops to like-new condition. From the stately homes along Dixie Highway to the well-maintained colonials throughout the city, we refinish porcelain, fiberglass, and cast iron surfaces with commercial-grade coatings that can last 10-15 years with proper care. Fort Mitchell homeowners typically save 75-90% compared to replacement.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger homeowners know that a worn-out bathtub or outdated tile doesn't have to mean an expensive remodel. NKY Bathroom Refinishing Pros provides affordable bathroom refinishing that transforms your bathroom in a single day. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we refinish tubs, showers, tile surrounds, and countertops to a factory-fresh look. Our refinishing process takes 3-5 hours for most bathtubs, and the surface is ready to use in 24-48 hours. Erlanger residents save thousands compared to ripping out and replacing fixtures.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has homes ranging from brand new to decades old — and older homes often have bathtubs and tile that need updating. NKY Bathroom Refinishing Pros provides professional bathroom refinishing throughout Independence, restoring worn, stained, or outdated fixtures to like-new condition. From the newer subdivisions near Taylor Mill Road to established neighborhoods closer to downtown, we refinish bathtubs, showers, and countertops with durable, commercial-grade coatings. Refinishing typically costs 75-90% less than replacement, and the finish can last 10-15 years with proper care.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and many older homes and apartments here come with bathrooms that need a refresh. NKY Bathroom Refinishing Pros provides expert bathroom refinishing throughout Newport, from the Newport on the Levee area to the residential streets of Clifton and Southgate. We refinish bathtubs, showers, tile surrounds, and countertops to a smooth, glossy finish — no demolition, no mess, no weeks of renovation. For homeowners and landlords, refinishing costs a fraction of replacement and gets a bathroom back in service within a day or two.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities. NKY Bathroom Refinishing Pros provides bathroom refinishing in Edgewood that restores old tubs, showers, and tile to like-new condition. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we refinish porcelain, fiberglass, and cast iron surfaces with durable, beautiful coatings. Most bathtub refinishing jobs are done in 3-5 hours, and the tub is ready to use in 24-48 hours.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views and historic homes — but older homes often come with original bathtubs and tile that have seen better days. NKY Bathroom Refinishing Pros provides Fort Thomas homeowners with expert bathroom refinishing that preserves your home's character while giving bathrooms a fresh, modern look. We handle steep driveways, multi-level homes built into hillsides, and vintage porcelain tubs with the care they require. Our refinishing process transforms stained, chipped, or outdated surfaces in hours, saving Fort Thomas homeowners thousands compared to replacement.",
    },
  ] as City[],
};
