import Image from "next/image"

const fourSteps = [
    {
        title: "sketch design",
        img: "/assets/home/approach/approach1.avif",
        subImag: "",
        txt: "gg"
    },
    {
        title: "sketch design",
        img: "/assets/home/approach/approach3.avif",
        subImg: "/assets/home/approach/approach2.avif",
        txt: "gg"
    },
    {
        title: "sketch design",
        img: "/assets/home/approach/approach3.avif",
        txt: "gg"
    },
    {
        title: "sketch design",
        img: "/assets/home/approach/approach4.avif",
        txt: "gg"
    },
    {
        title: "sketch design",
        img: "/assets/home/approach/approach5.avif",
        txt: "gg"
    },
    {
        title: "sketch design",
        img: "/assets/home/approach/approach6.avif",
        txt: "gg"
    },
]

export default function Carousel() {
    return (
        <section className="w-full min-h-screen">
            <div className="absolute h-screen w-full">
                <Image
                  src="/assets/home/approach-bg.avif"
                  alt="approach background"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                  className="object-cover object-left"
                />
            </div>
        </section>
    )
}