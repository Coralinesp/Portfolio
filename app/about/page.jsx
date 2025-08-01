'use client';

import Navbar from '../../components/navbar';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040615] text-white overflow-x-hidden overflow-y-auto">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-32 max-w-7xl mx-auto px-6">
        {/* About Me Text */}
        <div className="w-full md:w-3/5 pr-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">A LITTLE ABOUT ME</h1>
          <div className="flex items-center gap-2 text-[#4c68e4] mb-6">
            <MapPin size={18} />
            <span className="text-sm sm:text-base">Based in Dominican Republic</span>
          </div>
          <p className="text-base leading-relaxed text-white/80 mb-8">
            Hi, I’m <span className="text-[#4c68e4] font-semibold">Caroline Perez</span>, but most people call me Nino. 
          </p>
          <p className="text-base leading-relaxed text-white/80 mb-8">
            I’m a certified UX/UI designer and frontend developer currently studying Software Engineering. 
            Before this, I studied Electronics in high school while teaching myself 3D modeling using Blender. 
            Those early experiences fueled my passion for combining creativity with technology.
            Over the years, I’ve taken on all kinds of small jobs and gigs to support myself and keep growing. It hasn’t always been easy, 
            but each step taught me something valuable.
          </p>
          <p className="text-base leading-relaxed text-white/80 mb-8">
            I’m naturally a bit shy and reserved, but I’m also hardworking and love to learn. I focus on crafting simple, clean, and meaningful digital experiences that truly help people.
          </p>
          <p className="text-base leading-relaxed text-white/80 mt-10">
            Thanks for visiting my profile. I’m excited to keep learning, growing, and creating.
          </p>
        </div>

        {/* Image + Resume Button */}
        <div className="w-full md:w-2/5 flex flex-col mt-10 items-center justify-center">
          <div
            className="bg-white p-4 shadow-[0_4px_25px_rgba(0,0,0,0.3)] max-w-[300px] transition-transform duration-300 ease-in-out hover:scale-105 rotate-[10deg]"
          >
            <Image
              src="/Me.webp"
              alt="Caroline Perez"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1QkotErsEHBU_dhC4pzKbBhambIynHJ3u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-20 bg-white/5 text-white text-sm px-6 py-2 rounded-[24px] outline outline-[1.5px] outline-neutral-200/20 hover:bg-white/10 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Resume */}
      <div className="w-full px-10 md:px-32 mt-10 mb-5">
      <div className="flex flex-col md:flex-row gap-10">
          
          {/* Education */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Education</h2>
            <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between items-start">
                {/* Imagen a la izquierda */}
                <div className="flex-shrink-0 mr-4">
                  <img
                    src="/certificate.webp"
                    alt="Google UX Certificate"
                    className="w-12 h-auto "
                  />
                </div>

                {/* Info en el centro */}
                <div className="flex-1 mt-2">
                  <h3 className="text-base font-medium text-white">Google UX Design</h3>
                  <p className="text-sm text-[#4c68e4]">Coursera · Online Certificate</p>
                </div>

                {/* Fecha a la derecha */}
                <div className="flex-shrink-0 ml-4 ">
                  <p className="text-xs text-white/40">Jun 30, 2025</p>
                </div>
              </div>
            </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-medium text-white">Software Engineering</h3>
                    <p className="text-sm text-[#4c68e4]">UNAPEC</p>
                  </div>
                  <p className="text-xs text-white/40">2023 - Present</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-medium text-white">Electronics (High School)</h3>
                    <p className="text-sm text-[#4c68e4]">Instituto Politécnico Loyola</p>
                  </div>
                  <p className="text-xs text-white/40">2019 - 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Experience</h2>
              <div className="space-y-4">
                
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium text-white">Freelance UX/UI & 3D Designer & Frontend Developer</h3>
                      <p className="text-sm text-[#4c68e4]">Multiple clients</p>
                    </div>
                    <p className="text-xs text-white/40">2021 - Present</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium text-white">UX/UI Designer - Figma Prototype</h3>
                      <p className="text-sm text-[#4c68e4]">Ben Barber Supply Inc.</p>
                    </div>
                    <p className="text-xs text-white/40">Mar 2025</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium text-white">Website Developer - React</h3>
                      <p className="text-sm text-[#4c68e4]">GL SILA</p>
                    </div>
                    <p className="text-xs text-white/40">Jan-April 2025</p>
                  </div>
                </div>

              </div>
            </div>

        </div>
      </div>
      
      {/* Beyond Work */}
      <div className="w-full px-10 md:px-32 mt-20 mb-20">
        
        <div className="flex flex-col md:flex-row items-start gap-10">
          
          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
              <div
                className="bg-white p-4 shadow-[0_4px_25px_rgba(0,0,0,0.3)] max-w-[300px] transition-transform duration-300 ease-in-out hover:scale-105 rotate-[-10deg]"
              >
                <Image
                  src="/Swim.webp"
                  alt="Swimming Pool"
                  width={300}
                  height={300}
                  className="object-cover"
                  priority
                />
              </div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 space-y-6 text-white/80">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Beyond Work</h2>
              <p className="text-base leading-relaxed">
                Outside of work and study, I'm an athlete with over six years of swimming experience — 
                a sport that has taught me discipline, patience, and persistence.
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed">
                I'm passionate about continuous learning and staying up-to-date with the latest design 
                trends and development technologies. I believe in the power of combining creativity 
                with technical skills to create meaningful digital experiences.
              </p>
              <p className="text-base leading-relaxed mt-4">
                When I'm not coding or designing, you can find me exploring new 3D modeling techniques, 
                working on personal projects just for fun, or simply enjoying some time playing video games and relaxing.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
