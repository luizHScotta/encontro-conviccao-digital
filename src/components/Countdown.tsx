
import React from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white rounded-2xl shadow-xl mb-12 p-8 border-4 border-electric-purple">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-electric-purple text-2xl md:text-3xl mb-2">
          CONTAGEM REGRESSIVA
        </h3>
        <p className="text-gray-600 font-body text-lg">
          Para o Retiro Encontro & Convicção 2026
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4 max-w-xs md:max-w-2xl mx-auto">
        <div className="bg-electric-purple rounded-xl p-4 text-center shadow-lg min-w-[140px] flex flex-col items-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white text-base md:text-sm uppercase tracking-wide">
            Dias
          </div>
        </div>
        <div className="bg-electric-purple rounded-xl p-4 text-center shadow-lg min-w-[140px] flex flex-col items-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white text-base md:text-sm uppercase tracking-wide">
            Horas
          </div>
        </div>
        <div className="bg-electric-purple rounded-xl p-4 text-center shadow-lg min-w-[140px] flex flex-col items-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white text-base md:text-sm uppercase tracking-wide">
            Minutos
          </div>
        </div>
        <div className="bg-electric-purple rounded-xl p-4 text-center shadow-lg min-w-[140px] flex flex-col items-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white text-base md:text-sm uppercase tracking-wide">
            Segundos
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
