"use client";

import * as React from "react";
import Image from "next/image";
import { MENU_ITEMS, BRAND_INFO } from "@/lib/data";
import { MenuCategory, MenuItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Flame, 
  Coffee, 
  BookOpen, 
  Sparkles, 
  MessageCircle,
  Clock 
} from "lucide-react";

interface MenuSectionProps {
  onOpenMenuModal: () => void;
}

export function MenuSection({ onOpenMenuModal }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = React.useState<MenuCategory>("all");

  const categories: { key: MenuCategory; label: string }[] = [
    { key: "all", label: "All Offerings" },
    { key: "signature", label: "Signature Meals" },
    { key: "coffee", label: "Premium Coffee" },
    { key: "wok", label: "Wok Specialties" },
    { key: "allday", label: "All Day Menu" },
    { key: "bites", label: "Light Bites" },
  ];

  const filteredItems = activeCategory === "all" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FAF3E0] relative border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Top Action */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Kitchen & Specialty Bar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight">
            Curated Menu Selections
          </h2>
          <p className="text-espresso/75 text-sm sm:text-base font-light">
            Every dish is cooked fresh to order with authentic spices, and each coffee brew is extracted with meticulous craft.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-espresso text-[#FFF9EE] shadow-md scale-105"
                  : "bg-[#FFFDF9] text-espresso/80 hover:bg-espresso/10 border border-espresso/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FFFDF9] rounded-2xl overflow-hidden border border-espresso/10 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-espresso/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Badge tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-terracotta text-[#FFF9EE] shadow-sm">
                      {item.badge}
                    </span>
                  )}
                  {item.isSpicy && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white flex items-center gap-1">
                      <Flame className="w-3 h-3" /> Spicy
                    </span>
                  )}
                </div>

                {item.temperature && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-roast/80 text-caramel backdrop-blur-sm">
                      {item.temperature}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif font-bold text-base text-terracotta shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-espresso/70 leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-espresso/10 flex items-center justify-between">
                  <span className="text-[11px] text-espresso/60 capitalize font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-caramel" /> Made to order
                  </span>

                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Hi%20Pelita%20Cafe%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-espresso hover:text-terracotta font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                    Quick Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Book Banner Callout */}
        <div className="mt-16 rounded-3xl bg-roast text-canvas-subtle p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-espresso-700">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-caramel/20 text-caramel">
                Complete 9-Page Catalog
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-canvas-subtle">
                Want to explore the complete printed menu?
              </h3>
              <p className="text-sm text-canvas-subtle/75 font-light">
                Browse through all breakfast toasts, wok noodles, fresh juices, signature omelette series, and barista specialties in our interactive menu book.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                variant="gold"
                size="lg"
                onClick={onOpenMenuModal}
                className="gap-2 text-roast font-semibold"
              >
                <BookOpen className="w-5 h-5" />
                Browse Full Menu Book
              </Button>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full text-canvas-subtle border-canvas-subtle/30 hover:bg-canvas-subtle hover:text-roast">
                  Chat With Barista
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
