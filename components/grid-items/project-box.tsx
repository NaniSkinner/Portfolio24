import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Icon from "@/components/icon";
import Image from "next/image";
import { Star } from "lucide-react";

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
  // If the project has an image, render it as a visual project card with background image
  if (item.image) {
    return (
      <Link
        href={item.buttonLink ?? ""}
        className="flex flex-col w-full h-full overflow-hidden rounded-3xl bg-white dark:bg-neutral-900"
      >
        {/* Image Section */}
        <div className="relative flex-1 flex items-start justify-center pt-8">
          <div className="relative w-full h-full">
            <Image
              className="z-0 object-contain object-top w-full h-full"
              src={item.image}
              alt={item.title}
              fill
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="relative z-20 w-full p-4 space-y-3 md:p-8 bg-gradient-to-t from-neutral-950/80 to-transparent">
          <div className="text-xl font-semibold text-white">{item.title}</div>
          {item.description && (
            <p className="text-base text-white/90 mb-4">{item.description}</p>
          )}
          {item.buttonTitle && (
            <div className="px-4 py-2 text-sm font-medium bg-green-300 text-gray-800 rounded-lg hover:bg-green-400 transition-colors inline-block ml-[-8px]">
              {item.buttonTitle}
            </div>
          )}
        </div>
      </Link>
    );
  }

  // Default layout for GitHub-style projects with icons and stars
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
