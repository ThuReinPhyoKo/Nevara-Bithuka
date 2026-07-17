// components/NavLink.tsx
'use client'

import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'

type NavLinkProps = {
  label: string,
  href: string,
  id: string,
}

export default function NavLink({ label, href, id }: NavLinkProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  const enter = () => {
    gsap.to(textRef.current, {
      yPercent: -50,
      duration: 0.5,
      ease: 'expo.out',
    })
  }

  const leave = () => {
    gsap.to(textRef.current, {
      yPercent: 0,
      duration: 0.5,
      ease: 'power3.out',
    })
  }

  return (
    <Link
      href={href}
      id={id}
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="inline-block"
    >
      <span className="block h-[1em] overflow-hidden leading-none">
        <span
          ref={textRef}
          className="flex flex-col"
        >
          <span>{label}</span>
          <span>{label}</span>
        </span>
      </span>
    </Link>
  )
}