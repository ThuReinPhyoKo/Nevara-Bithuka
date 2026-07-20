"use client"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
    children: React.ReactNode;
}

export default function TextReveal({ children }: TextRevealProps) {
    const wrapperRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const element = textRef.current;

        if (!element) return;

        gsap.fromTo(
            element,
            { y: 100 },
            {
                y: 0,
                duration: 0.7,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 75%",
                    once: true,
                    markers: true,
                },
            }
        );
    }, []);

    return (
        <span ref={wrapperRef} className="overflow-hidden inline-block">
            <span ref={textRef} className="inline-block">
                {children}
            </span>
        </span>
    );
}