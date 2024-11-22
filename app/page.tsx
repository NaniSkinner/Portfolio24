import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import GridItem from "@/components/grid-item";
import SocialBox from "@/components/grid-items/social-box";
import MentorshipBox from "@/components/grid-items/mentorship-box";
import ProjectBox from "@/components/grid-items/project-box";
import EquipmentsBox from "@/components/grid-items/equipments-box";

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      {/* Left Side */}
      <div className="flex-1 h-full max-w-md p-8">
        <div className="flex flex-col h-full rounded-md space-y-6">
          {/*Avatar*/}

          <Image
            src="/img_5945.png"
            width="120"
            height="120"
            alt="Nani Skinner PFP"
            priority
            loading="eager"
          />
          {/*Content Container*/}
          <div>
            {/*Title*/}
            <div className="text-purple-900 text-xl font-semibold">
              {" "}
              {siteConfig.title}
            </div>
            {/*Full Name*/}
            <h1 className="text-3xl font-bold"> {siteConfig.creator}</h1>
            {/*Bio*/}
            <p className="text-l font-light text-purple-300">
              {siteConfig.bio}
            </p>
          </div>
          {/*Buttons*/}
          <a className="px-3 py-1 border rounded-md border-purple-950 dark:border text-center">
            {siteConfig.location}{" "}
          </a>
          {/*Footer*/}
          <div className="pt-6 text-xs border-t border-neutral-200 dark:border-neutral-800 p-6 flex items-center justify-between">
            <div>Built by Nani Skinner @naniskinner | 2024</div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 p-6 h-full">
        {/*Grid Container */}
        <div className=" w-full h-full overflow-auto p-6 grid grid-cols-4 auto-row-[76px] gap-10">
          {/*Gid Items*/}
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <SocialBox item={item} />
                ) : item.type === "mentor" ? (
                  <MentorshipBox item={item} />
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
      </div>
    </main>
  );
}
