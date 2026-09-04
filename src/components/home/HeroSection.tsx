"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BRAND_INFO } from "@/lib/data";
import { UtensilsCrossed, Calendar, MessageCircle, ChevronRight, Award, Flame, Coffee } from "lucide-react";

interface HeroSectionProps {
  onOpenMenuModal: () => void;
}

export function HeroSection({ onOpenMenuModal }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-[#FFF9EE] overflow-hidden pt-12 pb-20">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-caramel/15 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-terracotta/10 rounded-full blur-3xl pointer-events-none -ml-28 -mb-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso/5 border border-espresso/15 text-espresso text-xs font-semibold tracking-wide uppercase">
              <span className="flex h-2 w-2 rounded-full bg-caramel animate-pulse" />
              <span>Boutique Coffee Roaster & Modern Malaysian Cuisine</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso leading-[1.12]">
              Fuel your day with our <span className="text-terracotta italic font-normal">perfect cup</span> of coffee.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-espresso/80 max-w-2xl leading-relaxed font-light">
              Crafted with the finest ingredients as we take you on a flavorful journey unlike any other. From signature roasted single-origin espresso to authentic heritage wok specialties and slow-simmered Nasi Ayam.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                variant="burgundy"
                size="lg"
                onClick={onOpenMenuModal}
                className="gap-2 shadow-lg hover:shadow-xl"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Browse Menu
              </Button>

              <a href="#reserve">
                <Button variant="outline" size="lg" className="gap-2 border-espresso/25 hover:border-espresso">
                  <Calendar className="w-5 h-5 text-espresso" />
                  Reserve Table / Event
                </Button>
              </a>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="gap-2 text-espresso hover:bg-espresso/5">
                  <MessageCircle className="w-5 h-5 text-emerald-700" />
                  Order WhatsApp
                </Button>
              </a>
            </div>

            {/* Social Proof / Key Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-espresso/10 max-w-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-espresso font-serif text-2xl font-bold">
                  <span>2</span>
                  <span className="text-sm font-sans font-medium text-espresso/60">Hubs</span>
                </div>
                <p className="text-xs text-espresso/70">Sepang & Putrajaya</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-espresso font-serif text-2xl font-bold">
                  <Flame className="w-5 h-5 text-terracotta" />
                  <span>Fresh</span>
                </div>
                <p className="text-xs text-espresso/70">Signature Wok-Hei</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-espresso font-serif text-2xl font-bold">
                  <Coffee className="w-5 h-5 text-caramel" />
                  <span>100%</span>
                </div>
                <p className="text-xs text-espresso/70">Specialty Arabica</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF9]">
                <Image
                  src="/assets/images/nasi-ayam-pelita.webp"
                  alt="Signature Nasi Ayam Pelita at Pelita Cafe"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roast/70 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFDF9]/90 backdrop-blur-md border border-espresso/10 text-espresso shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                        Crowd Favorite
                      </p>
                      <h3 className="font-serif font-bold text-lg text-espresso">
                        Nasi Ayam Pelita
                      </h3>
                      <p className="text-xs text-espresso/70">
                        Marinated chicken, golden rice & heritage sambal
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-espresso/60">From</span>
                      <p className="font-serif font-bold text-lg text-terracotta">
                        RM 16.90
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Coffee Badge Card */}
              <div className="absolute -top-6 -left-6 bg-[#FFFDF9] rounded-2xl p-3.5 shadow-xl border border-espresso/10 hidden sm:flex items-center gap-3 animate-slide-up">
                <div className="w-12 h-12 rounded-xl bg-espresso flex items-center justify-center text-caramel shadow-inner">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-espresso/60 font-semibold">
                    House Specialty
                  </p>
                  <p className="font-serif font-bold text-sm text-espresso">
                    Spanish Latte
                  </p>
                  <p className="text-[11px] text-terracotta font-medium">Double Shot Sweet Cream</p>
                </div>
              </div>

              {/* Floating Rating Pill */}
              <div className="absolute -bottom-4 -right-4 bg-roast text-canvas-subtle rounded-2xl px-4 py-3 shadow-xl border border-espresso-700 hidden sm:flex items-center gap-3">
                <div className="flex text-caramel">
                  {"★★★★★"}
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-canvas-subtle">4.9 / 5.0 Rating</p>
                  <p className="text-[10px] text-canvas-subtle/60">Over 1,200+ Regulars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
