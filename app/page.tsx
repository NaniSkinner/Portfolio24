// import Image from "next/image";
// import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-1  w-full h-full gap-10 ">
      {/* Left Side */}
      <div className="flex-1 p-6 h-full max-w-md">
        <div className="flex items-center justify-center h-full rounded-md dark:bg-emerald-700">
          Left Side
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 p-6 h-full">
        <div className="flex items-center justify-center h-full rounded-md dark:bg-emerald-700">
          Right Side
        </div>
      </div>
    </main>
  );
}
