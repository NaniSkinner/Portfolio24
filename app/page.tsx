import Footer from "@/components/footer";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";

export default function Home() {
  return (
    <main className="flex flex-col xl:flex-row flex-1 w-full h-full gap-6 xl:gap-10">
      {/* Left Side */}
      <LeftSide />
      {/* Right Side */}
      <RightSide />
      {/* Footer */}
      <div className="hidden xl:hidden px-8 pb-10 w-full">
        <Footer />
      </div>
    </main>
  );
}
