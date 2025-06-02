
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-electric-purple shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🔥</div>
          <span className="text-white font-display font-bold text-xl">
            Jovens Marco
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-peach-gold transition-colors duration-200"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-white hover:text-peach-gold transition-colors duration-200"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('galeria')}
            className="text-white hover:text-peach-gold transition-colors duration-200"
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection('programacao')}
            className="text-white hover:text-peach-gold transition-colors duration-200"
          >
            Programação
          </button>
          <button 
            onClick={() => scrollToSection('patrocinadores')}
            className="text-white hover:text-peach-gold transition-colors duration-200"
          >
            Apoio
          </button>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-white text-electric-purple px-6 py-2 rounded-full font-body font-semibold hover:bg-peach-gold hover:text-white transition-all duration-300 transform hover:scale-105 animate-glow-pulse">
          Inscrever-se
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-electric-purple border-t border-lilac">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-peach-gold transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-white hover:text-peach-gold transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="block w-full text-left text-white hover:text-peach-gold transition-colors duration-200"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('programacao')}
              className="block w-full text-left text-white hover:text-peach-gold transition-colors duration-200"
            >
              Programação
            </button>
            <button 
              onClick={() => scrollToSection('patrocinadores')}
              className="block w-full text-left text-white hover:text-peach-gold transition-colors duration-200"
            >
              Apoio
            </button>
            <button className="w-full bg-white text-electric-purple px-6 py-3 rounded-full font-body font-semibold hover:bg-peach-gold hover:text-white transition-all duration-300 mt-4">
              Inscrever-se
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
