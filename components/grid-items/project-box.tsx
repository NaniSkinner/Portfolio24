import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Icon from "@/components/icon";
import { Star } from "lucide-react";

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full @lg:text-lg  font-semibold">{item.title}</div>
      <div className="flex items-center gap-1">
        <div className="mt-[1px]">{item.stars}</div>
        <Star fill="currentColor" size={16} />
      </div>
    </Link>
  );
};

export default ProjectBox;