"use client";

import * as React from "react";
import Image from "next/image";
import { MENU_BOOK_PAGES, BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Maximize2, 
  MessageCircle 
} from "lucide-react";

interface MenuBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuBookModal({ isOpen, onClose }: MenuBookModalProps) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = MENU_BOOK_PAGES.length;

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setCurrentPage((prev) => Math.max(0, prev - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, totalPages]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-roast/90 backdrop-blur-md p-2 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-espresso/20 flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-espresso/10 bg-[#FAF3E0]">
          <div>
            <span className="text-xs uppercase tracking-wider text-terracotta font-semibold">
              Official Printed Catalog
            </span>
            <h3 className="font-serif text-xl font-bold text-espresso">
              Pelita Cafe Menu Book
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-espresso/70 bg-espresso/10 px-3 py-1 rounded-full">
              Page {currentPage + 1} of {totalPages}
            </span>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Hi%20Pelita%20Cafe%2C%20I%20have%20a%20question%20about%20your%20menu.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block"
            >
              <Button variant="burgundy" size="sm" className="gap-1.5 text-xs">
                <MessageCircle className="w-3.5 h-3.5" /> Order via WhatsApp
              </Button>
            </a>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-espresso/10 text-espresso hover:bg-espresso hover:text-[#FFF9EE] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close menu viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Viewer Stage */}
        <div className="relative flex-1 bg-roast-surface flex items-center justify-center p-4 overflow-hidden">
          {/* Previous Page Tap */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-[#FFFDF9]/90 text-espresso hover:bg-[#FFFDF9] flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-xl"
            aria-label="Previous menu page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Page Image */}
          <div className="relative w-full h-full max-w-2xl mx-auto flex items-center justify-center">
            <Image
              src={MENU_BOOK_PAGES[currentPage]}
              alt={`Pelita Cafe Menu Page ${currentPage + 1}`}
              fill
              priority
              className="object-contain drop-shadow-2xl rounded-lg"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Next Page Tap */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-[#FFFDF9]/90 text-espresso hover:bg-[#FFFDF9] flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-xl"
            aria-label="Next menu page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="px-6 py-3 bg-[#FAF3E0] border-t border-espresso/10 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {MENU_BOOK_PAGES.map((page, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`relative w-12 h-16 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                  currentPage === idx
                    ? "border-terracotta scale-105 shadow-md"
                    : "border-espresso/20 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={page}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </button>
            ))}
          </div>

          <p className="text-xs text-espresso/60 shrink-0 hidden md:block">
            Use arrow keys or click thumbnails to jump
          </p>
        </div>
      </div>
    </div>
  );
}
