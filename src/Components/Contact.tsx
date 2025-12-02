"use client";

import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineBriefcase } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full section-padding bg-contact text-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full px-6 max-w-3xl mx-auto flex flex-col gap-y-12 items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="space-y-6"
        >
          <h2 className="section-heading text-white">
            Let’s Build Something Intentional
          </h2>
          <p className="section-paragraph">
            I’m available for freelance projects, collaborations, and creative
            partnerships. Reach out and let’s create something meaningful.
          </p>
          <div className="flex gap-6 flex-wrap justify-center mt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              href="mailto:geniuspeople78@gmail.com"
              className="btn btn-primary px-5 py-2 text-sm md:px-5 md:py-2 md:text-base"
            >
              Say Hello
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              href="https://www.linkedin.com/in/mohammadhossein-zamani-1965b0237"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline px-5 py-2 text-sm md:px-5 md:py-2 md:text-base"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="relative group bg-black-blue border border-gray-700 rounded-xl p-8 shadow-xl hover:shadow-2xl hover:ring-1 hover:ring-white/20 transition-all duration-500 w-full max-w-md"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">
              Mohammad Hossein Zamani
            </h3>
            <p className="text-gray-300">
              Frontend Developer — Minimal UI & Luxury websites
            </p>
            <div className="text-sm space-y-3">
              <p className="flex items-center gap-2 justify-center text-gray-300">
                <HiOutlineMail className="text-white" />
                <a
                  href="mailto:geniuspeople78@gmail.com"
                  className="text-white hover:underline"
                >
                  geniuspeople78@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 justify-center text-gray-300">
                <HiOutlineBriefcase className="text-white" />
                <span className="text-white">Freelance / Remote</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="signature-line text-center mt-12"
      >
        Crafted with intention by MohammadHossein Zamani ©{" "}
        {new Date().getFullYear()}
      </motion.p>
    </section>
  );
}
