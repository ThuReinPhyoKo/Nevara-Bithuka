import NavLink from "@/app/components/layout/links";
import Image from "next/image";
import TextReveal from "@/app/components/animation/textReveal";
import StudioImage from "@/app/components/animation/imageReveal";

export default function FeatStudio() {
    return(
        <>
            <section className="relative min-h-screen w-full bg-white z-40">
                {/* SECTION HEAD */}
                <div className="flex justify-between items-end p-5  mb-5">
                    <div className="flex flex-col justify-center">
                        <TextReveal>
                            <h2 className="max-w-4xl text-8xl ml-5 tracking-[0.2em] font-oswald uppercase">designing</h2>
                        </TextReveal>
                        <TextReveal>
                            <h2 className="max-w-4xl text-8xl ml-5 tracking-[0.2em] font-oswald uppercase">with purpose</h2>
                        </TextReveal>
                    </div>
                    <div className="flex items-center gap-2.5 uppercase text-xl mr-10">
                        <NavLink id="more" label="More" href="/studio" />
                        <div className="border border-black rounded-full">
                            <Image 
                                src="/assets/svg/arrow-up-right.svg"
                                width={15}
                                height={15}
                                alt="arrow-up-right"
                                className="m-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-20 flex items-center gap-2 mb-10">
                    <div className="w-150 h-100 relative">
                        <StudioImage 
                            src="/assets/home/studio/feat-studio-1.avif"
                            alt="feat-studio-1"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-150 h-100 relative">
                        <StudioImage 
                            src="/assets/home/studio/feat-studio-2.avif"
                            alt="feat-studio-2"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mx-20 flex gap-20">
                    <div className="w-180 h-150 relative">
                        <StudioImage 
                            src="/assets/home/studio/feat-studio-3.avif"
                            alt="feat-studio-3"
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="max-w-87.5">
                            <p className="text-xl"><span className="font-medium">NEVARA BITHUKA</span> is an architecture studio focused on creating thoughtful spaces that balance function, material, and human experience. We approach every project with careful attention to proportion, light, and the relationship between architecture and its surroundings.</p>
                    </div>
                </div>
            </section>
        </>
    )
}