'use client'

import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const handleClick = () => {
    window.location.href = 'mailto:perezcruzcaroline@gmail.com';
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const gradientStyle = {
    background:
      'radial-gradient(circle at center, rgba(112, 138, 251, 0.15) 15%, transparent 40%)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '1rem',
    pointerEvents: 'none',
    zIndex: 0,
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[480px] bg-[#040615] text-white py-16 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center max-w-4xl mx-auto rounded-xl shadow-lg"
    >
      <div aria-hidden="true" style={gradientStyle} />

      <h2 className="relative text-3xl sm:text-4xl font-bold mb-4 z-10">
        Let’s Make Something{' '}
        <span style={{ color: '#708AFB' }}>
          Awesome!
        </span>
      </h2>
      <p className="relative px-4 text-sm sm:text-lg text-white/80 mb-8 max-w-xl font-light z-10">
        I'm currently open to new professional opportunities and collaborations.
      </p>

      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-44 h-11 bg-white/5 rounded-[42px] outline outline-1 outline-offset-[-1px] outline-neutral-200/20 overflow-hidden flex items-center cursor-pointer z-10"
      >
        <div className="absolute left-[4px] top-[3px] w-9 h-9 bg-[#708AFB] rounded-3xl overflow-hidden flex items-center justify-center">
          <ArrowRight className="text-white w-5 h-5" />
        </div>
        <div className="absolute left-[55px] top-[10px] text-white text-base font-semibold font-['Montserrat'] leading-tight">
          Get In Touch
        </div>
      </motion.div>
    </motion.section>
  )
}
