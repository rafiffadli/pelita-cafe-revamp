"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, type ReservationFormValues } from "@/lib/schema";
import { BRAND_INFO, BRANCHES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  PhoneCall,
  Send
} from "lucide-react";

export function ReservationSection() {
  const [submittedData, setSubmittedData] = React.useState<ReservationFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      branch: "sepang",
      serviceType: "table",
      guests: 2,
    },
  });

  const onSubmit = async (data: ReservationFormValues) => {
    // Simulate API processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedData(data);
    reset();
  };

  const generateWhatsAppHref = (data: ReservationFormValues) => {
    const branchName = data.branch === "sepang" ? "Pelita Cafe Sepang" : "Pelita Cafe Putrajaya";
    const serviceLabel = 
      data.serviceType === "table" ? "Table Reservation" :
      data.serviceType === "private-event" ? "Private Event / Celebration" : "Catering Inquiry";

    const msg = `*New ${serviceLabel} Submission*%0A%0A` +
      `*Name:* ${encodeURIComponent(data.fullName)}%0A` +
      `*Branch:* ${encodeURIComponent(branchName)}%0A` +
      `*Phone:* ${encodeURIComponent(data.phone)}%0A` +
      `*Email:* ${encodeURIComponent(data.email)}%0A` +
      `*Guests:* ${data.guests} pax%0A` +
      `*Date:* ${encodeURIComponent(data.date)}%0A` +
      `*Time:* ${encodeURIComponent(data.time)}%0A` +
      (data.notes ? `*Notes:* ${encodeURIComponent(data.notes)}%0A` : "");

    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${msg}`;
  };

  return (
    <section id="reserve" className="py-24 bg-[#FFF9EE] relative border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Context & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Host Your Occasion</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight leading-tight">
              Reserve a table or celebrate with us.
            </h2>

            <p className="text-espresso/80 text-sm sm:text-base leading-relaxed font-light">
              We would be delighted to host your special event at our cafe! Our team is dedicated to providing you with exceptional service and delicious food that will make your celebration truly unforgettable.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 pt-4 border-t border-espresso/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-caramel/20 text-roast flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-espresso">
                    Intimate & Group Dining
                  </h4>
                  <p className="text-xs text-espresso/70 leading-relaxed">
                    Casual tables from 2 to 12 guests with no reservation deposit required for standard dining.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-caramel/20 text-roast flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-espresso">
                    Birthdays & Private Celebrations
                  </h4>
                  <p className="text-xs text-espresso/70 leading-relaxed">
                    Dedicated event packages, custom buffet arrangements, and sound/microphone setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-caramel/20 text-roast flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-espresso">
                    Direct WhatsApp Confirmation
                  </h4>
                  <p className="text-xs text-espresso/70 leading-relaxed">
                    Instant sync with our duty floor manager to lock in your requested time slot without delay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-espresso/15 shadow-xl">
              {submittedData ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-espresso">
                    Thank You, {submittedData.fullName}!
                  </h3>

                  <p className="text-sm text-espresso/80 max-w-md mx-auto leading-relaxed">
                    Your reservation request for <strong>{submittedData.guests} guests</strong> on <strong>{submittedData.date}</strong> at <strong>{submittedData.time}</strong> has been logged.
                  </p>

                  <div className="p-4 bg-[#FAF3E0] rounded-2xl border border-espresso/10 text-xs text-espresso/80 max-w-md mx-auto text-left space-y-1">
                    <p><strong>Branch:</strong> {submittedData.branch === "sepang" ? "Pelita Cafe Sepang" : "Pelita Cafe Putrajaya"}</p>
                    <p><strong>Service:</strong> {submittedData.serviceType}</p>
                    <p><strong>Contact:</strong> {submittedData.phone} • {submittedData.email}</p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppHref(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button variant="burgundy" className="w-full gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Confirm Instantly via WhatsApp
                      </Button>
                    </a>

                    <Button
                      variant="outline"
                      onClick={() => setSubmittedData(null)}
                      className="w-full sm:w-auto"
                    >
                      Make Another Booking
                    </Button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="border-b border-espresso/10 pb-4">
                    <h3 className="font-serif text-2xl font-bold text-espresso">
                      Table & Event Booking
                    </h3>
                    <p className="text-xs text-espresso/70 mt-1">
                      Fill in your details below and our team will get in touch promptly.
                    </p>
                  </div>

                  {/* Service Type Radio / Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                      Reservation Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: "table", label: "Table Dining" },
                        { id: "private-event", label: "Private Event" },
                        { id: "catering", label: "Catering Inquiry" },
                      ].map((type) => (
                        <label
                          key={type.id}
                          className="flex items-center gap-2 p-3 rounded-xl border border-espresso/15 bg-canvas-subtle/40 hover:bg-canvas-subtle cursor-pointer text-xs font-medium text-espresso transition-colors"
                        >
                          <input
                            type="radio"
                            value={type.id}
                            {...register("serviceType")}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>{type.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.serviceType && (
                      <p className="text-xs text-red-600">{errors.serviceType.message}</p>
                    )}
                  </div>

                  {/* Branch Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                      Choose Branch
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-center gap-3 p-3.5 rounded-xl border border-espresso/15 bg-canvas-subtle/40 hover:bg-canvas-subtle cursor-pointer text-xs font-medium text-espresso transition-colors">
                        <input
                          type="radio"
                          value="sepang"
                          {...register("branch")}
                          className="text-terracotta focus:ring-terracotta"
                        />
                        <div>
                          <p className="font-semibold text-sm">Pelita Cafe Sepang</p>
                          <p className="text-[11px] text-espresso/60">Bandar Baru Salak Tinggi</p>
                        </div>
                      </label>

                      <label className="flex items-center gap-3 p-3.5 rounded-xl border border-espresso/15 bg-canvas-subtle/40 hover:bg-canvas-subtle cursor-pointer text-xs font-medium text-espresso transition-colors">
                        <input
                          type="radio"
                          value="putrajaya"
                          {...register("branch")}
                          className="text-terracotta focus:ring-terracotta"
                        />
                        <div>
                          <p className="font-semibold text-sm">Pelita Cafe Putrajaya</p>
                          <p className="text-[11px] text-espresso/60">Presint 15 Diplomatik</p>
                        </div>
                      </label>
                    </div>
                    {errors.branch && (
                      <p className="text-xs text-red-600">{errors.branch.message}</p>
                    )}
                  </div>

                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                        Full Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ariff Fikri"
                        {...register("fullName")}
                        className="w-full bg-[#FFF9EE] border border-espresso/20 rounded-xl px-4 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                        Phone / WhatsApp <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 012-337 7807"
                        {...register("phone")}
                        className="w-full bg-[#FFF9EE] border border-espresso/20 rounded-xl px-4 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                        Email Address <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        {...register("email")}
                        className="w-full bg-[#FFF9EE] border border-espresso/20 rounded-xl px-4 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                        Number of Guests <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="120"
                        placeholder="2"
                        {...register("guests")}
                        className="w-full bg-[#FFF9EE] border border-espresso/20 rounded-xl px-4 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
                      />
                      {errors.guests && (
                        <p className="text-xs text-red-600">{errors.guests.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                        Preferred Date <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="date"
                        {...register("date")}
                        className="w-full bg-[#FFF9EE] border border-espresso/20 rounded-xl px-4 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
                      />
                      {errors.date && (
                        <p className="text-xs text-red-600">{errors.date.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                        Time Slot <span className="text-terracotta">*</span>
                      </label>
                      <select
                        {...register("time")}
                        className="w-full bg-[#FFF9EE] border border-espresso/20 rounded-xl px-4 py-2.5 text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent"
                      >
                        <option value="">Select a time slot</option>
                        <option value="09:00 AM">09:00 AM (Breakfast / Morning Roast)</option>
                        <option value="11:30 AM">11:30 AM (Lunch Rush)</option>
                        <option value="01:00 PM">01:00 PM (Afternoon Lunch)</option>
                        <option value="03:30 PM">03:30 PM (Tea Time & Coffee)</option>
                        <option value="05:30 PM">05:30 PM (Early Dinner)</option>
                        <option value="07:00 PM">07:00 PM (Dinner Rush)</option>
                        <option value="08:30 PM">08:30 PM (Evening Lounge - Putrajaya only)</option>
                      </select>
                      {errors.time && (
                        <p className="text-xs text-red-600">{errors.time.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-espresso">
                      Special Requests / Dietary Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="E.g., High chair needed, celebration cake arrangement, spicy tolerance preferences..."
                      {...register("notes")}
                      className="w-full bg-[#FFF9EE] border border-espresso/20 rounded-xl p-4 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-espresso focus:border-transparent resize-none"
                    />
                    {errors.notes && (
                      <p className="text-xs text-red-600">{errors.notes.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="burgundy"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full py-4 text-base font-semibold shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Reservation
                  </Button>

                  <p className="text-[11px] text-center text-espresso/60 font-light">
                    Your reservation will be confirmed via phone or WhatsApp by our manager within 30 minutes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
