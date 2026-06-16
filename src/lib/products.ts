export type Recipe = {
  name: string;
  tagline: string;
  emoji: string;
  time: string;
  serves: string;
  ingredients: string[];
  steps: string[];
  tips: string;
  nutrition?: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  mrp: number;
  unit: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: "Powders" | "Black Lemon" | "Oils" | "Whole";
  accent: string; // tailwind gradient direction handled in component
  hue: "lemon" | "leaf" | "charcoal";
  highlights: string[];
  benefits: { title: string; text: string }[];
  howToUse: { step: string; detail: string }[];
  industries: string[];
  recipes: Recipe[];
};

export const products: Product[] = [
  {
    slug: "lemon-powder",
    name: "Spray-Dried Lemon Powder",
    shortName: "Lemon Powder",
    tagline: "Sunshine you can spoon",
    description:
      "100% natural lemon powder with the bright, tangy punch of fresh-squeezed lemons — shelf-stable and ready whenever you are.",
    longDescription:
      "Our flagship Lemon Powder is gently spray-dried from premium hand-picked lemons to lock in the citrus brightness, vitamin C and aroma of the fresh fruit. No preservatives, no added colour — just pure concentrated lemon that dissolves instantly into anything from a glass of water to an industrial drink batch.",
    price: 249,
    mrp: 320,
    unit: "200g pack",
    rating: 4.9,
    reviews: 1284,
    badge: "Bestseller",
    category: "Powders",
    accent: "from-lemon-300 to-lemon-500",
    hue: "lemon",
    highlights: ["100% Natural", "No Preservatives", "Instantly Soluble", "Rich in Vitamin C"],
    benefits: [
      { title: "Year-round freshness", text: "Get the zing of fresh lemon without the squeezing, seeds or spoilage. A long shelf life with zero compromise on flavour." },
      { title: "Immunity boost", text: "Naturally rich in vitamin C and antioxidants to support everyday immunity and glowing skin." },
      { title: "Effortless consistency", text: "Every pinch delivers the same balanced tang — perfect for kitchens, cafés and large-scale beverage units." },
    ],
    howToUse: [
      { step: "Refreshing lemonade", detail: "Stir 1 tsp into a glass of chilled water with a touch of sugar or honey." },
      { step: "Season & cook", detail: "Sprinkle over rice, curries, marinades and salads for an instant citrus lift." },
      { step: "Bake & blend", detail: "Fold into cakes, smoothies and dressings wherever a recipe calls for lemon juice." },
    ],
    industries: ["Beverage manufacturing", "Buttermilk distribution camps", "Lemon juice production", "Food processing"],
    recipes: [
      {
        name: "5-Minute Sunshine Lemonade",
        tagline: "The classic cooler, reinvented",
        emoji: "🍋",
        time: "5 min",
        serves: "2 glasses",
        ingredients: ["2 tsp Vita Limes Lemon Powder", "2 tbsp sugar or honey", "500 ml chilled water", "Mint leaves & ice"],
        steps: [
          "Add lemon powder and sugar to a jug.",
          "Pour in a splash of warm water and stir until fully dissolved.",
          "Top up with chilled water and ice.",
          "Garnish with mint and serve immediately.",
        ],
        tips: "Swap water for soda for a fizzy nimbu soda, or add a pinch of black salt for a desi twist.",
        nutrition: "~60 kcal per glass · Vitamin C rich",
      },
      {
        name: "Zesty Lemon Rice",
        tagline: "South-Indian comfort in 15 minutes",
        emoji: "🍚",
        time: "15 min",
        serves: "3 people",
        ingredients: ["2 cups cooked rice", "1.5 tsp Lemon Powder", "Mustard seeds, curry leaves, peanuts", "Turmeric & green chilli"],
        steps: [
          "Temper mustard seeds, peanuts, curry leaves and chilli in oil.",
          "Add turmeric and the cooked rice; toss gently.",
          "Dissolve lemon powder in 2 tbsp water and drizzle over the rice.",
          "Fold through and serve warm.",
        ],
        tips: "Add a spoon of grated coconut for extra richness.",
      },
      {
        name: "Honey-Lemon Wellness Tea",
        tagline: "A soothing cup any time of day",
        emoji: "🍵",
        time: "5 min",
        serves: "1 cup",
        ingredients: ["1 tsp Lemon Powder", "1 tsp honey", "1 cup hot water", "Grated ginger (optional)"],
        steps: [
          "Add lemon powder and honey to a cup.",
          "Pour over hot (not boiling) water.",
          "Stir in fresh ginger if you like a kick.",
          "Sip slowly and enjoy.",
        ],
        tips: "Perfect for sore throats and a calm evening wind-down.",
      },
    ],
  },
  {
    slug: "black-lemon",
    name: "Whole Black Lemon (Loomi)",
    shortName: "Black Lemon",
    tagline: "Smoky, earthy, ancient",
    description:
      "Sun-fermented whole black lemons with a deep, smoky-sour flavour treasured across Middle-Eastern and herbal kitchens.",
    longDescription:
      "Also known as loomi, our Black Lemon is slowly sun-cured until the fruit turns dark and intensely aromatic. The result is a complex, tangy-smoky depth that transforms stews, broths and herbal blends. A favourite of leading Mandi restaurant chains, now available for your kitchen too.",
    price: 399,
    mrp: 480,
    unit: "150g pack",
    rating: 4.8,
    reviews: 642,
    badge: "Chef's Choice",
    category: "Black Lemon",
    accent: "from-charcoal to-leaf-700",
    hue: "charcoal",
    highlights: ["Sun-Fermented", "Intensely Aromatic", "Whole & Unground", "Restaurant Grade"],
    benefits: [
      { title: "Digestive support", text: "Traditionally used to aid digestion and balance heavy, rich meals." },
      { title: "Antioxidant powerhouse", text: "The slow-curing process concentrates antioxidants and minerals." },
      { title: "Bold, unmatched flavour", text: "A smoky-citrus complexity you simply cannot get from fresh lemon." },
    ],
    howToUse: [
      { step: "Pierce & simmer", detail: "Prick a whole loomi and drop it into stews, biryanis and broths to infuse." },
      { step: "Brew as tea", detail: "Steep a crushed black lemon in hot water for a tangy herbal infusion." },
      { step: "Grind to powder", detail: "Blitz into spice blends for a deep, sour seasoning." },
    ],
    industries: ["Mandi restaurant chains", "Herbal formulations", "Stews & broths", "Spice blending"],
    recipes: [
      {
        name: "Authentic Mandi Broth",
        tagline: "The secret behind restaurant Mandi",
        emoji: "🍲",
        time: "45 min",
        serves: "4 people",
        ingredients: ["2 whole Black Lemons", "1 kg chicken or lamb", "Mandi spice mix", "Onion, garlic & stock"],
        steps: [
          "Pierce the black lemons and add to a pot of stock.",
          "Add the meat, onions, garlic and spice mix.",
          "Simmer gently for 40 minutes until tender.",
          "Discard the lemons and serve over smoked rice.",
        ],
        tips: "One loomi is enough for a subtle tang — add a second for bolder depth.",
      },
      {
        name: "Black Lemon Herbal Tea",
        tagline: "Earthy, detoxifying, warming",
        emoji: "🫖",
        time: "10 min",
        serves: "2 cups",
        ingredients: ["1 Black Lemon, crushed", "500 ml water", "Honey to taste", "A few mint leaves"],
        steps: [
          "Crush the black lemon lightly to open it up.",
          "Simmer in water for 8 minutes.",
          "Strain into cups and sweeten with honey.",
          "Finish with fresh mint.",
        ],
        tips: "A classic post-meal digestive sip.",
      },
      {
        name: "Smoky Lemon Lentil Stew",
        tagline: "Comfort with a citrus soul",
        emoji: "🥘",
        time: "30 min",
        serves: "4 people",
        ingredients: ["1 cup lentils", "1 Black Lemon", "Cumin, coriander & garlic", "Tomato & spinach"],
        steps: [
          "Sauté garlic and spices, then add lentils and water.",
          "Drop in a pierced black lemon and simmer until soft.",
          "Stir through tomato and spinach.",
          "Season and serve with bread.",
        ],
        tips: "Remove the lemon before blending for a smoother stew.",
      },
    ],
  },
  {
    slug: "black-lemon-powder",
    name: "Black Lemon Powder",
    shortName: "Black Lemon Powder",
    tagline: "Loomi, ground to perfection",
    description:
      "Finely milled black lemon delivering smoky-sour intensity in a spoonable form — a hero in spice blends and herbal formulations.",
    longDescription:
      "All the depth of whole black lemon, ground into a fine, ready-to-use powder. Our Black Lemon Powder is prized by herbal formulators, spice houses and food processors for its concentrated tang and earthy aroma. A little goes a remarkably long way.",
    price: 349,
    mrp: 420,
    unit: "100g pack",
    rating: 4.7,
    reviews: 388,
    category: "Black Lemon",
    accent: "from-charcoal-light to-leaf-600",
    hue: "charcoal",
    highlights: ["Finely Milled", "Concentrated Flavour", "Herbal Grade", "Versatile"],
    benefits: [
      { title: "Instant depth", text: "Adds smoky-sour complexity to any dish without simmering whole fruit." },
      { title: "Formulator favourite", text: "A trusted active in herbal and wellness formulations." },
      { title: "Even & consistent", text: "Uniform milling ensures reliable flavour batch after batch." },
    ],
    howToUse: [
      { step: "Season directly", detail: "Sprinkle into stews, rubs and marinades for instant loomi flavour." },
      { step: "Blend spice mixes", detail: "Combine with cumin, coriander and chilli for a signature blend." },
      { step: "Formulate", detail: "Use as a natural active in herbal and wellness products." },
    ],
    industries: ["Herbal formulations", "Food stew additives", "Spice blends", "Food processing"],
    recipes: [
      {
        name: "Loomi Spice Rub",
        tagline: "Transform grills & roasts",
        emoji: "🌶️",
        time: "5 min",
        serves: "1 jar",
        ingredients: ["2 tbsp Black Lemon Powder", "1 tbsp paprika", "1 tsp cumin & coriander", "Salt & pepper"],
        steps: [
          "Combine all spices in a bowl.",
          "Mix until uniform.",
          "Rub generously over meat or vegetables.",
          "Rest for 30 minutes before cooking.",
        ],
        tips: "Store in an airtight jar for up to 3 months.",
      },
      {
        name: "Tangy Herbal Detox Shot",
        tagline: "A daily wellness ritual",
        emoji: "🧉",
        time: "3 min",
        serves: "1 shot",
        ingredients: ["1/2 tsp Black Lemon Powder", "Warm water", "Pinch of black salt", "Honey"],
        steps: [
          "Dissolve the powder in a little warm water.",
          "Add black salt and honey.",
          "Stir well and drink on an empty stomach.",
          "Follow with a glass of water.",
        ],
        tips: "Start with a small pinch — the flavour is intense.",
      },
    ],
  },
  {
    slug: "lemon-essential-oil",
    name: "Cold-Pressed Lemon Essential Oil",
    shortName: "Lemon Essential Oil",
    tagline: "Pure citrus aromatherapy",
    description:
      "Steam-distilled lemon essential oil with a bright, uplifting aroma for aromatherapy, skincare and personal care.",
    longDescription:
      "Extracted from the zest of fresh lemons, our Essential Oil captures the purest, most uplifting citrus aroma. Therapeutic-grade and versatile, it's a staple in aromatherapy, cosmetic formulations and natural cleaning — a single drop fills the room with sunshine.",
    price: 549,
    mrp: 699,
    unit: "30ml bottle",
    rating: 4.9,
    reviews: 512,
    badge: "Premium",
    category: "Oils",
    accent: "from-lemon-200 to-leaf-300",
    hue: "lemon",
    highlights: ["Steam Distilled", "Therapeutic Grade", "100% Pure", "Uplifting Aroma"],
    benefits: [
      { title: "Mood & focus", text: "The bright citrus scent is known to uplift mood and sharpen focus." },
      { title: "Radiant skin", text: "A clarifying addition to cosmetic and personal-care formulations." },
      { title: "Natural freshness", text: "A pure, chemical-free way to freshen your home and air." },
    ],
    howToUse: [
      { step: "Diffuse", detail: "Add a few drops to a diffuser for an instant mood lift." },
      { step: "Steam inhalation", detail: "Drop into hot water and inhale to clear the senses." },
      { step: "Dilute & apply", detail: "Blend with a carrier oil for skincare and massage." },
    ],
    industries: ["Aromatherapy", "Cosmetic formulations", "Personal care", "Industrial uses"],
    recipes: [
      {
        name: "Uplifting Diffuser Blend",
        tagline: "Sunshine in every room",
        emoji: "🌬️",
        time: "2 min",
        serves: "1 diffuser",
        ingredients: ["4 drops Lemon Essential Oil", "2 drops lavender", "Water", "A diffuser"],
        steps: [
          "Fill your diffuser with water to the line.",
          "Add the lemon and lavender oils.",
          "Switch on and enjoy.",
          "Refresh every few hours as needed.",
        ],
        tips: "Pair with rosemary for a focus-boosting workday blend.",
      },
      {
        name: "Citrus Glow Face Oil",
        tagline: "A clarifying skincare ritual",
        emoji: "✨",
        time: "5 min",
        serves: "1 bottle",
        ingredients: ["3 drops Lemon Essential Oil", "30 ml jojoba oil", "1 drop vitamin E", "A glass dropper bottle"],
        steps: [
          "Combine jojoba and vitamin E in a bottle.",
          "Add the lemon essential oil.",
          "Shake gently to blend.",
          "Apply 2–3 drops to clean skin at night.",
        ],
        tips: "Always patch-test and avoid direct sun after applying citrus oils.",
      },
    ],
  },
  {
    slug: "lemon-seed-powder",
    name: "Lemon Seed Powder",
    shortName: "Lemon Seed Powder",
    tagline: "Nature's hair-care secret",
    description:
      "Finely ground lemon seeds rich in natural nutrients — a prized active for hair packs and natural cosmetics.",
    longDescription:
      "An often-overlooked treasure, lemon seeds are dried and milled into a nutrient-dense powder loved by natural cosmetic makers. Our Lemon Seed Powder is a clean, plant-based active for hair packs, scalp treatments and personal-care formulations.",
    price: 299,
    mrp: 370,
    unit: "100g pack",
    rating: 4.6,
    reviews: 214,
    category: "Powders",
    accent: "from-leaf-200 to-leaf-400",
    hue: "leaf",
    highlights: ["Nutrient Dense", "Plant-Based", "Cosmetic Grade", "Finely Milled"],
    benefits: [
      { title: "Stronger hair", text: "A natural active traditionally used to nourish hair and scalp." },
      { title: "Clean beauty", text: "100% plant-based — perfect for natural cosmetic formulations." },
      { title: "Multi-use", text: "Blends easily into packs, masks and personal-care products." },
    ],
    howToUse: [
      { step: "Hair pack", detail: "Mix with yoghurt or aloe to form a nourishing hair pack." },
      { step: "Scalp scrub", detail: "Combine with oil for a gentle exfoliating scalp treatment." },
      { step: "Formulate", detail: "Add to natural cosmetic and personal-care products." },
    ],
    industries: ["Hair pack formulations", "Hair care", "Natural cosmetics", "Personal care"],
    recipes: [
      {
        name: "Nourishing Hair Pack",
        tagline: "Salon shine at home",
        emoji: "💇",
        time: "10 min",
        serves: "1 application",
        ingredients: ["2 tbsp Lemon Seed Powder", "3 tbsp yoghurt", "1 tbsp aloe vera gel", "A little water"],
        steps: [
          "Mix all ingredients into a smooth paste.",
          "Apply from root to tip.",
          "Leave on for 30 minutes.",
          "Rinse with a mild shampoo.",
        ],
        tips: "Use once a week for best results.",
      },
    ],
  },
  {
    slug: "lemon-seed-oil",
    name: "Lemon Seed Oil",
    shortName: "Lemon Seed Oil",
    tagline: "Lightweight nourishment",
    description:
      "A delicate, nutrient-rich oil pressed from lemon seeds — a gentle base for hair and skincare formulations.",
    longDescription:
      "Cold-pressed from carefully selected lemon seeds, this lightweight oil is a gentle, nourishing carrier for natural hair and skincare. Easily absorbed and rich in beneficial compounds, it's a clean-beauty favourite for formulators and home users alike.",
    price: 499,
    mrp: 620,
    unit: "50ml bottle",
    rating: 4.7,
    reviews: 176,
    category: "Oils",
    accent: "from-lemon-100 to-leaf-200",
    hue: "leaf",
    highlights: ["Cold Pressed", "Lightweight", "Easily Absorbed", "Clean Beauty"],
    benefits: [
      { title: "Hair vitality", text: "Nourishes the scalp and helps keep hair soft and healthy." },
      { title: "Gentle on skin", text: "A light, fast-absorbing oil suited to everyday skincare." },
      { title: "Versatile carrier", text: "An ideal base for blending essential oils and actives." },
    ],
    howToUse: [
      { step: "Scalp massage", detail: "Warm a little and massage into the scalp before washing." },
      { step: "Skin moisturiser", detail: "Apply a few drops to damp skin to seal in moisture." },
      { step: "Blend", detail: "Use as a carrier for your favourite essential oils." },
    ],
    industries: ["Hair care", "Natural cosmetics", "Personal care", "Skincare formulations"],
    recipes: [
      {
        name: "Pre-Wash Scalp Treatment",
        tagline: "Roots that thrive",
        emoji: "🧴",
        time: "20 min",
        serves: "1 application",
        ingredients: ["2 tbsp Lemon Seed Oil", "2 drops rosemary oil", "Warm towel"],
        steps: [
          "Warm the oil slightly between your palms.",
          "Massage into the scalp in circular motions.",
          "Wrap with a warm towel for 20 minutes.",
          "Wash out with a gentle shampoo.",
        ],
        tips: "Use weekly for a healthier, calmer scalp.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
