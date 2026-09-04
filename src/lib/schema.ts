import { z } from "zod";

export const reservationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name cannot exceed 80 characters"),
  email: z
    .string()
    .email("Please provide a valid email address"),
  phone: z
    .string()
    .min(9, "Phone number must be at least 9 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number (e.g. 012-337 7807)"),
  branch: z.enum(["sepang", "putrajaya"], {
    errorMap: () => ({ message: "Please select a branch" }),
  }),
  serviceType: z.enum(["table", "private-event", "catering"], {
    errorMap: () => ({ message: "Please select a service type" }),
  }),
  guests: z
    .coerce
    .number({ invalid_type_error: "Please select number of guests" })
    .min(1, "Minimum 1 guest")
    .max(120, "For groups over 120, please contact us directly via WhatsApp"),
  date: z
    .string()
    .min(1, "Please select your preferred date"),
  time: z
    .string()
    .min(1, "Please select a time slot"),
  notes: z
    .string()
    .max(500, "Notes cannot exceed 500 characters")
    .optional(),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address to subscribe"),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
