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
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors">{children}</body>
    </html>
  );
}
