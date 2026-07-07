import Image from "next/image";
import FeatStudio from "./components/sections/home/studio";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section id="hero" className="relative h-screen w-screen flex flex-col items-center justify-center">
        {/* HERO & OVERLAY */}
        <Image
          src="/assets/home/hero.avif"
          alt="hero background"
          fill
          sizes="100vw"
          quality={90}
          priority
        />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* CONTENTS */}
      <h1 className="text-5xl tracking-[0.2em] text-white relative z-20 font-bold font-main text-center uppercase">nevara bithuka</h1>
      <div id="bottom-content" className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-10 z-20 font-inter text-white">
        <div id="bottom-left-content" className="max-w-[45%]">
          <p className="text-xl text-shadow-2xl">
            Designing spaces with purpose, precision, and lasting character. Our work is grounded in material honesty and spatial clarity, where every line, surface, and opening is considered as part of a larger, lived experience.
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

      <FeatStudio />
    </main>
  );
}
