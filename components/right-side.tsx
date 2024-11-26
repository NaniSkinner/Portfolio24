"use client";
import { siteConfig } from "@/config/site-config";
import GridItem from "./grid-item";
import SocialBox from "@/components/grid-items/social-box";
import ProjectBox from "@/components/grid-items/project-box";
import EquipmentsBox from "@/components/grid-items/equipments-box";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const RightSide = () => {
  const [scope, animate] = useAnimate();
  const staggerDelay = stagger(0.02);

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          duration: 0.15,
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerDelay,
        }
      );
    }
  }, [scope]);

  return (
    <div
      ref={scope}
      className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 xl:overflow-y-auto auto-rows-[76px]"
    >
      {siteConfig.items.map((item, index) => {
        return (
          <GridItem key={item.title + item.type + index} size={item.layout}>
            {item.type === "social" ? (
              <SocialBox item={item} />
            ) : item.type === "project" ? (
              <ProjectBox item={item} />
            ) : item.type === "equipment" ? (
              <EquipmentsBox item={item} />
            ) : (
              <div>Not implemented yet</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default RightSide;
