import NavLink from "../../layout/links"
import StudioImage from "../../animation/imageReveal"
import TextReveal from "../../animation/textReveal"
import Image from "next/image"

export default function FeatWorks() {
    return (
        <section id="feat-works" className="relative w-full min-h-screen bg-white pt-10">
            <div id="1st-container" className="w-full h-screen flex justify-center items-center">
                
                <div id="left-content" className="w-full flex flex-col justify-between px-5 h-9/10">
                    <div id="left-upper-content" className="flex justify-between items-end">
                        <div id="headText" className="flex flex-col justify-center">
                            <TextReveal>
                                <h2 className="max-w-4xl text-8xl ml-5 tracking-[0.2em] font-oswald uppercase">previous</h2>
                            </TextReveal>
                            <TextReveal>
                                <h2 className="max-w-4xl text-8xl ml-5 tracking-[0.2em] font-oswald uppercase">works</h2>
                            </TextReveal>
                        </div>
                        <div id="moreBtn" className="flex items-center gap-2.5 uppercase text-xl">
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
                    <div id="left-lower-content">
                        <div className="w-full h-86 relative">
                            <StudioImage 
                                src="/assets/home/work/1.feat_work.avif"
                                alt="feat-work"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="uppercase font-semibold">Courtyard Residence</p>
                    </div>
                </div>

                <div id="right-content" className="min-w-130 h-9/10 px-5">
                    <div className="w-full h-138 relative">
                        <StudioImage 
                            src="/assets/home/work/2.feat_work.avif"
                            alt="feat-work"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                    <p className="uppercase font-semibold">Stone Ridge House</p>
                </div>

            </div>

            <div id="2nd-container" className="w-full min-h-screen flex justify-center items-center">
                <div id="right-content" className="flex flex-col justify-between items-center gap-10 w-6/10 px-10 py-4">
                    <div className="pl-40">
                        <div className="w-120 h-56 relative">
                            <StudioImage 
                                src="/assets/home/work/3.feat_work.webp"
                                alt="feat-work"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="uppercase font-semibold">Cedar Pavilion</p>
                    </div>
                    <div>
                        <div className="w-180 h-60 relative">
                            <StudioImage 
                                src="/assets/home/work/5.feat_work.avif"
                                alt="feat-work"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="uppercase font-semibold">Lightwell House</p>
                    </div>
                </div>
                
                <div id="left-content" className="w-4/10 h-full flex justify-center items-center">
                    <div>
                        <div className="w-100 h-130 relative">
                            <StudioImage 
                                src="/assets/home/work/4.feat_work.avif"
                                alt="feat-work"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="uppercase font-semibold">Northline Residence</p>
                    </div>
                </div>
            </div>

            <div id="3rd-container" className="w-full h-screen flex justify-center items-center">
                <div id="left-content" className="w-[55%] h-full flex flex-col justify-between p-5 pl-6">
                    <div id="moreBtn" className="flex items-center gap-2.5 uppercase text-xl z-50">
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
                    <p className="text-xl mb-4">From early concepts to final details, we believe strong design begins with understanding people and place. Our work aims to create architecture that feels timeless, purposeful, and quietly distinctive.</p>
                </div>
                <div id="right-content" className="w-[45%] h-full flex items-center justify-end p-5">
                    <div>
                        <div className="w-140 h-150 relative">
                            <StudioImage 
                                src="/assets/home/work/6.feat_work.avif"
                                alt="feat-work"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="uppercase font-semibold">Northline Residence</p>
                    </div>
                </div>
            </div>
        </section>
    )
}