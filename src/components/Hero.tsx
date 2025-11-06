"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4e7cf] via-[#f5f1e8] to-white"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#a8c69f]/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#a8c69f]/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Sloth emoji or icon placeholder */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-8xl mb-8 animate-bounce-slow"
          >
            🦥
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight"
          >
            La Canopée
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light"
          >
            Votre havre de paix pour des massages bien-être
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Spécialiste du massage bien-être et massage pour femmes enceintes.
            <br />
            Prenez le temps de vous détendre dans un cadre naturel et apaisant.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-[#a8c69f] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7a9e6f] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Découvrir les prestations
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border-2 border-[#a8c69f] text-[#7a9e6f] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#a8c69f] hover:text-white transition-all duration-300"
            >
              Prendre rendez-vous
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-[#a8c69f]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
