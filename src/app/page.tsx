'use client'
import OurApproach from "./components/sections/home/our-approach";
import FeatWorks from "./components/sections/home/feat-works";
import FeatStudio from "./components/sections/home/feat-studio";
import Hero from "./components/sections/home/home-hero";
import Menu from "./components/navigation/menu";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "./components/sections/home/carousel";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [ showMenu, setShowMenu ] = useState(false);
  const featStudioRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: featStudioRef.current,
      start: "top 25%",

      onEnter: () => {
        console.log("ENTER");
        setShowMenu(true);
      },

      onLeaveBack: () => {
        console.log("LEAVE BACK");
        setShowMenu(false);
      },
    });
  }, []);


  return (
    <main className="relative">
      <Hero />
      <Menu showMenu={showMenu} />
      <div ref={featStudioRef} className="w-auto h-auto">
        <FeatStudio />
      </div>
      <FeatWorks />
      <OurApproach />
      <Carousel />
    </main>
  );
}
