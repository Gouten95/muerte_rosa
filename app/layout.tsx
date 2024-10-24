import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChakraBaseProvider, Container } from "@chakra-ui/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Muerte Rosa",
  description: "Tienda en línea de bisutería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ChakraBaseProvider>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </ChakraBaseProvider>
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
