"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../components/projects/projects";

export default function SelectedWorks() {
  const [selected, setSelected] = useState("UX/UI");

  const categories = ["UX/UI", "Frontend", "3D Design"];

  const filteredProjects = projects.filter((project) =>
    project.tags.includes(selected)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="text-center mt-20"
    >
      {/* Header */}
      <div className="bg-[#385BF0] text-white rounded-2xl inline-block px-4 py-1 font-semibold">
        Selected Works
      </div>
      <h2 className="text-white text-2xl font-bold mt-4">
        A Glimpse Into My Portfolio
      </h2>

      {/* Botones de categorías */}
      <div className="mt-6 flex justify-center gap-3 flex-wrap">
        {categories.map((category) => {
          const isSelected = selected === category;
          return (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 outline outline-[1.5px] ${
                isSelected
                  ? "bg-[#385BF0] text-white outline-neutral-200/20"
                  : "bg-white/5 text-neutral-200 outline-neutral-200/20 hover:bg-white/10"
              }`}
              style={
                isSelected
                  ? {
                      boxShadow:
                        "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
                    }
                  : {}
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Lista filtrada de proyectos (tipo carrusel vertical) */}
      <div className="mt-10 px-6 md:px-36 space-y-12 overflow-y-auto max-h-[70vh] custom-scrollbar" >
   {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              cover={project.cover}
              tags={project.tags}
              color={project.color}
              role={project.role}
              industry={project.industry}
              toolkit={project.toolkit}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
