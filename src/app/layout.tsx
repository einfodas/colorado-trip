import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
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
