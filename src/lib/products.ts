export type Recipe = {
  name: string;
  tagline: string;
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
  image: string;
  description: string;
  longDescription: string;
  price: number;
  mrp: number;
  unit: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
  highlights: string[];
  benefits: { title: string; text: string }[];
  howToUse: { step: string; detail: string }[];
  industries: string[];
  recipes: Recipe[];
};

export const products: Product[] = [
  {
    slug: "lemon-powder",
    name: "Lemon Powder",
    shortName: "Lemon Powder",
    tagline: "Sunshine, spray-dried",
    image: "/img/p-lemon-powder.jpg",
    description:
      "The bright, tangy soul of a fresh lemon — gently dried into a fine, shelf-stable powder that dissolves in an instant.",
    longDescription:
      "Made from lemons procured the same day from Kovilpatti's groves, our Lemon Powder locks in the citrus brightness, vitamin C and aroma of the fresh fruit through careful scientific drying. No preservatives, no added colour — just pure concentrated lemon, ready for kitchens, beverage units and food processors at any scale.",
    price: 249,
    mrp: 320,
    unit: "200g",
    rating: 4.9,
    reviews: 1284,
    badge: "Bestseller",
    category: "Powders",
    highlights: ["100% Natural", "No Preservatives", "Instantly Soluble", "Vitamin C Rich"],
    benefits: [
      { title: "Year-round freshness", text: "The zing of fresh lemon without the squeezing, seeds or spoilage — a long shelf life with zero compromise on flavour." },
      { title: "Immunity & wellness", text: "Naturally rich in vitamin C and antioxidants, valued by nutraceutical and wellness producers." },
      { title: "Consistent at scale", text: "Every batch delivers the same balanced tang — built for beverage units, buttermilk camps and large kitchens." },
    ],
    howToUse: [
      { step: "Refreshing lemonade", detail: "Stir a teaspoon into chilled water with sugar or honey." },
      { step: "Season & cook", detail: "Sprinkle over rice, curries, marinades and salads for an instant citrus lift." },
      { step: "Bake & blend", detail: "Fold into cakes, smoothies and dressings wherever a recipe calls for lemon juice." },
    ],
    industries: ["Food & Beverage", "Spice manufacturers", "Nutraceuticals", "Food processing"],
    recipes: [
      {
        name: "Sunshine Lemonade",
        tagline: "The classic cooler, in five minutes",
        time: "5 min",
        serves: "2 glasses",
        ingredients: ["2 tsp Vita Limes Lemon Powder", "2 tbsp sugar or honey", "500 ml chilled water", "Mint leaves & ice"],
        steps: [
          "Add lemon powder and sugar to a jug.",
          "Pour in a splash of warm water and stir until dissolved.",
          "Top up with chilled water and ice.",
          "Garnish with mint and serve immediately.",
        ],
        tips: "Swap water for soda for a fizzy nimbu soda, or add a pinch of black salt for a desi twist.",
        nutrition: "~60 kcal per glass · Vitamin C rich",
      },
      {
        name: "Zesty Lemon Rice",
        tagline: "South-Indian comfort in fifteen minutes",
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
        tagline: "A soothing cup, any time of day",
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
    name: "Black Lemon",
    shortName: "Black Lemon",
    tagline: "Sun-cured, smoky, ancient",
    image: "/img/p-black-lemon.jpg",
    description:
      "Whole lemons slowly sun-cured to a deep, smoky-sour intensity — a treasure of Middle-Eastern and Ayurvedic kitchens.",
    longDescription:
      "Also known as loomi, our Black Lemon is sun-cured until the fruit turns dark and intensely aromatic, concentrating its tang into a complex, earthy depth. Prized by Siddha and Ayurvedic producers, spice houses and restaurant chains, it transforms stews, broths and herbal blends like nothing else.",
    price: 399,
    mrp: 480,
    unit: "150g",
    rating: 4.8,
    reviews: 642,
    badge: "Chef's Choice",
    category: "Whole",
    highlights: ["Sun-Cured", "Intensely Aromatic", "Whole Fruit", "Restaurant Grade"],
    benefits: [
      { title: "Digestive support", text: "Traditionally used in Siddha and Ayurvedic practice to aid digestion and balance rich meals." },
      { title: "Antioxidant depth", text: "The slow-curing process concentrates antioxidants, minerals and flavour." },
      { title: "Unmatched flavour", text: "A smoky-citrus complexity you simply cannot get from fresh lemon." },
    ],
    howToUse: [
      { step: "Pierce & simmer", detail: "Prick a whole loomi and drop it into stews, biryanis and broths to infuse." },
      { step: "Brew as tea", detail: "Steep a crushed black lemon in hot water for a tangy herbal infusion." },
      { step: "Grind to powder", detail: "Blitz into spice blends for a deep, sour seasoning." },
    ],
    industries: ["Ayurvedic & Siddha", "Restaurant chains", "Spice manufacturers", "Herbal formulations"],
    recipes: [
      {
        name: "Smoky Lemon Broth",
        tagline: "Depth in every spoonful",
        time: "45 min",
        serves: "4 people",
        ingredients: ["2 whole Black Lemons", "1 kg chicken or vegetables", "Whole spice mix", "Onion, garlic & stock"],
        steps: [
          "Pierce the black lemons and add to a pot of stock.",
          "Add the protein, onions, garlic and spice mix.",
          "Simmer gently for 40 minutes until tender.",
          "Discard the lemons and serve over rice.",
        ],
        tips: "One loomi gives a subtle tang — add a second for bolder depth.",
      },
      {
        name: "Black Lemon Herbal Tea",
        tagline: "Earthy, warming, digestive",
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
    ],
  },
  {
    slug: "black-lemon-powder",
    name: "Black Lemon Powder",
    shortName: "Black Lemon Powder",
    tagline: "Loomi, finely ground",
    image: "/img/p-black-lemon-powder.jpg",
    description:
      "All the smoky-sour depth of sun-cured black lemon, milled into a fine powder for instant, even seasoning.",
    longDescription:
      "A concentrated, ready-to-use form of our Black Lemon, prized by herbal formulators, spice houses and food processors. The fine, uniform milling delivers reliable, earthy tang batch after batch — a little goes a remarkably long way.",
    price: 349,
    mrp: 420,
    unit: "100g",
    rating: 4.7,
    reviews: 388,
    category: "Powders",
    highlights: ["Finely Milled", "Concentrated", "Herbal Grade", "Versatile"],
    benefits: [
      { title: "Instant depth", text: "Adds smoky-sour complexity to any dish without simmering whole fruit." },
      { title: "Formulator favourite", text: "A trusted natural active in Ayurvedic, Siddha and herbal formulations." },
      { title: "Even & consistent", text: "Uniform milling ensures reliable flavour and colour every time." },
    ],
    howToUse: [
      { step: "Season directly", detail: "Sprinkle into stews, rubs and marinades for instant loomi flavour." },
      { step: "Blend spice mixes", detail: "Combine with cumin, coriander and chilli for a signature blend." },
      { step: "Formulate", detail: "Use as a natural active in herbal and wellness products." },
    ],
    industries: ["Spice manufacturers", "Ayurvedic & Siddha", "Herbal formulations", "Food processing"],
    recipes: [
      {
        name: "Loomi Spice Rub",
        tagline: "Transform grills & roasts",
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
    ],
  },
  {
    slug: "lemon-essential-oil",
    name: "Lemon Essential Oil",
    shortName: "Lemon Essential Oil",
    tagline: "Pure citrus, distilled",
    image: "/img/p-essential-oil.jpg",
    description:
      "A bright, uplifting essential oil extracted from fresh lemon zest — for aromatherapy, skincare and personal care.",
    longDescription:
      "Steam-extracted from the zest of fresh Kovilpatti lemons, our Essential Oil captures the purest, most uplifting citrus aroma. Therapeutic-grade and versatile, it is a staple for cosmetic manufacturers, aromatherapists and personal-care formulators.",
    price: 549,
    mrp: 699,
    unit: "30ml",
    rating: 4.9,
    reviews: 512,
    badge: "Premium",
    category: "Oils",
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
    industries: ["Cosmetic manufacturers", "Aromatherapy", "Personal care", "Wellness"],
    recipes: [
      {
        name: "Uplifting Diffuser Blend",
        tagline: "Sunshine in every room",
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
    ],
  },
  {
    slug: "lemon-seed-powder",
    name: "Lemon Seed Powder",
    shortName: "Lemon Seed Powder",
    tagline: "Nothing wasted, all nourishing",
    image: "/img/p-seed-powder.jpg",
    description:
      "An often-overlooked treasure — nutrient-dense lemon seeds, dried and finely milled for natural hair and skin care.",
    longDescription:
      "Part of our zero-waste philosophy, lemon seeds are dried and milled into a clean, plant-based powder loved by natural cosmetic makers. A nutrient-dense active for hair packs, scalp treatments and personal-care formulations.",
    price: 299,
    mrp: 370,
    unit: "100g",
    rating: 4.6,
    reviews: 214,
    category: "Powders",
    highlights: ["Nutrient Dense", "Plant-Based", "Cosmetic Grade", "Zero Waste"],
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
    industries: ["Cosmetic manufacturers", "Hair care", "Personal care", "Natural beauty"],
    recipes: [
      {
        name: "Nourishing Hair Pack",
        tagline: "Salon shine at home",
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
    tagline: "Lightweight, cold-pressed",
    image: "/img/p-seed-oil.jpg",
    description:
      "A delicate, nutrient-rich oil cold-pressed from lemon seeds — a gentle base for hair and skincare formulations.",
    longDescription:
      "Cold-pressed from carefully selected lemon seeds, this lightweight oil is a gentle, fast-absorbing carrier for natural hair and skincare. Rich in beneficial compounds, it is a clean-beauty favourite for formulators and home users alike.",
    price: 499,
    mrp: 620,
    unit: "50ml",
    rating: 4.7,
    reviews: 176,
    category: "Oils",
    highlights: ["Cold Pressed", "Lightweight", "Fast Absorbing", "Clean Beauty"],
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
    industries: ["Cosmetic manufacturers", "Hair care", "Personal care", "Skincare"],
    recipes: [
      {
        name: "Pre-Wash Scalp Treatment",
        tagline: "Roots that thrive",
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
