"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
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
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prise de rendez-vous par téléphone ou par email. Réponse rapide garantie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#d4e7cf]/30 to-[#f5f1e8] rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#a8c69f] rounded-full flex items-center justify-center text-white group-hover:bg-[#7a9e6f] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Téléphone
                    </h4>
                    <a
                      href="tel:+33123456789"
                      className="text-[#7a9e6f] hover:text-[#a8c69f] transition-colors text-lg"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#a8c69f] rounded-full flex items-center justify-center text-white group-hover:bg-[#7a9e6f] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:contact@lacanopee.fr"
                      className="text-[#7a9e6f] hover:text-[#a8c69f] transition-colors text-lg break-all"
                    >
                      contact@lacanopee.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#a8c69f] rounded-full flex items-center justify-center text-white group-hover:bg-[#7a9e6f] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Adresse
                    </h4>
                    <p className="text-gray-700">
                      123 Rue de la Canopée
                      <br />
                      75000 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#a8c69f] rounded-full flex items-center justify-center text-white group-hover:bg-[#7a9e6f] transition-colors">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Horaires
                    </h4>
                    <div className="text-gray-700 space-y-1">
                      <p>Lundi - Vendredi : 9h00 - 19h00</p>
                      <p>Samedi : 10h00 - 18h00</p>
                      <p>Dimanche : Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f1e8] rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">📅 Prise de rendez-vous :</strong>
                <br />
                Les rendez-vous se prennent uniquement par téléphone ou par email.
                Un créneau est proposé sous 24 à 48 heures ouvrées.
              </p>
            </div>
          </motion.div>

          {/* Call to Action / Info Box */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-[#a8c69f] to-[#7a9e6f] rounded-2xl p-10 text-white shadow-xl">
              <div className="text-6xl mb-6 text-center">🦥</div>
              <h3 className="text-3xl font-display font-bold mb-4 text-center">
                Prenez le temps de vous détendre
              </h3>
              <p className="text-lg mb-8 text-white/90 leading-relaxed text-center">
                Dans notre havre de paix inspiré de la canopée, laissez-vous porter
                par des soins experts et personnalisés. Chaque massage est une
                invitation au lâcher-prise et à la reconnexion avec soi-même.
              </p>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+33123456789"
                  className="block w-full text-center bg-white text-[#7a9e6f] px-6 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  📞 Appeler maintenant
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@lacanopee.fr"
                  className="block w-full text-center border-2 border-white text-white px-6 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7a9e6f] transition-all duration-300"
                >
                  ✉️ Envoyer un email
                </motion.a>
              </div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-white border-2 border-[#d4e7cf] rounded-xl p-6"
            >
              <h4 className="font-display font-bold text-xl text-gray-900 mb-3">
                🎁 Offrez du bien-être
              </h4>
              <p className="text-gray-600 mb-4">
                Des bons cadeaux sont disponibles pour toutes les prestations.
                Une attention idéale pour faire plaisir à un proche.
              </p>
              <p className="text-sm text-gray-500 italic">
                Pour plus d’informations, utiliser les coordonnées ci-dessus.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
