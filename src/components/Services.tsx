"use client";

import { Sparkles, Heart, Baby, Flower2 } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Massage Bien-être",
      description:
        "Un moment de détente absolue pour relâcher les tensions et retrouver votre équilibre intérieur.",
      benefits: [
        "Réduction du stress",
        "Amélioration de la circulation",
        "Détente musculaire profonde",
      ],
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Massage Femme Enceinte",
      description:
        "Un soin adapté pour soulager les maux de la grossesse dans le respect de votre corps et de votre bébé.",
      benefits: [
        "Soulagement des douleurs dorsales",
        "Réduction des œdèmes",
        "Moment de connexion avec bébé",
      ],
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Massage Relaxant",
      description:
        "Laissez-vous porter par des gestes doux et enveloppants pour une relaxation complète du corps et de l'esprit.",
      benefits: [
        "Apaisement mental",
        "Sommeil amélioré",
        "Harmonie corps-esprit",
      ],
    },
    {
      icon: <Flower2 className="w-12 h-12" />,
      title: "Massage aux Huiles Essentielles",
      description:
        "Profitez des bienfaits de l'aromathérapie combinés aux techniques de massage pour un soin holistique.",
      benefits: [
        "Aromathérapie personnalisée",
        "Détente sensorielle",
        "Bien-être global",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Prestations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des soins personnalisés pour votre bien-être, dans une ambiance
            naturelle inspirée de la canopée
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-gradient-to-br from-[#f5f1e8] to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[#a8c69f] mb-4 transform transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#a8c69f] mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
              ))}
            </ul>
          </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Chaque massage est personnalisable selon les besoins
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-[#a8c69f] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7a9e6f] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Demander conseil
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
