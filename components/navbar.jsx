'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/#contact' }
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040615]/80 backdrop-blur-md shadow-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 py-6 flex justify-between items-center text-white">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-light uppercase cursor-pointer">
          nino
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 font-light text-lg">
          {menuItems.map(({ label, href }) => (
            <Link key={label} href={href}>
              <span
                className={`cursor-pointer transition-all duration-300 ${
                  scrolled
                    ? 'hover:text-[#385BF0]'
                    : 'hover:bg-white/5 hover:px-3 hover:rounded-lg hover:outline hover:outline-[1.5px] hover:outline-white/50'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative z-40">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h20M4 14h20M4 22h20" />
              </svg>
            )}
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-40 bg-[#040615] border border-white/20 rounded-lg shadow-lg flex flex-col gap-3 py-4 px-6 z-30">
              {menuItems.map(({ label, href }) => (
                <Link key={label} href={href} onClick={() => setIsOpen(false)}>
                  <span className="cursor-pointer transition-colors duration-300 hover:text-[#385BF0]">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
