"use client";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Footer from "./footer";

const LeftSide = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/*Avatar*/}
      <div>
        <div>
          <Image
            className="rounded-3xl"
            src="/pfp.png"
            width="120"
            height="120"
            alt="Nani Skinner PFP"
            priority
            loading="eager"
          />
        </div>
        {/* Text Container */}
        <div className="mt-6">
          <div className="text-xl font-medium text-purple-700">
            {siteConfig.title}
          </div>
          <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
          <p className="mt-4 text-lg font-light text-neutral-500">
            {siteConfig.bio}
          </p>
        </div>
        {/*Buttons*/}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={`${siteConfig.locationLink}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <Mail size="12" />
            Contact Me
          </a>
        </div>
        {/*Footer*/}
        <div className="hidden xl:flex text-neutral-700 tex-sm mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
