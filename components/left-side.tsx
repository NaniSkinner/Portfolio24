import Image from "next/image";
import { siteConfig } from "@/config/site-config";
// import { Mail, MapPin } from "lucide-react";
import Footer from "./footer";

const LeftSide = () => {
  return (
    <div className="flex-1 w-full xl:h-full px-8 pt-8 xl:p-8 xl:max-w-md">
      <div className="flex flex-col h-full w-full rounded-md space-y-6">
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
            {siteConfig.title}
          </div>
          {/*Full Name*/}
          <h1 className="text-3xl font-bold"> {siteConfig.creator}</h1>
          {/*Bio*/}
          <p className="text-l font-light text-purple-300">{siteConfig.bio}</p>
        </div>
        {/*Buttons*/}
        <a className="px-3 py-1 border rounded-md border-purple-950 dark:border text-center">
          {siteConfig.location}{" "}
        </a>
        {/*Footer*/}
        <div className="hidden xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
