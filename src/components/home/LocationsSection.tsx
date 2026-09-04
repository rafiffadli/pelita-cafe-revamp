"use client";

import * as React from "react";
import Image from "next/image";
import { BRANCHES, BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Check, 
  Store,
  CalendarCheck
} from "lucide-react";

export function LocationsSection() {
  return (
    <section id="branches" className="py-24 bg-[#FFF9EE] relative border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/20 text-roast text-xs font-semibold tracking-wider uppercase">
            <Store className="w-3.5 h-3.5 text-espresso" />
            <span>Visit Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight">
            Our Two Coffee Destinations
          </h2>
          <p className="text-espresso/75 text-sm sm:text-base font-light">
            Whether in our flagship roastery at Salak Tinggi Sepang or our dinner lounge at Presint 15 Putrajaya, exceptional flavors await.
          </p>
        </div>

        {/* Dual Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-espresso/15 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              {/* Branch Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-espresso/5">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 580px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roast/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-caramel text-roast">
                    {branch.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-canvas-subtle mt-2">
                    {branch.name}
                  </h3>
                </div>
              </div>

              {/* Branch Information */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-espresso/60">
                        Address
                      </p>
                      <p className="text-sm font-medium text-espresso mt-0.5 leading-relaxed">
                        {branch.fullAddress}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-espresso/60">
                        Operating Hours
                      </p>
                      <p className="text-sm font-medium text-espresso mt-0.5">
                        {branch.hours}
                      </p>
                      <p className="text-xs text-amber-700 font-semibold mt-0.5">
                        {branch.closingDay}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-espresso/60">
                        Contact / Booking
                      </p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-sm font-medium text-espresso hover:text-terracotta transition-colors mt-0.5 block"
                      >
                        {branch.displayPhone}
                      </a>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-espresso/60 mb-2">
                      Branch Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {branch.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso/5 text-xs text-espresso/80 font-medium"
                        >
                          <Check className="w-3 h-3 text-terracotta" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-espresso/10 flex flex-wrap items-center gap-3">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-espresso/20 hover:border-espresso text-espresso"
                    >
                      <Navigation className="w-4 h-4 text-terracotta" />
                      Google Maps
                    </Button>
                  </a>

                  <a href="#reserve" className="flex-1">
                    <Button variant="burgundy" className="w-full gap-2">
                      <CalendarCheck className="w-4 h-4" />
                      Reserve Here
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
