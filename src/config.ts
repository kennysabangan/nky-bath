/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
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
        "Restore your old tub to like-new condition in 3-5 hours. Long-lasting results. Safe, durable, beautiful results.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Shower & Tile Refinishing",
      slug: "shower-tile-refinishing",
      description:
        "Refinish cracked, stained, or outdated shower stalls and tile surrounds. Choose any color. Ready to use in 24-48 hours. Serving NKY and Cincinnati.",
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
        "Our refinishing saves 75-90% compared to replacement. Call (859) 900-8065 for a free quote.",
    },
    {
      question: "How long does refinishing take?",
      answer:
        "Most bathtubs take 3-5 hours. Showers and tile take 4-6 hours. Ready to use in 24-48 hours.",
    },
    {
      question: "How long does a refinished surface last?",
      answer:
        "Long-lasting results with proper care. We use commercial-grade coatings designed for durability.",
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
      question: "Do you offer a warranty?",
      answer:
        "Yes. We offer a quality work on all refinishing projects.",
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
        "Florence homeowners trust NKY Bathroom Refinishing Pros for affordable, professional bathroom refinishing that transforms outdated bathrooms without the cost of full renovation. Whether you live near the Florence Mall area or in one of the established neighborhoods off US-42, our team restores bathtubs, showers, and tile to like-new condition in just hours. Florence's mix of older homes with original fixtures and newer builds makes it one of our busiest service areas — we've refinishing porcelain, fiberglass, and cast iron tubs in every style of home across the city. Save thousands compared to replacement and get a beautiful, durable finish that lasts 10-15 years.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic homes and older apartments often come with dated, stained, or worn bathtubs and tile — and bathroom refinishing is the smart solution. NKY Bathroom Refinishing Pros serves Covington residents from the charming Victorian homes of Licking Riverside to the apartments and condos along Madison Avenue. Our refinishing process restores porcelain, fiberglass, and cast iron surfaces to a smooth, glossy finish in just hours, at a fraction of what replacement costs. Covington homeowners choose us because we work clean, finish fast, and deliver results that look like a complete bathroom remodel without the price tag.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect quality work on every project. NKY Bathroom Refinishing Pros delivers exactly that — professional bathroom refinishing that restores old bathtubs, showers, and countertops to like-new condition. From the stately homes along Dixie Highway to the well-maintained colonials throughout the city, we refinish porcelain, fiberglass, and cast iron surfaces with commercial-grade coatings that last 10-15 years. Our technicians are fully insured and trained to treat your home with respect. Fort Mitchell residents save 75-90% compared to replacement.",
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
        "As one of the fastest-growing cities in Kenton County, Independence has homes ranging from brand new to decades old — and older homes often have bathtubs and tile that need updating. NKY Bathroom Refinishing Pros provides professional bathroom refinishing throughout Independence, restoring worn, stained, or outdated fixtures to like-new condition. From the newer subdivisions near Taylor Mill Road to established neighborhoods closer to downtown, we refinish bathtubs, showers, and countertops with durable, commercial-grade coatings. Our refinishing saves Independence homeowners 75-90% compared to replacement, and the results last 10-15 years.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and many older homes and apartments here come with bathrooms that need a refresh. NKY Bathroom Refinishing Pros provides expert bathroom refinishing throughout Newport, from the Newport on the Levee area to the residential streets of Clifton and Southgate. We refinish bathtubs, showers, tile surrounds, and countertops to a smooth, glossy finish — no demolition, no mess, no weeks of renovation. Newport homeowners and landlords choose us because refinishing costs a fraction of replacement and delivers beautiful, long-lasting results in just hours.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities. NKY Bathroom Refinishing Pros has served Edgewood homeowners for years, providing professional bathroom refinishing that restores old tubs, showers, and tile to like-new condition. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we refinish porcelain, fiberglass, and cast iron surfaces with durable, beautiful coatings. Edgewood residents appreciate our clean, fast work — most bathtub refinishing jobs are done in 3-5 hours, and we back every job with our quality guarantee.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views and historic homes — but older homes often come with original bathtubs and tile that have seen better days. NKY Bathroom Refinishing Pros provides Fort Thomas homeowners with expert bathroom refinishing that preserves your home's character while giving bathrooms a fresh, modern look. We handle steep driveways, multi-level homes built into hillsides, and vintage porcelain tubs with the care they require. Our refinishing process transforms stained, chipped, or outdated surfaces in hours, saving Fort Thomas homeowners thousands compared to replacement.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Bathroom Refinishing Pros serves Bellevue residents and property owners with top-quality bathroom refinishing. We understand the mix of historic and modern properties that define Bellevue, and we approach each refinishing job with the care your bathroom deserves. From the river-view homes on the hillsides to the cozy bungalows in the side streets, we restore bathtubs, showers, and countertops to a factory-fresh finish. Bellevue is a community that takes pride in its homes, and we're here to help.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's spacious properties and family homes make bathroom refinishing a smart investment for homeowners who want to update without the disruption of a full remodel. NKY Bathroom Refinishing Pros provides Cold Spring homeowners with professional bathtub, shower, and countertop refinishing that delivers stunning results at a fraction of replacement cost. Whether your home overlooks Alexandria Pike or sits in one of Cold Spring's peaceful residential developments, we restore your bathroom fixtures to a smooth, durable, like-new finish. Our commercial-grade coatings are designed to last 10-15 years.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Bathroom Refinishing Pros is proud to serve the homes that make this city special. From the established neighborhoods along Taylor Mill Road to the newer developments spreading across the city, we provide bathroom refinishing that Taylor Mill residents trust. Our refinishing process transforms outdated, stained, or worn bathtubs, showers, and tile surrounds to a like-new finish — no demolition required. We tailor our approach to each surface type, whether porcelain, fiberglass, or cast iron, ensuring great results every time.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the bathrooms here deserve quality service. NKY Bathroom Refinishing Pros delivers premium bathroom refinishing services that match Villa Hills' high standards. Whether you have a vintage cast iron tub with chips and stains, outdated tile surrounds, or worn countertops, our team restores every surface to a smooth, glossy, like-new finish. Villa Hills homeowners trust us because we use commercial-grade coatings, work clean, and back every job with our quality guarantee. Save 75-90% compared to replacement.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Bathroom Refinishing Pros delivers it with every refinishing job. We've been serving this close-knit community with professional bathroom refinishing that homeowners rely on. Whether your property is along Buttermilk Pike or in one of Crescent Springs' well-maintained neighborhoods, we bring the same commitment to excellence. Our team refinishes bathtubs, showers, tile surrounds, and countertops — handling everything from minor chip repairs to full surface restoration. We work efficiently, respect your home, and deliver results that exceed expectations.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect — and deserve — top-tier service. NKY Bathroom Refinishing Pros is proud to serve Lakeside Park with professional bathroom refinishing that keeps bathrooms looking pristine. The well-maintained properties that define Lakeside Park require a careful touch, and our technicians deliver exactly that. We protect your bathroom fixtures, work neatly, and leave every refinished surface smooth and beautiful. Lakeside Park homeowners know they can count on us for bathtub, shower, and countertop refinishing that lasts.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location is home to some of Northern Kentucky's most distinctive properties — many with original bathrooms that need updating. NKY Bathroom Refinishing Pros provides Park Hills homeowners with expert bathroom refinishing that transforms outdated bathtubs, showers, and tile without the mess and expense of a full renovation. We're experienced with the unique architectural features that Park Hills properties are known for, and we approach each refinishing job with the care and precision your home deserves. Save thousands compared to replacement with our durable, beautiful refinished surfaces.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, and many of its homes feature original bathtubs and tile that deserve a second life. NKY Bathroom Refinishing Pros extends our bathroom refinishing services across the river to Walnut Hills homeowners and property managers. From the stately homes along Gilbert Avenue to the apartments near Peeble's Corner, we refinish porcelain, fiberglass, and cast iron surfaces to a factory-fresh look. Walnut Hills' mix of historic Victorians and modern apartments means we see every type of fixture — and we know how to restore each one to perfection.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes and high standards. NKY Bathroom Refinishing Pros brings our professional bathroom refinishing expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we understand the high expectations Hyde Park homeowners have. Our team delivers smooth, durable, like-new finishes on bathtubs, showers, tile, and countertops — because a neighborhood this nice deserves bathrooms to match.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Bathroom Refinishing Pros is happy to serve Norwood's dense residential neighborhoods and rental properties with reliable, affordable bathroom refinishing. Norwood's mix of older homes, duplexes, and apartments means bathtubs and tile here face decades of wear, stains, and outdated colors. Our refinishing process handles it all — restoring surfaces to a smooth, glossy finish that looks brand new. We work fast, clean up after ourselves, and deliver results that last 10-15 years.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes make it one of the Cincinnati area's premier residential communities. NKY Bathroom Refinishing Pros extends our premium bathroom refinishing services to Montgomery homeowners who expect quality service. The large homes and high-end finishes throughout Montgomery require a careful, experienced approach — and our team delivers exactly that. From historic properties near the downtown village center to sprawling estates on the outskirts, we bring the same meticulous attention to detail on every job. bathroom refinishing service.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Bathroom Refinishing Pros is proud to bring our bathroom refinishing services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the residential side streets, Deer Park homes deserve bathrooms that look fresh and modern. We offer flexible scheduling, Flexible scheduling, and the kind of dependable service that Deer Park homeowners appreciate. Refinishing saves 75-90% compared to replacement — and the results speak for themselves.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Bathroom Refinishing Pros provides the premium bathroom refinishing service that Amberley homes demand. The spacious bathrooms, high-end fixtures, and attention to detail throughout this community require a professional touch — and our fully insured, background-checked technicians deliver exactly that. We protect your property, work clean, and leave every surface looking factory-new. Amberley homeowners choose us because we treat every home like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a strong sense of community and a wide range of homes. NKY Bathroom Refinishing Pros is excited to serve Westwood with the same reliable bathroom refinishing that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we've refinished every type of bathtub, shower, and countertop Westwood has to offer. Our team works efficiently, respects your property, and always delivers beautiful, long-lasting results.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Bathroom Refinishing Pros brings our professional bathroom refinishing expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. Whether you have a stained cast iron tub, cracked tile surrounds, or outdated countertop colors, our refinishing process transforms everything to a smooth, glossy, like-new finish — at a fraction of the cost of replacement.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with stunning skyline views and a mix of historic and modern properties. NKY Bathroom Refinishing Pros brings expert bathroom refinishing to Mt. Adams homeowners and property managers who want to update their bathrooms without the disruption of a full renovation. The unique architecture in Mt. Adams means bathrooms come in all shapes and sizes — our team has the skill and equipment to refinish any bathtub, shower, or countertop surface. Whether you're in a renovated Victorian or a modern condo, we'll make your bathroom shine.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side, just across the river from Northern Kentucky. NKY Bathroom Refinishing Pros serves Mt. Lookout homeowners with professional bathroom refinishing that keeps homes looking their best. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every bathtub and tile type Mt. Lookout has to offer. We use commercial-grade coatings that deliver a smooth, durable, like-new finish — perfect for homes throughout this beloved Cincinnati neighborhood.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with a thriving business district, new developments, and a strong sense of community. NKY Bathroom Refinishing Pros is proud to serve Oakley's homes and rental properties with professional bathroom refinishing that matches the neighborhood's upward trajectory. From the homes around Oakley Square to the new builds throughout the area, we provide bathroom refinishing that's thorough, affordable, and durable. Whether you're a homeowner wanting an updated bathroom or a landlord refreshing a unit, we've got you covered.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River on the city's east side. NKY Bathroom Refinishing Pros brings our professional bathroom refinishing services to this historic riverfront community, where homes range from restored 19th-century cottages to modern river-view condos. Many of these older homes have original porcelain tubs and vintage tile that just need a professional refinish — not a full gut renovation. Whether your bathroom has a classic clawfoot tub or dated tile surrounds, we restore it to a beautiful, like-new finish.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side, known for its well-kept homes and strong community spirit. NKY Bathroom Refinishing Pros is happy to extend our bathroom refinishing services to Pleasant Ridge residents who want an updated bathroom without the mess and expense of replacement. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means we adapt our approach to each surface. Our team is fast, friendly, and thorough, leaving your bathroom looking fresh and modern every single time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Bathroom Refinishing Pros refinished our 1970s avocado green tub in Florence. It looks brand new — bright white, smooth, and shiny. Saved us thousands vs replacement.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "Our shower tile was cracked and stained. They refinished everything in one day. Our Covington bathroom looks like a complete remodel for a fraction of the cost.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Refinished our bathtub and countertops. The team was professional, clean, and the results are amazing. Professional bathroom refinishing service in Northern Kentucky.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "We refinished two bathtubs and a shower in our Edgewood home. Looks like new construction. Affordable, fast, and the warranty gives us peace of mind.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "NKY Bathroom Refinishing Pros refinished our 1970s avocado green tub in Florence. It looks brand new — bright white, smooth, and shiny. The team was careful, clean, and finished in one day. Saved us thousands compared to replacement.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "Our shower tile was cracked and stained after years of use. They refinished everything in one day. Our Covington bathroom looks like a complete remodel for a fraction of the cost. Highly recommend their bathroom refinishing service.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "Refinished our bathtub and countertops. The team was professional, clean, and the results are amazing. Our Fort Mitchell bathroom looks completely updated. Professional bathroom refinishing service in Northern Kentucky.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Hired them to refinish the bathtub and tile in our Erlanger rental property. Fast turnaround, great service, and the results look like new construction. Our quality guarantee gives us confidence. Will use them for all our properties.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just bought an older home in Independence and the bathrooms were dated. NKY Bathroom Refinishing Pros refinished both tubs and the tile surrounds. Everything looks brand new. Saved us thousands vs replacement.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for bathtub refinishing on our Newport home. They gave us a competitive price over the phone and came out the same week. The tub went from stained and chipped to smooth and white. Great service, great service.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "We refinished two bathtubs and a shower in our Edgewood home. Looks like new construction. Affordable, fast, and the warranty gives us peace of mind. Professional bathroom refinishing company in Northern Kentucky.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home has an original cast iron tub that was stained and worn. They refinished it beautifully — smooth, white, and glossy. Looks brand new. The team was careful and professional. Professional bathroom refinishing service in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
