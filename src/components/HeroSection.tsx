import React from 'react';
const HeroSection = () => {
  return <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80">
          {/* Placeholder for video source - add your video file here */}
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80)'
      }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/70 via-electric-purple/60 to-lilac/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-6xl mx-auto px-4">
          {/* Main Title */}
          <h1 className="font-display font-black text-white mb-6">
            <div className="text-[clamp(3rem,8vw,8rem)] leading-none tracking-wider">
              <span className="block">ENCONTRO</span>
              <span className="block text-peach-gold">&</span>
              <span className="block">CONVICÇÃO</span>
            </div>
          </h1>

          {/* Event Details */}
          <div className="mb-8 space-y-2">
            <p className="text-[clamp(1.2rem,3vw,2rem)] font-body font-medium">
          </p>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-body text-white/90">
          </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => document.getElementById('sobre')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-8 py-4 border-2 border-white text-white font-body font-semibold text-lg rounded-full hover:bg-white hover:text-electric-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Saiba mais
            </button>
            <button className="px-8 py-4 bg-electric-purple text-white font-body font-semibold text-lg rounded-full hover:bg-lilac transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-electric-purple">
              Inscreva-se já
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;