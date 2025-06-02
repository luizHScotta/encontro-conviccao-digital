
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    { id: 1, name: 'Patrocinador 1', placeholder: true },
    { id: 2, name: 'Patrocinador 2', placeholder: true },
    { id: 3, name: 'Patrocinador 3', placeholder: true },
    { id: 4, name: 'Patrocinador 4', placeholder: true },
    { id: 5, name: 'Patrocinador 5', placeholder: true },
    { id: 6, name: 'Patrocinador 6', placeholder: true }
  ];

  return (
    <section id="patrocinadores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Border Frame */}
          <div className="border-8 border-electric-purple rounded-3xl p-8 md:p-12">
            <h2 className="font-display font-black text-electric-purple text-[clamp(2.5rem,6vw,4rem)] text-center mb-6 leading-tight">
              QUER APOIAR
              <span className="block text-peach-gold">ESTE MOVIMENTO?</span>
            </h2>
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-gray-700 font-body text-lg leading-relaxed mb-6">
                Seja parte desta transformação! Sua empresa ou ministério pode contribuir para 
                formar uma geração de jovens apaixonados por Cristo. Juntos, podemos impactar 
                vidas e eternidades.
              </p>
              
              <p className="text-electric-purple font-body font-semibold text-lg mb-8">
                Existem diversas formas de apoio: patrocínio financeiro, doação de materiais, 
                serviços, alimentação ou hospedagem. Cada contribuição faz a diferença!
              </p>
              
              <button className="bg-electric-purple text-white px-8 py-4 rounded-full font-body font-bold text-lg hover:bg-lilac transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Fale com a gente
              </button>
            </div>

            {/* Sponsors Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-105 group cursor-pointer border-2 border-transparent hover:border-peach-gold"
                >
                  {sponsor.placeholder ? (
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2 group-hover:bg-peach-gold/20 transition-colors duration-300" />
                      <p className="text-gray-500 text-xs font-body group-hover:text-peach-gold transition-colors duration-300">
                        Seu logo aqui
                      </p>
                    </div>
                  ) : (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain p-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 font-body text-sm">
                Interessado em apoiar? Entre em contato conosco e descubra como sua marca pode 
                fazer parte desta história de transformação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
