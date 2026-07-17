"use client" 
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({children} : {children: React.ReactNode}) {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
    });

    lenis.on("scroll", ScrollTrigger.update)

    return () => {
      lenis.destroy()
    };
  }, [])

  return(
    <>{children}</>
  )
}