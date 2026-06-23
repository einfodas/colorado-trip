import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Colorado Family Vacation — July 29 – Aug 4, 2026",
  description: "7-day Colorado family vacation plan with itinerary, attractions, hotels, dining, packing list, and budget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${dmSerif.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
              
              // Handle anchor link scrolling
              document.addEventListener('DOMContentLoaded', function() {
                document.addEventListener('click', function(e) {
                  var target = e.target;
                  var anchor = target.closest ? target.closest('a') : null;
                  if (!anchor) return;
                  
                  var href = anchor.getAttribute('href');
                  if (!href || !href.startsWith('#')) return;
                  
                  var id = href.substring(1);
                  var element = document.getElementById(id);
                  if (element) {
                    e.preventDefault();
                    window.history.pushState(null, '', href);
                    var rect = element.getBoundingClientRect();
                    var offset = 80;
                    window.scrollTo({
                      top: rect.top + window.scrollY - offset,
                      behavior: 'smooth'
                    });
                  }
                });
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors">{children}</body>
    </html>
  );
}
