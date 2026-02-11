// components/ui/image-carousel.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  imageClassName?: string;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  className,
  imageClassName,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlay) setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) setIsAutoPlaying(true);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Image Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={image.src}
                alt={image.alt}
                className={cn("w-full h-auto object-cover", imageClassName)}
              />
              {/* Overlay with title and description */}
              {(image.title || image.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <div className="max-w-2xl mx-auto">
                    {image.title && (
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    )}
                    {image.description && (
                      <p className="text-lg opacity-90">{image.description}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Auto-play toggle button */}
      {autoPlay && (
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          aria-label={isAutoPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      )}

      {/* Dots Indicator */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70",
              )}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
