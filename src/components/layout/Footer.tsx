"use client";

import * as React from "react";
import Image from "next/image";
import { BRAND_INFO, BRANCHES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Facebook, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/schema";

export function Footer() {
  const [subscribed, setSubscribed] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubscribed(true);
    reset();
  };

  return (
    <footer className="bg-roast text-canvas-subtle border-t border-espresso-800">
      {/* Upper Footer: Branches & Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info & Mission */}
          <div className="space-y-4">
            <div className="relative w-44 h-12">
              <Image
                src={BRAND_INFO.logoWhite}
                alt="Pelita Cafe"
                fill
                className="object-contain"
                sizes="176px"
              />
            </div>
            <p className="text-canvas-subtle/70 text-sm leading-relaxed">
              {BRAND_INFO.shortDescription}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-700/50 hover:bg-caramel hover:text-roast flex items-center justify-center transition-all"
                aria-label="Follow Pelita Cafe on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-700/50 hover:bg-caramel hover:text-roast flex items-center justify-center transition-all"
                aria-label="Follow Pelita Cafe on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sepang Branch */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-caramel">
              <MapPin className="w-4 h-4 text-caramel" />
              <h4 className="font-serif font-semibold text-lg text-canvas-subtle">
                Sepang Branch
              </h4>
            </div>
            <p className="text-xs text-canvas-subtle/70 leading-relaxed">
              {BRANCHES[0].fullAddress}
            </p>
            <div className="space-y-1 text-xs text-canvas-subtle/60 pt-1">
              <p className="flex items-center gap-1.5 text-caramel/90 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {BRANCHES[0].hours}
              </p>
              <p className="text-amber-300/80 font-medium pl-5">
                {BRANCHES[0].closingDay}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={BRANCHES[0].mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-caramel hover:underline"
              >
                Get Directions <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Putrajaya Branch */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-caramel">
              <MapPin className="w-4 h-4 text-caramel" />
              <h4 className="font-serif font-semibold text-lg text-canvas-subtle">
                Putrajaya Branch
              </h4>
            </div>
            <p className="text-xs text-canvas-subtle/70 leading-relaxed">
              {BRANCHES[1].fullAddress}
            </p>
            <div className="space-y-1 text-xs text-canvas-subtle/60 pt-1">
              <p className="flex items-center gap-1.5 text-caramel/90 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {BRANCHES[1].hours}
              </p>
              <p className="text-amber-300/80 font-medium pl-5">
                {BRANCHES[1].closingDay}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={BRANCHES[1].mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-caramel hover:underline"
              >
                Get Directions <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Keep In Touch & Newsletter */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-canvas-subtle">
              Keep In Touch
            </h4>
            <p className="text-xs text-canvas-subtle/70 leading-relaxed">
              Subscribe for seasonal coffee releases, weekend special dishes, and private event slots.
            </p>

            {subscribed ? (
              <div className="p-3 bg-espresso-700/40 border border-caramel/30 rounded-xl text-xs text-caramel animate-fade-in">
                Thank you! You are now subscribed to Pelita Cafe updates.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full bg-roast-surface border border-espresso-700 rounded-full px-4 py-2.5 text-xs text-canvas-subtle placeholder-canvas-subtle/40 focus:outline-none focus:border-caramel pr-10"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-caramel text-roast hover:bg-caramel-400 text-xs font-semibold flex items-center justify-center transition-colors disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {errors.email && (
                  <p className="text-[11px] text-red-400 pl-2">
                    {errors.email.message}
                  </p>
                )}
              </form>
            )}

            <div className="pt-2 space-y-1.5 text-xs text-canvas-subtle/70">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-caramel" />
                <a href={`tel:${BRAND_INFO.whatsappNumber}`} className="hover:text-caramel">
                  012-337 7807
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-caramel" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-caramel">
                  {BRAND_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-espresso-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-canvas-subtle/50 gap-4">
          <p>© 2026 {BRAND_INFO.legalName} • All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-caramel transition-colors">Home</a>
            <a href="#gallery" className="hover:text-caramel transition-colors">Gallery</a>
            <a href="#menu" className="hover:text-caramel transition-colors">Menu</a>
            <a href="#reserve" className="hover:text-caramel transition-colors">Reservations</a>
            <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-caramel transition-colors">WhatsApp Concierge</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
