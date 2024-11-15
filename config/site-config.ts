export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EquipmentItem = {
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
  buttonSeconderyTitle?: string;
  /* Mentor*/
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /*Projet*/
  stars?: number;
  /*Equipment */
  equipments?: EquipmentItem[];
  imagen?: string;
}

export const siteConfig = {
  creator: "Nani Skinner",
  title: "Technical Writer",
  bio: "Mom, Wife, CrossFitter, Coding & Learning Everyday Something New.",
  location: "Earth 🌎",
} as const;
