import { GridItemInterface } from "@/config/site-config";
import Icon from "@/components/icon";
import Link from "next/link";

const MentorshipBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} className="flex items-center gap-3">
      {/*Icon */}
      <Icon type={item.icon ?? ""} color={item.color} />
      {/* Title */}
      <div className=" w-full text-base @text-lg font-semibold">
        {item.title}
      </div>
      {/* Container */}
      <div>
        {/*Top Container*/}
        <div className="felx item-center justify-between">
          <div className="text-xs line-through text-neutral-500">PROMO</div>
          <div className="fex items-center gap-1">
            <span className="text-xs line-through text-neutral-500">
              {item.oldPrice}
            </span>
            <span>{item.price}</span>
          </div>
          {/*Bottom Container*/}
          <div className=" text-primary font-bold">{item.promotion}</div>
        </div>
      </div>
    </Link>
  );
};

export default MentorshipBox;
