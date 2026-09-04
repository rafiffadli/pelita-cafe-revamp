"use client";

import * as React from "react";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/data";
import { GalleryPhoto } from "@/types";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Camera, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function GallerySlideshow() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedPhoto, setSelectedPhoto] = React.useState<GalleryPhoto | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  // We show up to 4 items in desktop viewport, 2 in tablet, 1 in mobile
  const total = GALLERY_PHOTOS.length;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay feature like Sama Sama Cuisine's continual carousel
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      id="gallery" 
      className="py-24 bg-[#FFF9EE] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/20 text-roast text-xs font-semibold tracking-wider uppercase">
              <Camera className="w-3.5 h-3.5 text-espresso" />
              <span>Inside Pelita Cafe</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight">
              Atmosphere & Moments
            </h2>
            <p className="text-espresso/70 text-sm sm:text-base max-w-xl font-light">
              A visual glimpse into our daily roasts, artisanal kitchen creations, and welcoming community spaces.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous gallery slide"
              className="w-12 h-12 rounded-full border border-espresso/20 bg-[#FFFDF9] text-espresso hover:bg-espresso hover:text-[#FFF9EE] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next gallery slide"
              className="w-12 h-12 rounded-full border border-espresso/20 bg-[#FFFDF9] text-espresso hover:bg-espresso hover:text-[#FFF9EE] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative overflow-hidden rounded-3xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 3))}%)`,
            }}
          >
            {GALLERY_PHOTOS.concat(GALLERY_PHOTOS).map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
              >
                <div 
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-espresso/5 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-roast/90 via-roast/30 to-transparent opacity-80 sm:opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#FFFDF9]/90 text-espresso backdrop-blur-md">
                      {photo.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-roast/60 text-[#FFF9EE] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-lg font-bold text-canvas-subtle">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-canvas-subtle/80 mt-1 line-clamp-2 font-light">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {GALLERY_PHOTOS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex % total
                  ? "w-8 bg-terracotta"
                  : "w-2 bg-espresso/20 hover:bg-espresso/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-roast/90 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-espresso/20">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-roast/80 text-canvas-subtle hover:bg-roast flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-roast">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>

            <div className="p-6 bg-[#FFFDF9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-terracotta font-semibold">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-espresso mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-espresso/70 mt-1 font-light">
                  {selectedPhoto.subtitle}
                </p>
              </div>

              <a
                href="#reserve"
                onClick={() => setSelectedPhoto(null)}
              >
                <Button variant="burgundy" size="sm">
                  Visit & Dine With Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
