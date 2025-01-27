import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog | Home",
  description: "this is a simple blog view post application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen px-3 lg:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
