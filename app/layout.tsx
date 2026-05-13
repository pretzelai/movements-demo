import type { Metadata } from "next";
import { Anton, Caveat, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOVEMENTS — Empieza el movimiento",
  description:
    "Convierte tu causa en un movimiento imparable. MOVEMENTS te ofrece peticiones, comunidad, contenido y suscripciones para impulsar el cambio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${anton.variable} ${caveat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
