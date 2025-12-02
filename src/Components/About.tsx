"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full section-padding bg-cyan-blue text-black font-sans overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-radial from-white/5 to-cyan-blue opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 w-full px-6 md:max-w-7xl md:mx-auto">
        <div className="about-layout flex flex-col items-center text-center md:grid md:grid-cols-2 md:gap-y-0 md:text-left md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center mb-6 md:mb-0"
          >
            <div className="about-image w-80 relative aspect-3/4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full overflow-hidden rounded-md shadow-2xl z-10"
              >
                <Image
                  src="/profile-photo.png"
                  alt="Portrait of Mohammadhossein Zamani, Frontend Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover rounded-md"
                  priority
                />
              </motion.div>
              {/* Frame corners */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: -10 }}
                whileInView={{ opacity: 1, x: -10, y: -12 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="frame-corner frame-corner-top-left"
              />
              <motion.div
                initial={{ opacity: 0, x: 10, y: 10 }}
                whileInView={{ opacity: 1, x: 10, y: 12 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="frame-corner frame-corner-bottom-right"
              />
            </div>
          </motion.div>

          {/* Content below image (mobile) / right (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center text-center md:items-start md:text-left space-y-6"
          >
            <h2 className="section-heading text-white text-center lg:text-left">
              About Me
            </h2>
            <p className="section-paragraph max-w-xl mx-auto md:mx-0 text-center lg:text-left">
              I’m a frontend developer with strong expertise in JavaScript,
              React, HTML, CSS, Sass, and Tailwind. I also work confidently with
              Next.js, TypeScript, and Redux to build scalable, performant
              applications. My focus is clean, semantic code combined with
              editorial‑grade polish.
            </p>

            {/* Tech Stack Pills */}
            <ul className="tech-stack flex flex-wrap justify-center md:justify-start gap-3 mt-6 text-gray-300 font-light">
              {[
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "Sass",
                "Tailwind",
                "Next.js",
                "TypeScript",
                "Redux",
              ].map((tech) => (
                <li
                  key={tech}
                  className="tag-pill hover:text-brand transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
