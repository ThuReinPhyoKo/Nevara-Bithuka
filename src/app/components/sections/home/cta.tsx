import Image from "next/image"
import { CircleSmall } from "lucide-react"
import TextReveal from "../../animation/textReveal"

export default function CTA() {
    return (
        <section className="relative w-full h-screen bg-black flex flex-col items-center">

            <div className="relative w-max h-3/5 flex gap-10 pt-5">
                <h3 className="absolute bottom-0 text-white z-50 uppercase font-oswald text-6xl text-center">tell us about your project</h3>
                <div className="relative w-50 h-80">
                    <Image 
                        src="/assets/home/cta/cta-1.avif"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="CTA-image"
                        className="object-cover"
                    />
                </div>
                <div className="relative w-50 h-80 mt-auto">
                    <Image 
                        src="/assets/home/cta/cta-2.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="CTA-image"
                        className="object-cover"
                    />
                </div>
                <div className="relative w-50 h-80">
                    <Image 
                        src="/assets/home/cta/cta-3.avif"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="CTA-image"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-2xl text-center p-5">
                <p className="text-white text-lg mb-5">Have a project, idea, or vision in mind? We collaborate closely with clients to transform concepts into meaningful spaces that combine function, identity, and lasting design value.</p>
                <button className="group m-auto flex justify-center items-center transition-all duration-300 uppercase bg-muted-light hover:bg-black hover:text-white border border-white rounded-full py-2 px-5 cursor-pointer">
                    <CircleSmall className="group-hover:fill-white group-hover:scale-65 transition-all duration-300" size={15} /> start a chat with us
                </button>
            </div>

            <div className="absolute -left-9 bottom-32 w-60 h-46 -rotate-15">
                <Image 
                    src="/assets/home/cta/cta-4.avif"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="CTA-image"
                    className="object-cover opacity-50"
                />
            </div>
            <div className="absolute right-20 bottom-42 w-38 h-56 rotate-20">
                <Image 
                    src="/assets/home/cta/cta-5.avif"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="CTA-image"
                    className="object-cover opacity-65"
                />
            </div>
        </section>
    )
}