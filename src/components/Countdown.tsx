
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      } else {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r from-electric-purple to-lilac p-8 rounded-2xl shadow-xl mb-12">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-2">
          CONTAGEM REGRESSIVA
        </h3>
        <p className="text-white/90 font-body text-lg">
          Para o Retiro Encontro & Convicção 2026
        </p>
      </div>
      
      <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.months.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white/90 text-sm uppercase tracking-wide">
            Meses
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white/90 text-sm uppercase tracking-wide">
            Dias
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white/90 text-sm uppercase tracking-wide">
            Horas
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white/90 text-sm uppercase tracking-wide">
            Minutos
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="font-display font-black text-2xl md:text-3xl text-white">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="font-body text-white/90 text-sm uppercase tracking-wide">
            Segundos
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
