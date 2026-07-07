import NavLink from "@/app/components/navigation/links";
import Image from "next/image";

export default function FeatStudio() {
    return(
        <>
            <section className="h-auto w-full">
                {/* SECTION HEAD */}
                <div className="flex justify-between items-end p-5  mb-5">
                    <h2 className="max-w-4xl text-8xl ml-5 tracking-[0.2em] font-oswald uppercase">designing <br/>with purpose</h2>
                    <div className="flex items-center gap-2.5 uppercase text-xl mr-10">
                        <NavLink label="More" href="/studio" />
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
                        <Image 
                            src="/assets/home/studio/feat-studio-1.avif"
                            fill
                            alt="feat-studio-1"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-150 h-100 relative">
                        <Image 
                            src="/assets/home/studio/feat-studio-2.avif"
                            fill
                            alt="feat-studio-2"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mx-20 flex gap-20">
                    <div className="w-180 h-150 relative">
                        <Image 
                            src="/assets/home/studio/feat-studio-3.avif"
                            fill
                            alt="feat-studio-3"
                            className="object-cover"
                        />
                    </div>
                    <div className="max-w-87.5">
                        <p className="text-xl"><span className="font-medium">NAVERA BITHUKA</span> is an architecture studio focused on creating thoughtful spaces that balance function, material, and human experience. We approach every project with careful attention to proportion, light, and the relationship between architecture and its surroundings.</p>
                    </div>
                </div>
            </section>
        </>
    )
}