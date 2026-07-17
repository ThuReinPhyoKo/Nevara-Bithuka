"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import useLockBodyScroll from "@/app/hook/scrollLock"
import Image from "next/image"
import { CircleSmall } from "lucide-react"

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
]

type menuProps = {
  showMenu: boolean;
}

export default function Menu({showMenu} : menuProps) {
  
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Array<HTMLSpanElement | null>>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useLockBodyScroll(isMenuOpen)

  useGSAP(
    () => {
      if (!overlayRef.current || !imageRef.current || !panelRef.current) return

      gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: "none" })
      gsap.set(imageRef.current, { xPercent: -100, opacity: 0 })
      gsap.set(panelRef.current, { yPercent: -100, autoAlpha: 0, opacity: 0 })
      gsap.set(linkRefs.current, { y: 40, autoAlpha: 0, opacity: 0 })

      timelineRef.current = gsap.timeline({ paused: true })
        .set(overlayRef.current, { pointerEvents: "auto" })
        .to(overlayRef.current, { autoAlpha: 1, opacity: 1, duration: 0.25, ease: "power2.out" })
        .to(imageRef.current, { xPercent: 0, opacity: 1, duration: 0.85, ease: "expo.inOut" }, 0)
        .to(panelRef.current, { yPercent: 0, opacity: 1, autoAlpha: 1, duration: 0.85, ease: "expo.inOut" }, 0.1)
        .to(linkRefs.current, { y: 0, opacity: 1, autoAlpha: 1, duration: 0.45, stagger: 0.08, ease: "power3.out" }, 0.72)

      timelineRef.current.eventCallback("onReverseComplete", () => {
        gsap.set(overlayRef.current, { pointerEvents: "none", autoAlpha: 0 })
        gsap.set(imageRef.current, { xPercent: -100 })
        gsap.set(panelRef.current, { yPercent: -100, autoAlpha: 0 })
        gsap.set(linkRefs.current, { y: 40, autoAlpha: 0 })
      })
    },
    { scope: containerRef },
  )

  useEffect(() => {
    if (!timelineRef.current) return

    if (isMenuOpen) {
      timelineRef.current.play(0)
    } else {
      timelineRef.current.reverse()
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  console.log("Menu Open:", isMenuOpen);

  return (
    <div ref={containerRef} className={` fixed w-screen h-20 top-0 z-45 transition-all duration-300`}>
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Open navigation menu"
        className={`${showMenu ? "opactiy-100" : "opacity-0"} group absolute top-10 right-5 z-50 flex px-2.5 py-1.5 uppercase items-center justify-center rounded-full text-white border border-white/20 bg-black backdrop-blur-sm transition-all duration-300 hover:bg-black/70 cursor-pointer`}
      >
        <CircleSmall className="group-hover:fill-white group-hover:scale-75 transition-all duration-300" size={15} /> menu
      </button>

      <div ref={overlayRef} className="pointer-events-none fixed inset-0 z-60 w-full bg-black/85 opacity-0">
        <div className="flex h-screen w-screen flex-col lg:flex-row">
          <div ref={imageRef} className="relative hidden h-screen w-4/6 lg:block">
            <Image 
              src="/assets/nav&contact/nav.avif" 
              alt="nav-image" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <p className="absolute top-8 left-8 text-xl font-main uppercase tracking-[0.4em] text-white">
              nevara bithuka
            </p>
            <p className="absolute bottom-8 left-8 text-[11px] font-inter text-white sm:text-xs">
              Developed By <a href="https://thureinphyoko.com/" target="_blank" rel="noopener noreferrer" className="underline">Thu Rein Phyo Ko / Ryan</a>
            </p>
          </div>

          <div ref={panelRef} className="h-full w-2/6 bg-[#050505] p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.4em] text-muted-light">Menu</span>
              <button
                type="button"
                onClick={closeMenu}
                className="text-sm uppercase tracking-[0.25em] text-muted-light transition hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col justify-between h-full py-5">
            <nav className="flex flex-col justify-center gap-4 py-5">
              {menuLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group w-fit"
                >
                  <span
                    ref={(element) => {
                      linkRefs.current[index] = element
                    }}
                    className="block"
                  >
                    <span className="block text-4xl font-main font-bold uppercase tracking-[-0.04em] text-white transition duration-300 group-hover:translate-x-4">
                      {item.label}
                    </span>
                  </span>
                </Link>
              ))}
            </nav>

            <p className="text-xs text-muted-light">
                [ INFO ]<br/>
                27 Axis Street, Maidenpool 1357<br/>
                studio@naverabithuka.example<br/>
                +00 (01) 5550 1234<br/>
                Monday to Friday, 8:30 am - 5:00 pm
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}