'use client';

import { useEffect, useState, useRef } from 'react';
import Navbar from '../../../components/navbar';
import projects from '../../../components/projects/projects';

export default function Bluebreezeweb() {
  const project = projects.find(
    (p) => p.title === 'DESIGN A RESPONSIVE WEBSITE FOR A CAFE'
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
    { id: 'research', label: 'Research' },
    { id: 'define', label: 'Define' },
    { id: 'ideate', label: 'Ideate' },
    { id: 'prototype', label: 'Prototype' },
    { id: 'test', label: 'Test' },
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
                Blue & Breeze is a conceptual café for which I designed a responsive website for a local café to improve user experience and boost online orders. Target users: young professionals and loyal customers seeking a quick and intuitive way to order or reserve.
              </p>
              <div className='flex mt-6 justify-between w-full md:w-2/3 '>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>My Role</h1>
                  <p>Lead UX Designer</p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Project duration</h1>
                  <p>6 months</p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Tools</h1>
                  <p>Figma</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mt-10">
                <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20 rounded-xl p-6 w-full md:w-1/2 hover:outline-[#385BF0]">
                  <h3 className="text-lg font-semibold mb-2">The problem</h3>
                  <p className="text-sm text-white/80">
                   Customers needed a faster and easier way to interact with the café through a website that works well on any device, without struggling with a slow or hard-to-use site.
                  </p>
                </div>
                <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20 rounded-xl p-6 w-full md:w-1/2 hover:outline-[#385BF0]">
                  <h3 className="text-lg font-semibold mb-2">The goal</h3>
                  <p className="text-sm text-white/80">
                   Design a responsive website that lets customers quickly browse the menu, place orders, and get information seamlessly from desktop or mobile.
                  </p>
                </div>
              </div>
            <div className="flex flex-col items-center mt-12 px-6">
              <h3 className="text-2xl font-bold mb-6 text-white">The Process</h3>
              <div className="flex flex-wrap justify-center gap-3 w-full max-w-5xl">
                {["Empathize", "Define", "Ideate", "Prototype", "Test"].map((step, index, arr) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl shadow-md hover:scale-105 transition-transform text-white text-base font-semibold min-w-[110px] text-center">
                      {step}
                    </div>
                    {index < arr.length - 1 && (
                      <span className="text-white/40 text-3xl">➔</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </section>

            <section id="research" className="mt-10">
              <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Understanding the user</h2>
              
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Columna izquierda: texto */}
                <div className="lg:w-2/3">
                  <p className="text-base leading-relaxed mb-4">
                   To better understand how users interact with café websites, I conducted qualitative interviews with a diverse group of participants, including café regulars, university students, and busy professionals who often browse and order online using their phones. These conversations helped validate assumptions and uncover deeper needs that go beyond visual design.
                  </p>
                  <p className="text-base leading-relaxed">
                   Initially, I assumed users mainly wanted a clean, responsive interface optimized for mobile devices. However, the research revealed more specific expectations. Participants emphasized the importance of quickly finding key information—such as menu items, opening hours, table reservations, and ongoing promotions. Many expressed frustration when contact details or booking options were buried or hard to access.
                  </p>
                </div>

                {/* Columna derecha: bloque azul con goals */}
                <div className="lg:w-1/3 bg-[#385BF0] rounded-lg p-6 shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Research Goals</h3>
                  <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
                    <li>
                      <span className="font-semibold">Validate Assumptions:</span> Understand whether users truly prioritize speed and ease of ordering.
                    </li>
                    <li>
                      <span className="font-semibold">Identify Pain Points:</span> Discover frustrations users face with current food delivery experiences.
                    </li>
                    <li>
                      <span className="font-semibold">Uncover Hidden Needs:</span> Reveal expectations such as personalization and real-time tracking.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Questions*/}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-indigo-600 mb-6">Key Questions</h2>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Card 1 */}
                  <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20 hover:outline-[#385BF0] rounded-xl p-5 w-full lg:w-1/3 shadow-sm">
                    <p className="text-lg text-white/90 leading-relaxed">
                      What challenges do users face when trying to interact with the café online?
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20 hover:outline-[#385BF0] rounded-xl p-5 w-full lg:w-1/3 shadow-sm">
                    <p className="text-lg text-white/90 leading-relaxed">
                      What kind of information do users expect to find quickly on a café’s website?
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20 hover:outline-[#385BF0] rounded-xl p-5 w-full lg:w-1/3 shadow-sm">
                    <p className="text-lg text-white/90 leading-relaxed">
                     How do users currently discover offers or make decisions about visiting or ordering from the café?
                    </p>
                  </div>
                </div>
              </div>
              {/* Pain Points*/}
              <div className="mt-20">
                <h2 className="text-xl font-semibold text-indigo-600 mb-6">
                  This is what I found (Pain Points)
                </h2>
                <div className="flex flex-col md:flex-row gap-6 text-white">
                  {[
                    {
                      title: 'No menu visibility',
                      description:
                        'Customers had no easy way to view the café’s menu or offerings online. Without quick access to the menu, many felt unsure about what the café actually served or if it suited their tastes.',
                    },
                    {
                      title: 'No digital presence for promotions',
                      description:
                        'The lack of an online presence made it difficult for the café to promote offers or seasonal specials. Customers weren’t aware of ongoing deals, which reduced engagement and visit frequency.',
                    },
                    {
                      title: 'Missing essential info',
                      description:
                        'Important details like opening hours, location, and contact information were hard to find. This led to confusion and friction when customers tried to plan a visit or get in touch.',
                    },
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="bg-indigo-600 rounded-2xl shadow-lg p-6 flex-1 flex flex-col gap-4"
                    >
                      {/* Número en círculo blanco */}
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-indigo-600 font-bold text-lg select-none">
                        {index + 1}
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-semibold">{point.title}</h3>

                      {/* Descripción */}
                      <p className="text-sm text-white/90 leading-relaxed">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="define" className="mt-10">
              <h2 className="text-3xl font-semibold mb-6 text-indigo-600">User Persona</h2>     
              <img
                src="/Persona2.webp"
                alt="User Persona"
                className="w-full rounded-lg shadow-lg mx-auto"
              />
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-indigo-600 mb-6">Problem statement</h2>
                <p className="text-base leading-relaxed">
                  Luis is a busy young professional who needs a website that lets him quickly check the menu, hours, and current deals because he often makes decisions on the go and doesn’t have time to dig through a complicated layout.
              </p>
              </div>
            </section>

            <section id="ideate" className="mt-10">
              <h2 className="text-3xl font-semibold mb-8 text-indigo-600">Ideation</h2>

              {/* INTRODUCCIÓN + BLOQUE DESTACADO */}
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-2/3">
              <p className="text-base leading-relaxed text-white/90">
                 Drawing from the research findings, I started generating ideas to address the main challenges users faced on the website through visual brainstorming and flowchart creation. This stage encouraged a methodical yet creative approach, enabling me to quickly iterate on concepts before finalizing designs. I crafted a detailed user flow to map out how visitors navigate the site—exploring menus, finding opening hours, and discovering promotions—which helped pinpoint potential sticking points or confusing steps. At the same time, I created a storyboard to capture the user’s context, feelings, and goals throughout their interaction, whether they were casually exploring or in a hurry to find specific information
                </p>
                </div>
                <div className="lg:w-1/3 bg-[#385BF0] rounded-lg p-6 shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Ideation Goals</h3>
                  <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
                    <li>Turn user pain points into design opportunities.</li>
                    <li>Visualize user flows to detect bottlenecks.</li>
                    <li>Sketch early concepts to validate ideas quickly.</li>
                  </ul>
                </div>
              </div>

              {/* Sitemap */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Site map</h3>
                <div className="flex flex-col gap-6">
                  <p className="text-base leading-relaxed text-white/90">
                    The sitemap outlines the overall structure of the Café Blue and Breeze website, organizing the content and navigation paths for an intuitive user experience. 
                  </p>
                  <img
                    src="/sitemap.webp"
                    alt="Site Map"
                    className="w-full rounded-xl shadow-lg border border-white/10"
                  />
                </div>
              </div>
            </section>

            
            <section id="prototype" className="mt-10">
              <h2 className="text-3xl font-semibold mb-8 text-indigo-600">Starting the design</h2>

              {/* INTRODUCCIÓN + BLOQUE DESTACADO */}
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-2/3">
                  <p className="text-base leading-relaxed text-white/90">
                   Unlike the app, the website didn’t go through a detailed design process. Instead, I focused on creating a clean and functional layout that aligned with the app’s branding. The goal was to provide essential information and guide users smoothly toward downloading or exploring the app, all while maintaining visual consistency and ease of navigation.
                  </p>
                </div>
                <div className="lg:w-1/3 bg-[#385BF0] rounded-lg p-6 shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Prototype Goals</h3>
                  <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
                    <li>Translate ideas into tangible interfaces through wireframes.</li>
                    <li>Test layout and usability with low-fidelity prototypes.</li>
                    <li>Refine visual style and interactivity in high-fidelity versions.</li>
                  </ul>
                </div>
              </div>

              {/* Wireframe */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Digital wireframes </h3>
                  <p className="text-base leading-relaxed text-white/90 mb-6">
                   The main goal throughout the wireframing process was to maintain a clean and intuitive layout, ensuring users could navigate the website effortlessly. 
                  </p>
                   <img
                    src="/wireframe4.webp"
                    alt="wireframe"
                    className="w-full rounded-xl mb-6 shadow-lg border border-white/10"
                  />
                   <img
                    src="/wireframe5.webp"
                    alt="wireframe"
                    className="w-full rounded-xl mb-6 marker:shadow-lg border border-white/10"
                  />
                   <img
                    src="/wireframe6.webp"
                    alt="wireframe"
                    className="w-full rounded-xl shadow-lg border border-white/10"
                  />
                  
              </div>

              {/* Low Fidelity prototype */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Low-fidelity prototype</h3>
                <div className="w-full h-[600px] rounded-xl shadow-lg border border-white/10 overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/Z77jyAEGwbcazTtUveTxbv/Cafe-Delivery-App?node-id=444-812&t=1d3Zr8fGYXE2ATel-0&scaling=scale-down&content-scaling=fixed&page-id=469%3A744"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Low Fidelity prototype */}
              <section id="test" className="mt-12">
                <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Low Fidelity Prototype Usability Test</h3>
                {/* INTRODUCCIÓN + BLOQUE DESTACADO */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="lg:w-2/3">
                    <p className="text-base leading-relaxed text-white/90">
                      To evaluate the website for Blue & Breeze, I conducted usability testing using a low-fidelity prototype with three participants who reflected our target audience—busy professionals and students who frequently order takeout. During the wireframing stage, I explored several design directions, and this early testing helped me identify which ideas truly aligned with user needs. 
                      Throughout the sessions, I asked participants to think out loud, sharing their expectations, points of confusion, and overall impressions as they navigated the flow. Once they completed an initial walkthrough, I shared the rationale behind some of my design choices to gather more focused and constructive feedback.
                    </p>
                  </div>
                  <div className="lg:w-1/3 bg-[#385BF0] rounded-lg p-6 shadow-lg text-white">
                    <h3 className="text-xl font-bold mb-4">Research Goals</h3>
                    <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
                      <li>Understand user pain points.</li>
                      <li>Identify features users expect in a coffee website.</li>
                      <li>Validate whether our early prototypes are clear, usable, and meet expectations.</li>
                      <li>Discover unmet needs such as personalization or delivery transparency.</li>      
                    </ul>
                  </div>
                </div>
                 {/* Questions*/}
                <div className="mt-12">
                  <h2 className="text-xl font-semibold text-indigo-600 mb-6">Research Questions</h2>
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Card 1 */}
                    <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20  rounded-xl p-5 w-full lg:w-1/3 shadow-sm">
                      <p className="text-lg text-white/90 leading-relaxed">
                        Can users easily understand the purpose of the website and navigate to key sections (e.g., menu, ordering, contact)?
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20  rounded-xl p-5 w-full lg:w-1/3 shadow-sm">
                      <p className="text-lg text-white/90 leading-relaxed">
                        What content or features do users expect to find on a coffee delivery website, and are those expectations being met?
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 outline outline-[1.5px] outline-neutral-200/20  rounded-xl p-5 w-full lg:w-1/3 shadow-sm">
                      <p className="text-lg text-white/90 leading-relaxed">
                      Is the visual hierarchy and layout of the website intuitive enough to guide users toward taking action?
                      </p>
                    </div>
                   
                  </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-xl font-semibold text-indigo-600 mb-6">Key Performance Indicators (KPIs)</h2>
                    <div className="flex flex-col lg:flex-row gap-6">
                      {[
                        "Task Completion Rate",
                        "Time on task",
                        "Bounce Rate",                
                      ].map((kpi, index) => (
                        <div key={index} className="bg-indigo-600 border flex items-center border-white/10 rounded-xl p-5 w-full text-white text-center shadow-sm">
                          <p className="text-base font-medium leading-relaxed">{kpi}</p>
                        </div>
                      ))}
                    </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Methodology & Test Script</h2>

                  <div className="flex flex-col gap-8 border-l-4 border-indigo-600 pl-6">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                      <div className="text-indigo-600 font-bold text-xl min-w-[30px] select-none">01</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90 mb-2">Participant Introduction</h4>
                        <p className="text-white/70 leading-relaxed text-base">
                          We began each session by greeting the participant, explaining the purpose of the test, and reassuring them that we were evaluating the prototype, not their performance.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                      <div className="text-indigo-600 font-bold text-xl min-w-[30px] select-none">02</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90 mb-2">Think-Aloud Protocol</h4>
                        <p className="text-white/70 leading-relaxed text-base">
                          Participants were encouraged to verbalize their thoughts as they interacted with the prototype, sharing doubts, expectations, and feedback in real time.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                      <div className="text-indigo-600 font-bold text-xl min-w-[30px] select-none">03</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90 mb-2">Task-Based Scenarios</h4>
                        <p className="text-white/70 leading-relaxed text-base">
                          For the website, each user was guided through three main tasks: navigating the home page to get an overview of the service, using the menu with advanced filters to find and select their preferred drinks, and reviewing their selections in the cart. These scenarios helped evaluate how easily users could explore options, filter choices effectively, and manage their orders before proceeding to checkout.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4">
                      <div className="text-indigo-600 font-bold text-xl min-w-[30px] select-none">04</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90 mb-2">Post-Test Interview</h4>
                        <p className="text-white/70 leading-relaxed text-base">
                          After completing the tasks, users were asked reflective questions to gather deeper insights on their experience and expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-indigo-500 mb-4">Test Script Summary</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Script Block 1 */}
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 shadow-sm text-white">
                      <h4 className="text-lg font-semibold mb-2">Greeting & Consent</h4>
                      <p className="text-white/80 text-base">
                        “Thank you for participating today. This session will help us improve our app. Feel free to share your thoughts aloud while navigating.”
                      </p>
                    </div>

                    {/* Script Block 2 */}
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 shadow-sm text-white">
                      <h4 className="text-lg font-semibold mb-2">Task 1: Browsing</h4>
                      <p className="text-white/80 text-base">
                        “Please explore the home page and menu. Show me how you would find coffee options that interest you, using the available filters if needed”
                      </p>
                    </div>

                    {/* Script Block 3 */}
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 shadow-sm text-white">
                      <h4 className="text-lg font-semibold mb-2">Task 2: Cart Review</h4>
                      <p className="text-white/80 text-base">
                        “Add a drink to your cart and then review the items there. Feel free to explain what you expect to do next”
                      </p>
                    </div>

                    {/* Script Block 4 */}
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 shadow-sm text-white">
                      <h4 className="text-lg font-semibold mb-2">Task 3: Navigation & Information</h4>
                      <p className="text-white/80 text-base">
                        “Take a moment to visit the About Us page. Let me know what you think about the information presented and how easy it is to find”
                      </p>
                    </div>

                    {/* Script Block 5 */}
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 shadow-sm text-white">
                      <h4 className="text-lg font-semibold mb-2">Post-test questions</h4>
                      <p className="text-white/80 text-base">
                        “What did you like about browsing and using the site? Was anything confusing or hard to find? How likely would you be to use this website for ordering coffee?”
                      </p>
                    </div>
                  </div>
                </div>

                <section className="mt-12">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-8">Usability Testing Results & KPIs</h2>

                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Resultados - ocupa 2/3 del ancho en desktop */}
                  <div className="lg:w-2/3 space-y-10 text-white/90">
                    {/* Round 1 */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Round 1 Findings</h3>
                      <ul className="list-disc list-inside space-y-3">
                        <li>
                          Users appreciated the clear presence of the logo and familiar navigation options (Home, About Us, Menu).
                        </li>
                        <li>
                          The features—Fast & Fresh Delivery, Freshly Roasted Daily, Barista-Approved Quality—were well received. Users found this section informative and visually balanced. Icons or supporting visuals could further enhance this area.
                        </li>
                      </ul>
                    </div>

                    {/* Round 2 */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Round 2 Findings</h3>
                      <ul className="list-disc list-inside space-y-3">
                        <li>
                          The interactive menu categorized by drink types (e.g., Espresso, Cold Brew, Teas) was one of the most praised features.
                        </li>
                        <li>
                          Although product categories were shown, associated items were not displayed. This was corrected to improve product discoverability.
                        </li>
                        <li>
                          Users enjoyed browsing the product categories directly on the homepage and found the layout intuitive and engaging. However, they noted that there was no visible button or link inviting them to view the full menu or proceed with an order. This absence of a clear call to action caused hesitation and interrupted the flow toward making a purchase.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* KPIs - ocupa 1/3 del ancho en desktop */}
                  <div className="lg:w-1/3 bg-indigo-600 rounded-lg p-6 shadow-lg text-white">
                    <h3 className="text-xl font-bold mb-6 text-center">Key Performance Indicators (KPIs)</h3>
                    <ul className="list-disc list-inside space-y-4">
                      <li><strong>Task Completion Rate:</strong>  95% of users were able to complete key tasks (browsing the menu, applying filters, and reviewing the cart) without external help.</li>
                      <li><strong>Time on Task:</strong> The average time to complete a full flow—from landing on the home page to reviewing the cart—decreased from 2 minutes 30 seconds to 2 minutes, showing a 20% improvement in efficiency.</li>
                      <li><strong>Error Rate:</strong> Checkout-related errors (such as confusion adding items to the cart or using filters incorrectly) dropped from an average of 3.2 errors per session to 1.1, after UI improvements and clearer feedback elements were implemented.</li>
                    </ul>
                  </div>
                </div>
                </section>
              </section>

              {/* High Fidelity prototype */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Refining the design</h3>
                <p className="text-base leading-relaxed text-white/90 mb-6">
                    For this project, I wanted to create a solution that felt both simple and sophisticated, focusing on a common pain point: ordering coffee quickly and effortlessly. After considering several ideas, I settled on designing an app for a local café named Blue & Breeze.
                    My goal was to craft a clean, intuitive experience with a calming blue and white color palette that reflects the café’s fresh and welcoming vibe. I aimed to eliminate friction in the ordering process, allowing busy professionals and coffee lovers to customize their drinks and choose delivery or pickup with ease.
                </p>
                 <img
                    src="/brand1.webp"
                    alt="Brand guide"
                    className="w-full rounded-xl mb-6 shadow-lg border border-white/10"
                  />
                        
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-indigo-500 mb-4">High-fidelity prototype</h3>
                  <img
                      src="/highproto2.webp"
                      alt="High Fidelity Prototype"
                      className="w-full rounded-xl mb-6 shadow-lg border border-white/10"
                    />
                    <img
                      src="/highproto3.webp"
                      alt="High Fidelity Prototype"
                      className="w-full rounded-xl mb-6 shadow-lg border border-white/10"
                    />
                  <div className="w-full h-[600px] rounded-xl shadow-lg border border-white/10 overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/Z77jyAEGwbcazTtUveTxbv/Cafe-Delivery-App?node-id=375-240&p=f&t=kOegdSJV4ZYicpI3-0&scaling=scale-down&content-scaling=fixed&page-id=368%3A206&starting-point-node-id=375%3A240"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                
                <div className="mt-16">
                  <h3 className="text-2xl font-semibold text-indigo-500 mb-6">Takeaways & Reflections</h3>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Impact */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md">
                      <h4 className="text-lg font-semibold text-white/90 mb-4">Impact</h4>
                      <p className="text-white/70 leading-relaxed text-base">
                        Users responded very positively to the website's clarity and ease of navigation. One participant mentioned, "It feels super intuitive — I knew exactly where to go without thinking." 
                      </p>
                    </div>

                    {/* What I Learned */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md">
                      <h4 className="text-lg font-semibold text-white/90 mb-4">What I Learned</h4>
                      <p className="text-white/70 leading-relaxed text-base">
                       This project helped me understand the real value of user-centered design. Listening to feedback and observing how users interact with a prototype led me to meaningful improvements.
                      </p>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md">
                      <h4 className="text-lg font-semibold text-white/90 mb-4">Next Steps</h4>
                      <ul className="list-disc list-inside text-white/70 space-y-2 text-base leading-relaxed">
                        <li>Introduce a rewards system to increase retention and engagement.</li>
                        <li>Work on optimizing images, components, and responsive behaviors to reduce load times on slower networks or older mobile devices.</li>
                        <li>Ensure that font sizes, touch targets, and layout spacing remain accessible and easy to interact with on both small and large screens, maintaining a consistent and inclusive experience.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>          
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
