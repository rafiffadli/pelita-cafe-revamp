"use client";

import * as React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = React.useState(0);

  const nextReview = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-[#FAF3E0] relative border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold tracking-wider uppercase">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Customer Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight">
            Real Feedback, Real Flavour
          </h2>
          <p className="text-espresso/75 text-sm sm:text-base font-light">
            Read what guests have to say about our signature coffee brews, wok flavors, and warm dining atmosphere.
          </p>
        </div>

        {/* Grid of Reviews on Desktop / Slider on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-espresso/10 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-espresso/80 font-light leading-relaxed italic">
                  “{t.comment}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-4 border-t border-espresso/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-espresso">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-espresso/60">{t.role}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-caramel/20 text-roast">
                  {t.branch.replace(" Branch", "")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
