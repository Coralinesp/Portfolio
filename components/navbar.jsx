'use client'

import { useEffect, useState } from 'react'

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
        <div className="text-lg md:text-xl font-light uppercase">
          nino
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 font-light text-lg">
          {['Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className={`cursor-pointer transition-all duration-300 ${
                scrolled
                  ? 'hover:text-[#385BF0]'
                  : 'hover:bg-white/5 hover:px-3 hover:rounded-lg hover:outline hover:outline-[1.5px] hover:outline-white/50'
              }`}
            >
              {item}
            </a>
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
              {['Work', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#385BF0]"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
