import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#7a9e6f] to-[#a8c69f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">La Canopée</h3>
            <p className="text-white/90 leading-relaxed">
              Votre espace de bien-être dédié à la détente et à la reconnexion
              avec vous-même, dans une ambiance naturelle et apaisante.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#accueil"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#tarifs"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/90">
              <li>📞 +33 1 23 45 67 89</li>
              <li>✉️ contact@lacanopee.fr</li>
              <li>📍 123 Rue de la Canopée</li>
              <li className="pl-4">75000 Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} La Canopée. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 fill-current" /> et passion
            </span>
          </p>
          <p className="text-white/60 text-sm mt-2">
            Mentions légales • Politique de confidentialité • CGV
          </p>
        </div>
      </div>
    </footer>
  );
}
