export type MenuCategory = 
  | "all" 
  | "signature" 
  | "coffee" 
  | "wok" 
  | "allday" 
  | "bites" 
  | "beverages";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: string;
  image: string;
  isSpicy?: boolean;
  isSignature?: boolean;
  isPopular?: boolean;
  badge?: string;
  temperature?: "Hot" | "Iced" | "Both";
}

export interface BranchInfo {
  id: string;
  name: string;
  city: string;
  tagline: string;
  address: string;
  fullAddress: string;
  phone: string;
  displayPhone: string;
  hours: string;
  closingDay: string;
  mapUrl: string;
  embedMapUrl?: string;
  image: string;
  features: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  category: "space" | "coffee" | "cuisine" | "vibe";
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  branch: string;
  avatar?: string;
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  branch: "sepang" | "putrajaya";
  serviceType: "table" | "private-event" | "catering";
  guests: number;
  date: string;
  time: string;
  notes?: string;
}

export interface NewsletterFormData {
  email: string;
}
