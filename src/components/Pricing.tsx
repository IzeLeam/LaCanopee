"use client";

import { Clock, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const pricingOptions = [
    {
      duration: "30 minutes",
      price: "45€",
      features: [
        "Massage ciblé",
        "Idéal pour une pause détente",
        "Zone au choix",
      ],
      popular: false,
    },
    {
      duration: "1 heure",
      price: "75€",
      features: [
        "Massage complet du corps",
        "Détente profonde",
        "Huiles essentielles incluses",
      ],
      popular: true,
    },
    {
      duration: "1h30",
      price: "105€",
      features: [
        "Expérience premium",
        "Massage intégral",
        "Aromathérapie personnalisée",
        "Moment de relaxation prolongé",
      ],
      popular: false,
    },
  ];

  const specialOffers = [
    {
      title: "Massage Femme Enceinte",
      price: "80€",
      duration: "1 heure",
      note: "Soin spécialement adapté, à partir du 4ème mois de grossesse",
    },
    {
      title: "Forfait 5 séances",
      price: "340€",
      duration: "1 heure/séance",
      note: "Économie de 35€ avec le forfait fidélité",
    },
  ];

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-br from-[#d4e7cf]/30 to-white">
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
            Tarifs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des prestations de qualité à des tarifs transparents
          </p>
        </motion.div>

        {/* Standard Pricing */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                option.popular ? "ring-2 ring-[#a8c69f] scale-105" : ""
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-[#a8c69f] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Populaire
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-center mb-4 text-[#a8c69f]">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 text-center mb-2">
                  {option.duration}
                </h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-[#7a9e6f]">
                    {option.price}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#a8c69f] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-300 ${
                    option.popular
                      ? "bg-[#a8c69f] text-white hover:bg-[#7a9e6f] shadow-md hover:shadow-lg"
                      : "border-2 border-[#a8c69f] text-[#7a9e6f] hover:bg-[#a8c69f] hover:text-white"
                  }`}
                >
                  Réserver
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offers */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 text-center mb-8">
            Offres spéciales
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="border-2 border-[#d4e7cf] rounded-xl p-6 hover:border-[#a8c69f] transition-all duration-300"
              >
                <h4 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {offer.title}
                </h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#7a9e6f]">
                    {offer.price}
                  </span>
                  <span className="text-gray-600">/ {offer.duration}</span>
                </div>
                <p className="text-gray-600 text-sm italic">{offer.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-2">
            💳 Paiement sur place : Espèces, Carte Bancaire, Chèque
          </p>
          <p className="text-sm text-gray-500">
            Les tarifs sont susceptibles d’évoluer. Pour toute précision, se référer à la page Contact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
