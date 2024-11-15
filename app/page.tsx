import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const GridItems = new Array(12).fill(0);
const GridItems2 = [
  {
    className: "rounded-md bg-emerald-100- col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-1 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-1 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-2 row-span-4",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1  w-full h-full gap-10 ">
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
          {GridItems2.map((item, index) => {
            return <div key={index} className={item.className} />;
          })}
        </div>
      </div>
    </main>
  );
}
