"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full section-padding bg-black-blue text-foreground flex items-center justify-center font-sans"
    >
      <div className="w-full px-6 md:max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center hero-layout">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content space-y-6"
        >
          <div className="space-y-1">
            <p className="section-subtext mb-0">Frontend Developer</p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="section-heading"
            >
              Hello, I'm <span className="text-brand">Mohammadhossein</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="section-paragraph max-w-xl mx-auto md:mx-0"
          >
            I build scalable, performant web interfaces using JavaScript, React,
            HTML, CSS, Sass, and Tailwind. I also work confidently with Next.js,
            TypeScript, and Redux — combining clean code with luxury‑grade UI
            polish.
          </motion.p>

          {/* CTA Links */}
          <div className="cta-wrapper flex justify-center md:justify-start gap-3">
            <Link
              href="#projects"
              className="btn btn-primary px-5 py-2 text-md md:px-5 md:py-2 md:text-base"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="btn btn-outline px-5 py-2 text-md md:px-5 md:py-2 md:text-base"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/mohammadhossein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="social-icon"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/mohammadhossein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="social-icon"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://twitter.com/mohammadhossein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="social-icon"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://instagram.com/mohammadhossein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="social-icon"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ rotate: 2, scale: 1.02 }}
          className="flex justify-center md:justify-end mt-8 md:mt-2"
        >
          <div className="hero-image relative rounded-full overflow-hidden shadow-xl group">
            <div
              className="absolute -inset-6 rounded-full blur-3xl transition group-hover:opacity-90"
              style={{
                backgroundColor: "rgba(20, 184, 166, 0.3)",
                opacity: 0.7,
              }}
            />
            <Image
              src="/profile-photo.png"
              alt="Portrait of Mohammadhossein Zamani, Frontend Developer"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover relative z-10"
              priority
            />
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black-blue via-white/20 to-black-blue translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            <div className="frame-corner frame-corner-top-left" />
            <div className="frame-corner frame-corner-bottom-right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
