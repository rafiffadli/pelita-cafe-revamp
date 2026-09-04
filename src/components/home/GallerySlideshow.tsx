"use client";

import * as React from "react";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/data";
import { GalleryPhoto } from "@/types";
import { 
  Maximize2, 
  X, 
  Camera, 
  Play, 
  Pause, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function GallerySlideshow() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<GalleryPhoto | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const [scrollSpeed, setScrollSpeed] = React.useState<"normal" | "slow">("normal");
  const trackRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // We duplicate the photos array to make an endless seamless infinite marquee
  const seamlessPhotos = React.useMemo(() => {
    return [...GALLERY_PHOTOS, ...GALLERY_PHOTOS];
  }, []);

  const handleManualNudge = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const distance = 340;
    containerRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section 
      id="gallery" 
      className="py-24 bg-[#FFF9EE] relative overflow-hidden border-t border-espresso/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/20 text-roast text-xs font-semibold tracking-wider uppercase">
              <Camera className="w-3.5 h-3.5 text-espresso" />
              <span>Live Cafe Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight">
              Inside Pelita Cafe
            </h2>
            <p className="text-espresso/70 text-sm sm:text-base max-w-xl font-light">
              Automatic continuous slideshow showcasing our freshly pulled roasts, comforting dishes, and boutique dining spaces.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="flex items-center flex-wrap gap-3">
            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-espresso/20 bg-[#FFFDF9] text-espresso hover:bg-espresso hover:text-[#FFF9EE] text-xs font-medium transition-all shadow-sm active:scale-95"
              aria-label={isPaused ? "Resume auto slideshow" : "Pause auto slideshow"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume Auto-Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause Slideshow</span>
                </>
              )}
            </button>

            {/* Speed Toggle */}
            <button
              onClick={() => setScrollSpeed(scrollSpeed === "normal" ? "slow" : "normal")}
              className="px-3.5 py-2 rounded-full border border-espresso/15 bg-[#FFFDF9] text-espresso/80 hover:text-espresso text-xs font-medium transition-colors"
            >
              Speed: <span className="font-semibold capitalize text-terracotta">{scrollSpeed}</span>
            </button>

            {/* Quick Nudge Buttons */}
            <div className="flex items-center gap-1.5 ml-1">
              <button
                onClick={() => handleManualNudge("left")}
                aria-label="Nudge left"
                className="w-9 h-9 rounded-full border border-espresso/20 bg-[#FFFDF9] text-espresso hover:bg-espresso hover:text-[#FFF9EE] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleManualNudge("right")}
                aria-label="Nudge right"
                className="w-9 h-9 rounded-full border border-espresso/20 bg-[#FFFDF9] text-espresso hover:bg-espresso hover:text-[#FFF9EE] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Continuous Strip Container */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-x-auto no-scrollbar py-4"
      >
        {/* Soft edge fade masks for high-end boutique feel */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FFF9EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FFF9EE] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div 
          ref={trackRef}
          className={`animate-gallery-scroll ${isPaused ? "animate-gallery-scroll-paused" : ""}`}
          style={{
            animationDuration: scrollSpeed === "slow" ? "65s" : "38s",
          }}
        >
          {seamlessPhotos.map((photo, idx) => (
            <div
              key={`${photo.id}-${idx}`}
              className="w-72 sm:w-80 lg:w-96 shrink-0 px-3 select-none"
            >
              <div
                onClick={() => setSelectedPhoto(photo)}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-espresso/10 cursor-pointer shadow-card hover:shadow-elevated transition-all duration-300 border border-espresso/10"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-roast/90 via-roast/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#FFFDF9]/90 text-espresso backdrop-blur-md shadow-sm">
                    {photo.category}
                  </span>
                </div>

                {/* Expand Icon Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-roast/60 text-canvas-subtle flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Card Copy */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-canvas-subtle leading-snug">
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

      {/* Helper hint */}
      <div className="text-center mt-6 text-xs text-espresso/50 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-caramel" />
        <span>Hover over any slide to pause the auto-slideshow • Click any photo to enlarge</span>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-roast/90 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-espresso/20">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-roast/80 text-canvas-subtle hover:bg-roast flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close photo view"
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
