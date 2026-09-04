import * as React from "react";
import Image from "next/image";
import { Sparkles, HeartHandshake, Utensils, CheckCircle2 } from "lucide-react";

export function StorySection() {
  const highlights = [
    "Uncompromising selection of top-grade Arabica beans roasted for peak sweetness.",
    "Time-honored family recipes seasoned with authentic local herbs and aromatic spices.",
    "Welcoming spaces tailored for family dinners, quiet coffee catch-ups, and celebrations.",
    "Warm hospitality where every customer is treated like family.",
  ];

  return (
    <section id="story" className="py-24 bg-[#FAF3E0] relative border-y border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Two Layered Images) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Card: Cafe Interior */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFDF9] z-10">
                <Image
                  src="/assets/images/cafe-interior.webp"
                  alt="Pelita Cafe Interior Ambience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Front Overlapping Card: Chef Crafting Dish */}
              <div className="relative -mt-20 ml-auto w-3/4 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF9] z-20">
                <Image
                  src="/assets/images/chef-story.webp"
                  alt="Pelita Cafe Culinary Craft"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 380px"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 left-4 bg-roast text-canvas-subtle p-5 rounded-2xl shadow-xl max-w-xs z-30 border border-espresso-700">
                <p className="font-serif italic text-sm text-caramel">
                  “You’ll never eat alone at Pelita Cafe.”
                </p>
                <p className="text-[11px] text-canvas-subtle/70 mt-1 uppercase tracking-wider">
                  — The Pelita Heritage Promise
                </p>
              </div>
            </div>
          </div>

          {/* Story & Philosophy Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Some Words About Us</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight leading-tight">
              Where comfort food meets a vibrant boutique roastery.
            </h2>

            <div className="space-y-4 text-espresso/80 leading-relaxed font-light text-base">
              <p>
                <strong className="text-espresso font-medium">Dear valued customers,</strong> we are thrilled to have the opportunity to serve you here at Pelita Cafe. We take immense pride in preparing each and every plate and brew with the utmost care and attention to detail.
              </p>
              <p>
                Using only the freshest and highest quality ingredients, we strive to create dishes that not only satisfy your appetite but tantalize your taste buds. Whether you’re stopping by for a velvety Spanish Latte, sharing a fragrant platter of Nasi Ayam Pelita, or craving wok-seared Kuey Teow, our kitchen is continuously dedicated to elevating your dining experience.
              </p>
            </div>

            {/* Checklist Highlights */}
            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <span className="text-sm text-espresso/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <p className="font-serif text-2xl font-bold text-espresso">100%</p>
                <p className="text-xs text-espresso/60 uppercase tracking-wider">Halal Ingredients</p>
              </div>
              <div className="h-8 w-px bg-espresso/15" />
              <div>
                <p className="font-serif text-2xl font-bold text-espresso">Handcrafted</p>
                <p className="text-xs text-espresso/60 uppercase tracking-wider">Every Dish & Cup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
