"use client"
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

    const heroRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.to(imageRef.current, {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
        gsap.to(textRef.current, {
            opacity: 0,
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
    }, [])


    return(
        <section id="hero" ref={heroRef} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
                {/* HERO & OVERLAY */}
                <div className="absolute h-screen w-full">
                <Image
                  src="/assets/works/selected-1.avif"
                  alt="hero background"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                  ref={imageRef}
                  priority
                  className="object-cover object-left"
                />
                </div>
              <div id="overlay" className="absolute inset-0 bg-black/50 z-20" />
        
              {/* CONTENTS */}
              <h1 ref={textRef} className="text-5xl tracking-[0.2em] text-white relative z-30 font-bold font-main text-center uppercase">nevara bithuka</h1>
              <div id="bottom-content" className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-10 z-30 font-inter text-white">
                <div id="bottom-left-content" className="max-w-[45%]">
                  <p className="text-xl text-shadow-2xl font-semibold">
                    Architecture and interior design studio creating purposeful spaces through thoughtful design, lasting character, and meaningful experiences.
                  </p>
                </div>
                <div id="bottom-right-content" className="flex items-center gap-10">
                  <span className="uppercase text-base flex items-center gap-1">
                    scroll down
                    <svg className="w-6 h-6 animate-bounce" fill="#ffffff" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M202.82812,146.82812l-72,72a3.99853,3.99853,0,0,1-5.65625,0l-72-72a3.99957,3.99957,0,0,1,5.65625-5.65625L124,206.34277V40a4,4,0,0,1,8,0V206.34277l65.17187-65.1709a3.99957,3.99957,0,0,1,5.65625,5.65625Z"></path> </g></svg>
                  </span>
                  <span className="text-base">Since 2008</span>
                </div>
              </div>
              </section>
    )
}