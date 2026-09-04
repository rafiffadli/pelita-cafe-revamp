"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StorySection } from "@/components/home/StorySection";
import { GallerySlideshow } from "@/components/home/GallerySlideshow";
import { MenuSection } from "@/components/home/MenuSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ReservationSection } from "@/components/home/ReservationSection";
import { MenuBookModal } from "@/components/home/MenuBookModal";

export default function HomePage() {
  const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EE] text-[#241811]">
      {/* Global Header Navigation */}
      <Navbar onOpenMenuModal={() => setIsMenuModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <HeroSection onOpenMenuModal={() => setIsMenuModalOpen(true)} />
        <StorySection />
        <GallerySlideshow />
        <MenuSection onOpenMenuModal={() => setIsMenuModalOpen(true)} />
        <LocationsSection />
        <TestimonialsSection />
        <ReservationSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Full 9-Page Menu Book Modal */}
      <MenuBookModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />
    </div>
  );
}
