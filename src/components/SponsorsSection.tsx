
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    { id: 1, name: 'Patrocinador 1', placeholder: true },
    { id: 2, name: 'Patrocinador 2', placeholder: true },
    { id: 3, name: 'Patrocinador 3', placeholder: true },
    { id: 4, name: 'Patrocinador 4', placeholder: true },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-electric-purple" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-electric-purple" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-5xl md:text-6xl text-electric-purple mb-6">
            QUER APOIAR ESTE
            <br />
            <span className="text-lilac">MOVIMENTO?</span>
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Junte-se a nós nesta missão de transformar vidas através de encontros que 
            fortalecem a fé e criam conexões duradouras entre jovens cristãos.
          </p>
          <button className="px-8 py-4 bg-electric-purple text-white font-body font-semibold text-lg rounded-full hover:bg-lilac transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-glow-pulse">
            Fale com a gente
          </button>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="aspect-square bg-gray-100 rounded-lg border-2 border-gray-200 hover:border-electric-purple transition-all duration-300 flex items-center justify-center group hover:shadow-lg transform hover:scale-105"
            >
              <span className="text-gray-400 font-body text-sm group-hover:text-electric-purple transition-colors">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
