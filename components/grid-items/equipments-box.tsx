import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";

const EquipmentsBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      {/* Overlay */}
      <Image
        className="object-center object-cover"
        fill
        src={item.image ?? ""}
        alt="bg-image"
      />
    </div>
  );
};
{
  /* <Image
  className="object-center object-cover "
  fill
  src={item.image ?? ""}
  alt="bg-image"
/>; */
}

export default EquipmentsBox;
