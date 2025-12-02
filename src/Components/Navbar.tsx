"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const sectionIds = ["home", "about", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);
  const name = "Mohammadhossein";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-hero backdrop-blur-md text-white">
        <nav className="navbar-container w-full px-4 sm:px-6 md:px-12 flex items-center justify-between py-4">
          <div className="flex gap-0.5 text-lg sm:text-xl font-semibold transition-colors duration-300 hover:text-brand cursor-pointer">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
              {sectionIds.map((id) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className={`nav-underline ${
                      activeSection === id ? "nav-active" : ""
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#hire"
              className="btn btn-primary px-3 py-1 text-sm md:px-4 md:py-2 md:text-base whitespace-nowrap"
            >
              Hire Me
            </Link>

            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-1 rounded hover:bg-brand transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HiMenu className="w-5 h-5 text-white" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 h-screen w-64 items-center text-center bg-black-blue shadow-lg md:hidden flex flex-col gap-6 p-6 z-50"
            >
              <button
                aria-label="Close menu"
                className="self-end p-1 rounded hover:bg-brand transition"
                onClick={() => setIsOpen(false)}
              >
                <HiX className="w-6 h-6 text-white" />
              </button>

              {sectionIds.map((id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className={`nav-underline ${
                    activeSection === id ? "nav-active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
