"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StudioImage({
  src,
  alt,
  className,
  sizes,
  blurDataURL,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  blurDataURL?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const img = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      img.current,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div ref={img} className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          {...(blurDataURL ? { placeholder: "blur" as const, blurDataURL } : {})}
        />
      </div>
    </div>
  );
}