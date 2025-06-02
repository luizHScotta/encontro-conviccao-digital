
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentYear, setCurrentYear] = useState<string>('todos');

  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80', year: '2023', alt: 'Momento de louvor ao ar livre' },
    { id: 2, url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', year: '2023', alt: 'Reflexão à beira do lago' },
    { id: 3, url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80', year: '2022', alt: 'Noite de adoração sob as estrelas' },
    { id: 4, url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80', year: '2022', alt: 'Momento de oração pessoal' },
    { id: 5, url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80', year: '2023', alt: 'Gincana de integração' },
    { id: 6, url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', year: '2022', alt: 'Comunhão durante as refeições' },
    { id: 7, url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80', year: '2023', alt: 'Fogueira de encerramento' },
    { id: 8, url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80', year: '2022', alt: 'Workshop de música' }
  ];

  const years = ['todos', '2023', '2022'];
  
  const filteredImages = currentYear === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.year === currentYear);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredImages.length;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : totalImages - 1);
    } else {
      setSelectedImage(currentIndex < totalImages - 1 ? currentIndex + 1 : 0);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display font-black text-electric-purple text-[clamp(2.5rem,6vw,4rem)] text-center mb-4 leading-tight">
          MOMENTOS
          <span className="block text-peach-gold">HISTÓRICOS</span>
        </h2>
        
        <p className="text-center text-gray-600 font-body text-lg mb-12 max-w-2xl mx-auto">
          Reviva os momentos mais marcantes dos nossos retiros. Cada foto conta uma história de 
          transformação, alegria e encontro com Cristo.
        </p>

        {/* Year Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-electric-purple/10 rounded-full p-2 flex gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setCurrentYear(year)}
                className={`px-6 py-2 rounded-full font-body font-semibold transition-all duration-300 ${
                  currentYear === year
                    ? 'bg-electric-purple text-white shadow-lg'
                    : 'text-electric-purple hover:bg-electric-purple/20'
                }`}
              >
                {year === 'todos' ? 'Todos os Anos' : year}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-peach-gold transition-all duration-300 rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="font-body font-medium text-sm">{image.alt}</p>
                <p className="text-peach-gold text-xs">{image.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-peach-gold z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-peach-gold z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-peach-gold z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>

              <img
                src={filteredImages[selectedImage]?.url}
                alt={filteredImages[selectedImage]?.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="font-body font-medium">{filteredImages[selectedImage]?.alt}</p>
                <p className="text-peach-gold text-sm">{filteredImages[selectedImage]?.year}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
