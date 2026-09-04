import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#603814",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pelita Cafe | Boutique Coffee Roaster & Modern Malaysian Cuisine",
  description:
    "Fuel your day with our perfect cup of coffee. Artisanal roasts, signature Nasi Ayam Pelita, and comfortable boutique dining in Sepang & Putrajaya.",
  keywords: [
    "Pelita Cafe",
    "Boutique Coffee Roaster",
    "Sepang Cafe",
    "Putrajaya Cafe",
    "Nasi Ayam Pelita",
    "Spanish Latte",
    "Malaysian Cuisine",
    "Halal Cafe Malaysia",
  ],
  authors: [{ name: "Pelita Heritage Sdn Bhd" }],
  creator: "Pelita Heritage Sdn Bhd",
  metadataBase: new URL("https://pelitacafe.com"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://pelitacafe.com",
    siteName: "Pelita Cafe",
    title: "Pelita Cafe | Boutique Coffee Roaster & Modern Malaysian Cuisine",
    description:
      "Fuel your day with our perfect cup of coffee. Handcrafted coffee brews & traditional Malaysian cuisine in Sepang & Putrajaya.",
    images: [
      {
        url: "/assets/images/nasi-ayam-pelita.webp",
        width: 1200,
        height: 630,
        alt: "Pelita Cafe Signature Dining & Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelita Cafe | Boutique Coffee Roaster & Modern Malaysian Cuisine",
    description:
      "Fuel your day with our perfect cup of coffee. Handcrafted coffee brews & traditional Malaysian cuisine.",
    images: ["/assets/images/nasi-ayam-pelita.webp"],
  },
  icons: {
    icon: "/assets/images/logo-dark.webp",
    shortcut: "/assets/images/logo-dark.webp",
    apple: "/assets/images/logo-dark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CafeOrCoffeeShop",
        "@id": "https://pelitacafe.com/#sepang",
        "name": "Pelita Cafe Sepang",
        "image": "https://pelitacafe.com/assets/images/cafe-interior.webp",
        "telephone": "+60123377807",
        "priceRange": "RM 10 - RM 30",
        "servesCuisine": ["Coffee", "Malaysian", "Halal"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Medan 23, Bandar Baru Salak Tinggi",
          "addressLocality": "Sepang",
          "addressRegion": "Selangor",
          "postalCode": "43900",
          "addressCountry": "MY",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "09:00",
            "closes": "19:00",
          },
        ],
      },
      {
        "@type": "CafeOrCoffeeShop",
        "@id": "https://pelitacafe.com/#putrajaya",
        "name": "Pelita Cafe Putrajaya",
        "image": "https://pelitacafe.com/assets/images/cafe-event.webp",
        "telephone": "+60123377807",
        "priceRange": "RM 10 - RM 35",
        "servesCuisine": ["Coffee", "Malaysian", "Halal"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jalan Diplomatik 1, Presint 15",
          "addressLocality": "Putrajaya",
          "addressRegion": "Wilayah Persekutuan Putrajaya",
          "postalCode": "62050",
          "addressCountry": "MY",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
            "opens": "09:00",
            "closes": "22:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-caramel/30 selection:text-espresso">
        {children}
      </body>
    </html>
  );
}
