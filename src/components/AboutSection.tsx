
import React from 'react';
import Countdown from './Countdown';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-electric-purple to-lilac">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-lilac/30">
            <Countdown targetDate="2026-03-01T00:00:00" />
            
            <h2 className="font-display font-black text-electric-purple text-[clamp(2.5rem,6vw,4rem)] text-center mb-8 leading-tight">
              POR QUE O
              <span className="block text-peach-gold">RETIRO EXISTE?</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 font-body">
              <p className="text-lg leading-relaxed">
                O Retiro MJ nasceu do coração de jovens apaixonados por Cristo, que desejam ver uma 
                geração transformada pelo poder do Evangelho. Em um mundo que oferece tantas distrações, 
                criamos este espaço sagrado para <strong className="text-electric-purple">encontro genuíno com Deus</strong>.
              </p>
              
              <blockquote className="border-l-4 border-electric-purple pl-6 py-4 bg-lilac/10 rounded-r-xl">
                <p className="italic text-electric-purple font-medium text-lg">
                  "Porque sou eu que conheço os planos que tenho para vocês", diz o Senhor, 
                  "planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro."
                </p>
                <cite className="block text-right text-electric-purple font-semibold mt-2">
                  - Jeremias 29:11
                </cite>
              </blockquote>
              
              <p className="text-lg leading-relaxed">
                Durante três dias intensos, você viverá experiências que marcarão sua vida: 
                <span className="text-electric-purple font-semibold"> momentos de adoração profunda</span>, 
                ensinamentos que transformam perspectivas, 
                <span className="text-electric-purple font-semibold"> comunhão verdadeira</span> e 
                diversão saudável que fortalece laços eternos.
              </p>
              
              <p className="text-lg leading-relaxed">
                Este não é apenas mais um evento. É um <strong className="text-peach-gold">marco na sua jornada espiritual</strong>, 
                um tempo de renovação, descoberta do propósito e fortalecimento da fé. 
                Venha descobrir quem Deus planejou que você fosse desde o início dos tempos.
              </p>

              <blockquote className="border-l-4 border-peach-gold pl-6 py-4 bg-peach-gold/10 rounded-r-xl">
                <p className="italic text-electric-purple font-medium text-lg">
                  "Antes mesmo de te formar no ventre materno, eu te conheci; antes que você nascesse, eu te consagrei"
                </p>
                <cite className="block text-right text-electric-purple font-semibold mt-2">
                  - Jeremias 1:5
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
