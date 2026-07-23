"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Carousel() {

    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    

    useGSAP(() => {
        if (!containerRef.current || !contentRef.current) return;

        const totalWidth = contentRef.current.getBoundingClientRect().width
        const viewportWidth = containerRef.current.clientWidth || window.innerWidth
        const distance = totalWidth - viewportWidth

        

        gsap.to(contentRef.current, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${distance}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });
    }, []);


    return (
        <section className="min-h-screen text-white">
            <div ref={containerRef} className="overflow-hidden">
                <div id="horizontal" ref={contentRef} className="flex w-max bg-[linear-gradient(to_bottom,#232526,#414345)]">

                    <div id="content-1" className="w-max h-screen flex p-10 gap-10">
                        <div className="absolute top-10 left-20">
                            <span className="uppercase text-lg flex items-center gap-1">
                              scroll
                              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" fill="#ffffff"></path> </g></svg>
                            </span>
                        </div>
                        <div className="relative w-150 h-92 ml-10 mt-auto">
                            <Image 
                                src="/assets/home/approach/approach1.avif"
                                fill
                                alt="approach-image"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-80">
                            <h3 className="uppercase font-oswald text-5xl mb-2">1. sketch design</h3>
                            <p className="pl-2">Every project begins with ideas translated into sketches and early concepts. We explore spatial relationships, form, and functionality to establish a clear design direction.</p>
                        </div>
                    </div>

                    <div id="content-2" className="relative w-max h-screen flex p-10 items-center gap-10">
                        <div className="absolute top-5 left-0 w-40 h-56 z-40">
                            <Image 
                             src="/assets/home/approach/approach2.webp"
                             fill
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             alt="approach-image"
                            />
                        </div>
                        <div className="relative w-150 h-120">
                            <Image 
                                src="/assets/home/approach/approach3.avif"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="approach-image"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-96 flex flex-col gap-10">
                            <h3 className="uppercase font-oswald text-5xl mb-2">2. design development</h3>
                            <p className="pl-2">Concepts are refined through detailed planning and thoughtful decisions. Materials, proportions, structure, and technical considerations are developed into a cohesive architectural vision.</p>
                        </div>
                        <div className="absolute bottom-10 right-20">
                            <span className="uppercase text-lg flex items-center gap-1">
                              scroll
                              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" fill="#ffffff"></path> </g></svg>
                            </span>
                        </div>
                    </div>

                    <div id="content-3" className="w-max h-screen flex p-10 gap-10">
                        <div className="flex flex-col">
                            <h3 className="uppercase font-oswald text-5xl mb-2 mt-auto">3. interior design</h3>
                            <div className="relative w-150 h-100 mt-auto">
                                <Image 
                                    src="/assets/home/approach/approach5.avif"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt="approach-image"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="relative w-130 h-80">
                                <Image 
                                    src="/assets/home/approach/approach4.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt="approach-image"
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-110">
                                {/* <h3 className="uppercase font-main text-3xl mb-2">#3 interior design</h3> */}
                                <p className="pl-2">Interior spaces are designed to complement the architecture and enhance daily experience. We focus on atmosphere, comfort, materials, and details that create a unified environment.</p>
                            </div>
                        </div>
                    </div>

                    <div id="content-4" className="w-screen h-screen flex p-10 gap-10">
                        <div className="relative w-180 h-120">
                            <Image 
                                src="/assets/home/approach/approach6.avif"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="approach-image"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-110 flex flex-col justify-between">
                            <p className="pl-2">Detailed drawings and documentation are prepared to guide the construction process with clarity and accuracy, ensuring the design intent is carried through to completion.</p>
                            <h3 className="uppercase font-oswald text-5xl mb-2">4. construction plans + documentation</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}