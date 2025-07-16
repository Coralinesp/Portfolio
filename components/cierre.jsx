'use client'

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  const handleClick = () => {
    window.location.href = '#contact'; // Cambia la acción si quieres
  };

  return (
    <section className="bg-[#040615] text-white py-16 px-6 sm:px-12 md:px-24 flex flex-col items-center text-center max-w-4xl mx-auto rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold mb-4">
        Let’s Make Something{' '}
        <span style={{ color: '#708AFB' }}>
          Awesome!
        </span>
      </h2>
      <p className="text-lg text-white/80 mb-8 max-w-xl font-light">
        I'm currently open to new professional opportunities and collaborations.
      </p>

      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-44 h-11 bg-white/5 rounded-[42px] outline outline-1 outline-offset-[-1px] outline-neutral-200/20 overflow-hidden flex items-center cursor-pointer"
      >
        <div className="absolute left-[4px] top-[3px] w-9 h-9 bg-[#708AFB] rounded-3xl overflow-hidden flex items-center justify-center">
          <ArrowRight className="text-white w-5 h-5" />
        </div>
        <div className="absolute left-[55px] top-[10px] text-white text-base font-semibold font-['Montserrat'] leading-tight">
          Get In Touch
        </div>
      </motion.div>
    </section>
  )
}
