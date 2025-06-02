
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Apoio', href: '#patrocinadores' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-lilac to-electric-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Mission */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="text-3xl animate-sparkle">🔥</div>
              <span className="font-display font-bold text-2xl">
                Jovens Marco
              </span>
            </div>
            <p className="font-body text-white/90 leading-relaxed">
              Formando uma geração de jovens apaixonados por Cristo, 
              comprometidos com o Reino e prontos para transformar o mundo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-display font-bold text-xl mb-4 text-peach-gold">
              Links Rápidos
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full font-body hover:text-peach-gold transition-colors duration-200 hover:transform hover:scale-105"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-display font-bold text-xl mb-4 text-peach-gold">
              Contato
            </h3>
            <div className="space-y-2 font-body">
              <p className="hover:text-peach-gold transition-colors duration-200">
                📧 contato@jovensmarco.com.br
              </p>
              <p className="hover:text-peach-gold transition-colors duration-200">
                📱 (11) 99999-9999
              </p>
              <p className="hover:text-peach-gold transition-colors duration-200">
                🏠 Rua da Igreja, 123 - São Paulo/SP
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://instagram.com/jovempromarco"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-peach-gold hover:scale-110 transition-all duration-300 group"
          >
            <Instagram size={24} className="group-hover:animate-sparkle" />
          </a>
          <a
            href="https://youtube.com/@jovensmarco"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-peach-gold hover:scale-110 transition-all duration-300 group"
          >
            <Youtube size={24} className="group-hover:animate-sparkle" />
          </a>
        </div>

        {/* Slogan and Copyright */}
        <div className="text-center border-t border-white/20 pt-8">
          <p className="font-display font-bold text-2xl mb-4 text-peach-gold">
            🔥 Jovens que vivem para Cristo
          </p>
          <p className="font-body text-white/70 text-sm">
            © 2024 Jovens Marco. Todos os direitos reservados. 
            Desenvolvido com 💜 para a glória de Deus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
