"use client";
import { motion } from "framer-motion";

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.25,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const cards = [
    {
      title: "UX/UI Design",
      image: "/Pen.webp",
      description:
        "Designing user-centered digital experiences, from wireframes to interactive prototypes",
      items: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      title: "Frontend Development",
      image: "/Code.webp",
      description:
        "I create modern and responsive web interfaces using current technologies.",
      items: ["React", "HTML", "CSS", "Javascript", "GitHub", "VS Code"],
    },
    {
      title: "3D Design",
      image: "/Cubo.webp",
      description:
        "Designing 3D renders, models, mockups, and animations for digital and visual projects.",
      items: ["Blender", "Rendering", "Mockups", "Texturing", "Lightning", "VFX"],
    },
  ];

  const gradients = [
    "radial-gradient(circle at bottom right, rgba(56, 91, 240, 0.9), rgba(56, 91, 240, 0.3) 30%, transparent 60%)",
    "radial-gradient(circle at bottom left, rgba(56, 91, 240, 0.9), rgba(56, 91, 240, 0.3) 30%, transparent 60%)",
    "radial-gradient(circle at top right, rgba(56, 91, 240, 0.9), rgba(56, 91, 240, 0.3) 30%, transparent 60%)",
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-8">
      <div className="bg-[#385BF0] text-white  text-sm sm:text-base rounded-2xl px-4 py-1 font-semibold">
        What I Do
      </div>
      <div className="text-white font-semibold text-2xl mt-4 text-center sm:text-left">
        Where Design Strategy Meets
      </div>
      <div className="text-[#385BF0] font-semibold text-2xl text-center sm:text-left">
        Code and Visual Innovation
      </div>

      <div className="flex flex-col sm:flex-row mt-10 gap-6 sm:gap-9 items-center justify-center">
        {cards.map((card, i) => {
          const gradientStyle = {
            background: `${gradients[i]}, rgba(255, 255, 255, 0.05)`,
          };

          return (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              className="relative items-center sm:items-start w-[90%] sm:w-96 rounded-[20px] sm:rounded-[31px] outline outline-[1.5px] outline-neutral-200/20 hover:outline-[#385BF0] shadow-lg flex flex-col p-4 sm:p-6 overflow-hidden"
              style={gradientStyle}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 sm:w-32 sm:h-32 mb-3 relative z-10"
              />
              <div className="text-white text-xl text-center sm:text-2xl font-semibold relative z-10">
                {card.title}
              </div>
              <div className="mt-2 text-white text-sm font-light relative z-10 text-center sm:text-left">
                {card.description}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-center relative z-10 justify-center sm:justify-start">
                {card.items.map((item) => (
                  <div
                    key={item}
                    className="text-xs text-white px-3 py-1.5 bg-white/5 rounded-lg outline outline-[1.5px] outline-white/30"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
