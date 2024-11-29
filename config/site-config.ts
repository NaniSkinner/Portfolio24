export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@GuiandoPodcast",
    description:
      "My hobby is to help parents on how to guide our children in our everyday adventures.",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://youtube.com/@guiandopodcast?si=v-zlcEWphfct8BnU",
    buttonSecondaryText: "",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@nani_skinner",
    buttonTitle: "",
    buttonLink: "",
    buttonSecondaryText: "",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@NaniSkinner",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink: "https://github.com/NaniSkinner",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Video Equipment",
    image: "/equipments-image.png",
    equipments: [
      {
        title: "Sony A7RIII",
        link: "https://amzn.to/3BO6MEM",
      },
      {
        title: "Sony 70-200 f2.8 GM Lens",
        link: "https://amzn.to/48q53Sp",
      },
      {
        title: "DJI Mic 1",
        link: "https://amzn.to/3Yr7TmK",
      },
      {
        title: "VICTIV 80in. Camera Tripod",
        link: "https://amzn.to/3BMTMz5",
      },
      {
        title: "SHIRTAL 37in.Softbox Lighting Kit",
        link: "https://amzn.to/3BY7pve",
      },
      {
        title: "Papeaso 4K Video Capture Card",
        link: "https://amzn.to/3BJfIel",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "X",
    icon: "twitter",
    username: "@naniskinner",
    buttonTitle: "Follow",
    buttonLink: "https://x.com/NaniSkinner",
    buttonSecondaryText: "",
    color: "#000",
    description: "🎙️ Podcast Host, Studying Web3 Engineering 💕 Mom of 2",
  },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Next.js Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Supabase Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "makrAI",
  //   icon: "github",
  //   color: "#070707",
  //   buttonLink: "https://github.com/batuhanbilginn/makr-ai",
  //   stars: 73,
  // },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Full-stack Multilingual Blog with Next.js 13",
  //   username: "@batuhanbilginn",
  //   description:
  //     "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
  //   icon: "hashnode",
  //   buttonTitle: "Enroll",
  //   buttonSecondaryText: "%90 OFF",
  //   buttonLink:
  //     "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  // },
  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "AI Blog Post Generator",
  //   icon: "github",
  //   stars: 19,
  //   color: "#070707",
  //   buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
  // },
];

export const siteConfig = {
  creator: "Nani Skinner",
  title: "Technical Writter | Proyect Manager",
  bio: "Former Montessori educator turned Frontend Engeneer | Currently building in Web3",
  location: "Earth 🌎",
  locationLink:
    "https://www.google.com/maps/place/Geography+of+Nauru/@-0.5499785,166.906367,15z/data=!3m1!4b1!4m6!3m5!1s0x6f7d1e7fc04bb389:0x274a74be85b3409d!8m2!3d-0.55!4d166.9166667!16s%2Fm%2F011b946t?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  email: "skinner.galvez@gmail.com",
  items: GridItems,
} as const;
