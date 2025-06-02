
import React from 'react';

const ScheduleSection = () => {
  const schedule = [
    {
      day: 'SEXTA',
      date: '15/03',
      events: [
        { time: '19:00', title: 'Check-in & Boas-vindas', description: 'Chegada, acomodação e primeiro contato com o grupo' },
        { time: '20:30', title: 'Abertura & Louvor', description: 'Momento especial de adoração para abrir o retiro' },
        { time: '22:00', title: 'Integração & Lanche', description: 'Dinâmicas de quebra-gelo e confraternização' }
      ]
    },
    {
      day: 'SÁBADO',
      date: '16/03',
      events: [
        { time: '07:00', title: 'Devocional Matinal', description: 'Momento pessoal com Deus ao nascer do sol' },
        { time: '08:30', title: 'Café da Manhã', description: 'Refeição em comunhão' },
        { time: '10:00', title: 'Ministração I', description: '"Identidade em Cristo" - Pastor João Silva' },
        { time: '12:00', title: 'Almoço', description: 'Tempo de descanso e comunhão' },
        { time: '14:00', title: 'Gincana & Atividades', description: 'Jogos, desafios e muita diversão' },
        { time: '16:30', title: 'Ministração II', description: '"Propósito e Chamado" - Pastora Maria Santos' },
        { time: '19:00', title: 'Jantar', description: 'Refeição especial em comunidade' },
        { time: '21:00', title: 'Noite de Adoração', description: 'Momento profundo de louvor sob as estrelas' }
      ]
    },
    {
      day: 'DOMINGO',
      date: '17/03',
      events: [
        { time: '07:30', title: 'Devocional & Oração', description: 'Tempo de intimidade com Deus' },
        { time: '09:00', title: 'Café da Manhã', description: 'Última refeição juntos' },
        { time: '10:30', title: 'Ministração Final', description: '"Vivendo a Transformação" - Pastor Carlos Lima' },
        { time: '12:00', title: 'Testemunhos & Despedida', description: 'Compartilhamento das experiências vividas' },
        { time: '13:30', title: 'Encerramento', description: 'Oração final e partida' }
      ]
    }
  ];

  return (
    <section id="programacao" className="py-20 bg-gradient-to-br from-electric-purple to-lilac">
      <div className="container mx-auto px-4">
        <h2 className="font-display font-black text-white text-[clamp(2.5rem,6vw,4rem)] text-center mb-4 leading-tight">
          PROGRA
          <span className="block text-peach-gold">MAÇÃO</span>
        </h2>
        
        <p className="text-center text-white/90 font-body text-lg mb-16 max-w-2xl mx-auto">
          Três dias cuidadosamente planejados para uma experiência transformadora. 
          Cada momento foi pensado para seu crescimento espiritual.
        </p>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={day.day} className={`flex flex-col lg:flex-row gap-8 ${dayIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Day Header */}
              <div className="lg:w-1/3 flex flex-col items-center lg:items-start justify-center">
                <div className={`p-8 rounded-3xl ${dayIndex % 2 === 0 ? 'bg-white text-electric-purple' : 'bg-electric-purple text-white border-4 border-white'} shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                  <h3 className="font-display font-black text-[clamp(2rem,5vw,3rem)] leading-none">
                    {day.day}
                  </h3>
                  <p className="font-body font-semibold text-[clamp(1.2rem,3vw,1.5rem)] opacity-80">
                    {day.date}
                  </p>
                </div>
              </div>

              {/* Events */}
              <div className="lg:w-2/3 space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                      dayIndex % 2 === 0 
                        ? 'bg-white text-gray-800' 
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className={`text-[clamp(1.5rem,4vw,2.5rem)] font-display font-black ${
                        dayIndex % 2 === 0 ? 'text-electric-purple' : 'text-peach-gold'
                      } min-w-fit`}>
                        {event.time}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-body font-bold text-lg mb-1 ${
                          dayIndex % 2 === 0 ? 'text-gray-800' : 'text-white'
                        }`}>
                          {event.title}
                        </h4>
                        <p className={`font-body ${
                          dayIndex % 2 === 0 ? 'text-gray-600' : 'text-white/80'
                        }`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
