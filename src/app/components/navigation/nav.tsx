"use client"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import NavLink from "./links";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Nav() {

    const pathname = usePathname();

    const styles = {
        "/": "text-white",
        "/works": "text-black",
        "/studio": "text-black"
    }

    const activeStyle = styles[pathname as keyof typeof styles] || "text-white";

    useGSAP(() => {
        gsap.from("#logo", {
            y: 50,
            opacity: 0,
        })
        
        gsap.from("#links", {
            y: 20,
            opacity: 0,
            stagger: 0.1
        })
    }, [])

    return (
        <header className="absolute top-0 left-0 right-0 z-50 w-full h-20 bg-transparent px-10 py-5">
            <nav className={clsx("flex justify-between items-center", activeStyle)}>
                <a id="logo" href="#" className="relative z-20 font-oswald text-4xl tracking-[-0.2em]">NB</a>
                <ul className="uppercase font-main font-bold text-sm flex items-center gap-2 mr-5">
                    <NavLink id="links" label="home /" href="/" />
                    <NavLink id="links" label="works /" href="/works" />
                    <NavLink id="links" label="studio /" href="/studio" />
                    <NavLink id="links" label="contact" href="/contact" />
                </ul>
            </nav>
        </header>
    )
}