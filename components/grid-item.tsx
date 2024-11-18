import { cn } from "@/Utils/cn"; // Corrected the casing issue in the import path
import { cva, type VariantProps } from "class-variance-authority";

const GridItem = ({
  size,
  children,
}: {
  size: string;
  children: React.ReactNode;
}) => {
  return <div> {children}</div>;
};

export default GridItem;
