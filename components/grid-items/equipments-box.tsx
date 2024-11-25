import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";

const EquipmentsBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col justify-end w-full h-full rounded-3xl overflow-hidden">
      {/* Overlay */}
      <div className="absolute insert-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-900/90"></div>
      {/*Background Image */}
      <Image
        className="object-center object-cover"
        fill
        src={item.image ?? ""}
        alt="bg-image"
      />
      {/* Content Container */}
      <div className="relative z-20 p-8">
        {/* Title */}
        <div className="text-medium text-sm text-white mb-3">{item.title}</div>
        {/* Items*/}
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipements) => {
            return (
              <Link
                className="px-2 py-1 font-sm bg-white rounded-lg dark:bg-neutral-900 "
                key={equipements.link}
                href={equipements.link}
              >
                {equipements.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EquipmentsBox;
