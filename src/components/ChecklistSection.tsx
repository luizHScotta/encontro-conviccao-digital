
import React from 'react';
import { Check } from 'lucide-react';

const ChecklistSection = () => {
  const essentialItems = [
    'Rede e corda OU barraca para camping',
    'Papel higiênico',
    'Sabonete e produtos de higiene pessoal',
    'Escova e pasta de dente',
    'Toalha de banho',
    'Roupas para 3 dias (leve roupas confortáveis)',
    'Chinelo ou sandália',
    'Protetor solar',
    'Repelente de insetos',
    'Lanterna ou luz de cabeça',
    'Saco de dormir ou cobertor',
    'Travesseiro ou almofada inflável',
    'Garrafinha de água',
    'Remédios pessoais',
    'Bíblia e material para anotações',
    'Roupas de banho (se houver atividades aquáticas)',
    'Calçado fechado para trilhas',
    'Mochila ou bolsa para passeios',
    'Documentos pessoais (RG/CPF)',
    'Dinheiro para emergências e lanche extra'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-lilac/20 to-electric-purple/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-5xl md:text-6xl text-electric-purple mb-6">
              O QUE LEVAR
              <br />
              <span className="text-peach-gold">PARA O RETIRO?</span>
            </h2>
            <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto">
              Preparamos uma lista completa para você não esquecer nada importante 
              e aproveitar ao máximo essa experiência transformadora!
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {essentialItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl hover:bg-lilac/10 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-electric-purple rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="font-body text-gray-700 text-lg leading-relaxed group-hover:text-electric-purple transition-colors duration-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-peach-gold/10 rounded-2xl border-2 border-peach-gold/30">
              <h3 className="font-display font-bold text-electric-purple text-xl mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Dica Importante
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                <strong>Venha com o coração aberto!</strong> O mais importante não está na bagagem, 
                mas na disposição para viver momentos únicos com Deus e fazer amizades eternas. 
                Em caso de dúvidas sobre itens específicos, entre em contato conosco!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
