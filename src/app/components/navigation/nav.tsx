"use client"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavLink from "./links";
export default function Nav() {

    const pathname = usePathname();

    const styles = {
        "/": "text-white",
        "/works": "text-black",
        "/studio": "text-black"
    }

    const activeStyle = styles[pathname as keyof typeof styles] || "text-white";

    useGSAP(() => {
        gsap.to(".splitText", {
            yPercent: 50,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            repeat: -1,
            yoyo: true,
        })
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-transparent px-10 py-5">
            <nav className={clsx("flex justify-between items-center", activeStyle)}>
                <a href="#" className="relative z-20 font-oswald text-4xl tracking-[-0.2em]">NB</a>
                <ul className="uppercase font-main font-bold text-sm flex items-center gap-2 mr-5">
                    <NavLink label="home /" href="/" />
                    <NavLink label="works /" href="/works" />
                    <NavLink label="studio /" href="/studio" />
                    <NavLink label="contact" href="/contact" />
                </ul>
            </nav>
        </header>
    )
}