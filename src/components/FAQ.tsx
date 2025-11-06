"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quels sont les bienfaits du massage bien-être ?",
      answer:
        "Le massage bien-être aide à réduire le stress et l'anxiété, améliore la circulation sanguine, soulage les tensions musculaires, favorise un meilleur sommeil et renforce le système immunitaire. C'est un moment privilégié pour se reconnecter à soi-même et retrouver son équilibre.",
    },
    {
      question: "À partir de quel mois de grossesse puis-je recevoir un massage ?",
      answer:
        "Les massages pour femmes enceintes peuvent débuter à partir du 4ème mois de grossesse (après le premier trimestre). Des techniques adaptées et une position confortable sont mises en place pour garantir votre sécurité et celle de votre bébé.",
    },
    {
      question: "Que dois-je apporter pour ma séance ?",
      answer:
        "Rien de particulier : serviettes, huiles de massage et environnement relaxant sont fournis. Venir simplement avec des vêtements confortables et l’envie de se détendre.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white to-[#f5f1e8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ? Nous avons les réponses !
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f5f1e8]/30 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#a8c69f] flex items-center justify-center text-white"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center bg-gradient-to-br from-[#d4e7cf] to-[#a8c69f]/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Vous ne trouvez pas la réponse à votre question ?
          </h3>
          <p className="text-gray-600 mb-6">
            Une question reste sans réponse ? Le formulaire de contact est à votre disposition.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-[#a8c69f] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7a9e6f] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Accéder au contact
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
