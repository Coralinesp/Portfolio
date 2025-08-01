'use client';
import { useState } from 'react';
import Navbar from "../components/navbar";
import Image from "next/image";
import circleImage from "../public/Gradient.png";
import { ChevronDown, ArrowUpRight  } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSplitText from '../components/AnimatedSplitText';
import Skills from '../components/skills'
import Services from '../components/services'
import SelectedWorks from '../components/works'
import CallToAction from '../components/cierre'
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#040615] relative overflow-x-hidden overflow-y-auto">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-1/2 pointer-events-none overflow-hidden z-0 w-[600px] sm:w-[900px] md:w-[1200px] lg:w-[1600px] xl:w-[1800px] -translate-x-1/2" style={{ aspectRatio: "1512 / 542", opacity: 0.8 }}>
        <Image
          src={circleImage}
          alt="Círculo decorativo"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          quality={100}
          draggable={false}
        />
      </div>
      {/* Hero section */}
      <div className="flex flex-col items-center h-full z-10 mt-56 mb-16 sm:mb-40 md:mb-64 lg:mb-72 xl:mb-36 gap-2 sm:gap-6 md:gap-3">
        <div className="text-center text-white font-bold text-[25px] sm:text-[48px] md:text-[64px] max-w-[90vw] sm:max-w-[492px] mx-auto h-auto leading-tight">
          Caroline Pérez
        </div>
        <div className="text-center text-white font-normal leading-normal text-xs sm:text-lg md:text-xl max-w-[90vw] sm:max-w-[480px] mx-auto">
          UX/UI Designer · Frontend Developer · 3D Artist <br />
          Based in Dominican Republic
        </div>

        {/* arrow */}
        <div className="mt-10 sm:mt-20 md:mt-40 lg:mt-48 xl:mt-56 text-white animate-bounce">
          <ChevronDown size={32} strokeWidth={2} />
        </div>
      </div>
      {/* Sección about me */}
      <div className="w-full flex flex-col px-6 sm:px-12 md:px-24 lg:px-48 min-h-[300px] sm:min-h-[400px] justify-start items-center text-center">
        <AnimatedSplitText onAnimationEnd={() => setShowButton(true)} />

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-64 h-11 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-[42px] overflow-hidden cursor-pointer"
            >
              <div className="absolute left-[4px] top-[3px] w-9 h-9 bg-white rounded-3xl overflow-hidden flex items-center justify-center">
                <ArrowUpRight className="text-blue-600 w-5 h-5" />
              </div>
              <div className="absolute left-[55px] top-[10px] text-white text-base font-semibold font-['Montserrat'] leading-tight">
                Know More About Me
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      {/*skills */}
      <div className='mb-28 sm:mb-48'> 
        <Skills />
      </div>
       {/*Services */}
      <div className='mb-20'> 
        <Services />
      </div>
       {/*Works */}
      <div id="work" className='mb-20'> 
        <SelectedWorks  />
      </div>
       {/*Cierre */}
      <div id="contact" className='mb-16'> 
        <CallToAction  />
      </div>
      {/* Footer */}
    <div className="w-full px-6 sm:px-12 lg:px-44 flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mb-5 shadow-md rounded-md text-white bg-[#040615]">
      {/* Lado izquierdo: Correo */}
      <a
        href="mailto:perezcruzcaroline@gmail.com"
        className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm sm:text-base"
      >
        <MdEmail className="w-5 h-5" />
        <span>perezcruzcaroline@gmail.com</span>
      </a>

      {/* Lado derecho: Follow Me */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="font-semibold text-sm sm:text-base">Follow Me!</span>

        <a
          href="https://www.linkedin.com/in/caroline-ninoska-perez-cruz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
        </a>

        <a
          href="https://www.behance.net/carolineperez7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance className="w-5 h-5 hover:text-blue-500 transition-colors" />
        </a>

        <a
          href="https://www.instagram.com/coralinessp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
        </a>
      </div>
    </div>
    </div>
  );
}
