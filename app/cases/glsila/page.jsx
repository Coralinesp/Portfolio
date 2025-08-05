'use client';

import { useEffect, useState, useRef } from 'react';
import Navbar from '../../../components/navbar';
import projects from '../../../components/projects/projects';

export default function Bluebreezeweb() {
  const project = projects.find(
    (p) => p.title === 'GL SILA WEBSITE DEVELOPMENT'
  );

  const [activeSection, setActiveSection] = useState('#intro');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    handleHashChange(); // set initial
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'result', label: 'Result' },
  ];

  return (
    <div className="min-h-screen bg-[#040615] text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-10 pt-32 pb-2 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center">
          {project?.title || 'Project not found'}
        </h1>

        {project && (
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
        )}

        <div className="flex flex-col md:flex-row w-full mt-8 gap-8">
          {/* Subnavbar lateral izquierdo */}
          <nav className="md:w-1/4 w-full sticky top-32 self-start">
            <ul className="flex md:flex-col gap-4 text-sm font-medium text-gray-300">
              {sections.map((section) => {
                const isActive = activeSection === `#${section.id}`;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`flex items-center gap-2 transition-colors duration-200 ${
                        isActive ? 'text-[#385BF0]' : 'text-gray-300 hover:text-[#385BF0]'
                      }`}
                    >
                      <span className={`${isActive ? 'text-[#385BF0]' : 'text-transparent'}`}>—</span>
                      <span>{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contenido desplazable */}
          <div className="md:w-3/4 w-full flex flex-col gap-12 overflow-y-auto max-h-[80vh] custom-scroll px-2 pb-2 scroll-smooth">
            <section id="overview">
              <h2 className="text-3xl font-semibold mb-2 text-indigo-600">Overview</h2>
              <p className="text-base leading-relaxed">
                GL Sila is an exporter and distributor of avocados. I designed and developed their entire responsive website to improve online presence and facilitate customer interactions. The site aims to showcase their products clearly and provide an easy way for clients and partners to get in touch.
              </p>
              <div className='flex mt-6 justify-between w-full'>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>My Role</h1>
                  <p>Lead UX/UI Designer & Full Stack Developer</p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Project duration</h1>
                  <p>6 months</p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Tools</h1>
                  <p>Canva, Visual Studio Code</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mt-10">
                <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20 rounded-xl p-6 w-full md:w-1/2 hover:outline-[#385BF0]">
                  <h3 className="text-lg font-semibold mb-2">The problem</h3>
                  <p className="text-sm text-white/80">
                   The company needed a strong digital presence where users could easily view their products, learn about their history, and access contact information—all through a website that works smoothly across devices
                  </p>
                </div>
                <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20 rounded-xl p-6 w-full md:w-1/2 hover:outline-[#385BF0]">
                  <h3 className="text-lg font-semibold mb-2">The goal</h3>
                  <p className="text-sm text-white/80">
                   Create a responsive website that clearly showcases GL Sila’s products, company background, and contact details, ensuring a seamless experience on both desktop and mobile.
                  </p>
                </div>
              </div>
            </section>

            <section id="development" className="mt-10">
              <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Development</h2>
              <div className="flex flex-col lg:flex-row gap-10">
                  {/* Columna izquierda: texto */}
                  <div className="lg:w-2/3">
                    <p className="text-base leading-relaxed mb-4">
                      GL SILA was my first complete website project, where I took full responsibility for both the frontend and backend development within a single repository. While the code was not modularized due to my limited experience at the time, the project became a valuable hands-on learning opportunity.
                    </p>
                    <p className="text-base leading-relaxed mb-4">
                      I used React to build the interface, following a mobile-first approach to ensure the site was fully responsive across devices. The design prioritized intuitive navigation and clear presentation of the company's products and background.
                    </p>
                    <p className="text-base leading-relaxed mb-4">
                      One of the key features I implemented was a simple blog post management system, allowing the company to create and update content dynamically. This was my first time working with CRUD operations and integrating a content flow into a static website.
                    </p>
                  </div>


                {/* Columna derecha: bloque azul con stack o herramientas */}
                <div className="lg:w-1/3 bg-[#385BF0] rounded-lg p-6 shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                  <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
                    <li><span className="font-semibold">Frontend:</span> React.js, Tailwind CSS</li>
                    <li><span className="font-semibold">Design Tools:</span> Canva</li>
                    <li><span className="font-semibold">Code Editor:</span> Visual Studio Code</li>
                    <li><span className="font-semibold">Version Control:</span> Git & GitHub</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="design" className="mt-10">
              <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Home Page</h2>     
              <img
                src="/highproto5.webp"
                alt="Home Page"
                className="w-full rounded-lg shadow-lg mx-auto mb-6"
              />
              <h2 className="text-3xl font-semibold mb-6 text-indigo-600">About us</h2>     
              <img
                src="/highproto6.webp"
                alt="Home Page"
                className="w-full rounded-lg shadow-lg mx-auto mb-6"
              />
              <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Others</h2>     
              <img
                src="/highproto7.webp"
                alt="Home Page"
                className="w-full rounded-lg shadow-lg mx-auto mb-6"
              />      
            </section>

           <section id="result" className="mt-10">
              <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Result</h2>

              <p className="text-base leading-relaxed mb-6">
                The final website successfully delivered a clean, responsive, and user-friendly experience that reflects GL SILA’s brand and global reach. It allows potential partners and clients to easily explore the company’s background, products, and get in touch. The blog post system empowers the team to update content without modifying the codebase.
              </p>
              <div className="text-center mt-6">
                <a
                  href="https://glsila.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#385BF0] text-white font-semibold py-2 px-6 rounded-lg mb-6 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Visit Live Website
                </a>
              </div>
              <img
                src="/highproto8.webp"
                alt="Home Page"
                className="w-full rounded-lg shadow-lg mx-auto mb-6"
              />


            </section>


          </div>
        </div>
      </main>
    </div>
  );
}
