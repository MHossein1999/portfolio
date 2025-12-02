"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full relative section-padding bg-black-blue flex items-center text-foreground"
    >
      <div className="w-full px-6 md:max-w-7xl md:mx-auto">
        {/* Section Heading */}
        <h2 className="section-heading mb-16">Selected Work</h2>

        <div className="space-y-24">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="grid gap-16 items-center md:grid-cols-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl shadow-2xl group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105
                   max-w-[90%] mx-auto sm:max-w-[80%] md:max-w-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                  <span className="text-sm uppercase tracking-wide text-gray-200">
                    View Project →
                  </span>
                </div>
              </motion.div>

              <div className="space-y-6 text-center md:text-left mx-auto max-w-md">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl font-semibold"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="section-paragraph"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex gap-6 mt-6 justify-center md:justify-start"
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-underline"
                    >
                      GitHub
                    </a>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex gap-3 mt-4 text-sm flex-wrap justify-center md:justify-start"
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
