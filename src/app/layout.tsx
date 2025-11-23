// src/app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialSidebar from "../components/SocialSidebar";
import EmailSidebar from "../components/EmailSidebar";

export const metadata = {
  title: "Varun Teja | Portfolio",
  description:
    "Operations & Data Automation Analyst and Database Developer. I build data automation systems, reporting dashboards, and backend tools.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a192f" />
      </head>

      <body className="min-h-screen bg-[#0a192f] text-slate-300 antialiased font-[Inter]">
        {/* Fixed navbar */}
        <Navbar />

        {/* Floating sidebars */}
        <SocialSidebar />
        <EmailSidebar />

        {/* Main content container */}
        <main className="mx-auto max-w-6xl px-4 pt-24 pb-16 lg:px-6">
          {children}
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </body>
    </html>
  );
}
