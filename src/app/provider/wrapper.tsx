"use client"
import { useRef } from "react"
import Menu from "../components/layout/menu"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function MenuButton() {
  const menuRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const element = menuRef.current
    const trigger = document.getElementById("feat-section")

    if (!element || !trigger) return

    gsap.set(element, { autoAlpha: 0, y: 24, pointerEvents: "none" })

    const sectionTrigger = ScrollTrigger.create({
      trigger,
      start: "top 50%",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => {
        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          pointerEvents: "auto",
        })
      },
      onLeaveBack: () => {
        gsap.to(element, {
          autoAlpha: 0,
          y: 24,
          duration: 0.25,
          ease: "power2.out",
          pointerEvents: "none",
        })
      },
    })

    return () => sectionTrigger.kill()
  }, [])

  return (
    <div ref={menuRef}>
      {/* <Menu /> */}
    </div>
  )
}