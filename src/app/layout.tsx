"use client";

import { Montserrat } from "next/font/google";
import Header from "../components/header";
import "./globals.css";
import MainProvider from "@/providers/Main";
import Footer from "@/components/footer";
import { LayoutContainer } from "@/styles/global";

const Font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <MainProvider>
          <LayoutContainer>
            <Header />
            {children}
            <Footer />
          </LayoutContainer>
        </MainProvider>
      </body>
    </html>
  );
}
