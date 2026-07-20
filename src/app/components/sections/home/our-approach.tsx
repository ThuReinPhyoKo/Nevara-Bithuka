"use client"
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach() {

    const containerRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.to(imageRef.current, {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
        gsap.to(textRef.current, {
            y: -500,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
    }, [])


    return(
        <section id="hero" ref={containerRef} className="sticky top-0 h-screen w-full flex flex-col justify-between">
            <div className="absolute h-screen w-full">
                <Image
                  src="/assets/home/approach.avif"
                  alt="approach background"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                  ref={imageRef}
                  className="object-cover object-left"
                />
            </div>
            <div id="overlay" className="absolute inset-0 bg-black/60 z-20" />

            <div className="p-5">
                <h2 className="text-8xl tracking-[0.2em] text-white relative z-30 font-oswald uppercase">Our</h2>
                <h2 className="text-8xl tracking-[0.2em] text-white relative z-30 font-oswald uppercase">four step</h2>
                <h2 className="text-8xl tracking-[0.2em] text-white relative z-30 font-oswald uppercase">approach</h2>
            </div>
            
            <p ref={textRef} className="max-w-2xl text-white text-xl font-inter z-30 p-5 mb-3.5 ml-auto">A clear and structured process guides every project, from the first concept sketch to detailed documentation, ensuring thoughtful design and a seamless journey from idea to built form.</p>

            
        </section>
    )
}