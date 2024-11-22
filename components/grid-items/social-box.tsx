import { GridItemInterface } from "@/config/site-config";
import Icon from "@/components/icon";
import Button from "@/components/button";
import Link from "next/link";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""}>
      {/* Header */}
      <div className="flex item-center justify-between">
        {/* Icon */}
        <Icon type={item.icon ?? ""} color={item.color} />
        {/* Button */}
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        )}
      </div>
      {/* Content Container */}
      <div className="mt-2">
        {/* Title */}
        <div className=" text-lg font-semibold">{item.title}</div>
        {/* Username */}
        <div className="text-sm text-neutral-500">{item.username}</div>
        {/* Description */}
        {item.description && (
          <div className="text-sm text-neutral-500 line-clamp-2">
            {item.description}
          </div>
        )}
      </div>
      {/* Button */}
      {item.layout === "1x2" && (
        <div className="mt-2">
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        </div>
      )}
    </Link>
  );
};

export default SocialBox;
