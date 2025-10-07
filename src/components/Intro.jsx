import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../content/Images';

function Intro() {
  const { content } = useLanguage();
  const intro = content?.intro;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [visibleImages, setVisibleImages] = useState(() => {
    // Initialize with correct value based on window size
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 4;
      if (width >= 768) return 3;
      return 2;
    }
    return 4; // Default for SSR
  });
  
  if (!intro) return null;

  const gallery = images.intro.gallery;
  const totalImages = gallery.length;

  // Update visible images count based on screen size
  useEffect(() => {
    const updateVisibleImages = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleImages(4); // lg: 4 images
      } else if (width >= 768) {
        setVisibleImages(3); // md: 3 images
      } else {
        setVisibleImages(2); // mobile: 2 images
      }
    };

    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);
    return () => window.removeEventListener('resize', updateVisibleImages);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index % totalImages);
    setLightboxOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % totalImages);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + totalImages) % totalImages);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale((prev) => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Create an array with 3 copies for infinite scroll effect
  const extendedGallery = [...gallery, ...gallery, ...gallery];
  const startIndex = totalImages + currentIndex;

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Text Content */}
        <div className="mb-12 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-wood-dark md:text-sm">
            {intro.subtitle}
          </p>
          <h2 className="mb-8 text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
            {intro.title}
          </h2>
          
          {/* Icon row with questions */}
          <div className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-6 text-lg text-ink md:gap-8 md:text-xl">
            {intro.questions.map((q, index) => (
              <span 
                key={index} 
                className={`flex items-center gap-2 leading-none ${q.isBold ? 'font-medium' : ''}`}
              >
                <span className="flex items-center">{q.emoji}</span>
                <span>{q.text}</span>
              </span>
            ))}
          </div>
          
          {/* Location description with pin icon */}
          <p className="mx-auto flex max-w-4xl items-center justify-center gap-2 text-base leading-relaxed text-ink-muted md:text-lg">
            <span className="flex items-center text-xl leading-none">📍</span>
            <span>{intro.description}</span>
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-accent p-3 shadow-lg transition hover:bg-accent-strong hover:shadow-xl sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-12"
            aria-label="Previous images"
          >
            <svg className="h-6 w-6 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-accent p-3 shadow-lg transition hover:bg-accent-strong hover:shadow-xl sm:translate-x-2 md:translate-x-4 lg:translate-x-12"
            aria-label="Next images"
          >
            <svg className="h-6 w-6 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${startIndex} * (100% / ${visibleImages})))`,
              }}
            >
              {extendedGallery.map((image, index) => (
                <div
                  key={index}
                  className="w-1/2 flex-shrink-0 px-2 md:w-1/3 lg:w-1/4"
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition hover:shadow-xl"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${(index % totalImages) + 1}`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-line hover:bg-accent/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal - keeping all existing lightbox code unchanged */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95"
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 cursor-pointer rounded-full bg-surface/10 p-2 text-surface backdrop-blur transition hover:bg-surface/20"
            aria-label="Close lightbox"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute left-4 top-4 z-50 flex gap-2">
            <button
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="cursor-pointer rounded-full bg-surface/10 p-2 text-surface backdrop-blur transition hover:bg-surface/20 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Zoom in"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </button>
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="cursor-pointer rounded-full bg-surface/10 p-2 text-surface backdrop-blur transition hover:bg-surface/20 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Zoom out"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM7 10h6" />
              </svg>
            </button>
          </div>

          <div className="absolute left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-surface/10 px-4 py-2 text-sm text-surface backdrop-blur">
            {lightboxIndex + 1} / {totalImages}
          </div>

          <button
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full bg-surface/10 p-3 text-surface backdrop-blur transition hover:bg-surface/20"
            aria-label="Previous image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full bg-surface/10 p-3 text-surface backdrop-blur transition hover:bg-surface/20"
            aria-label="Next image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative flex h-full w-full items-center justify-center p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
              className={`max-h-full max-w-full object-contain ${scale > 1 ? 'cursor-move' : 'cursor-default'}`}
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out'
              }}
              onMouseDown={handleMouseDown}
              draggable={false}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Intro;