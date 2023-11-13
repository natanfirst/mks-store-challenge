"use client";
import React from "react";
import QueryProvider from "./QueryProvider";
import { CartProvider } from "./CartProvider";
import { GlobalStyles } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/styles/theme";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./ProductProvider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <QueryProvider>
        <CartProvider>
          <ProductProvider>
            <GlobalStyles />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
            <Toaster position="top-center" reverseOrder={false} />
          </ProductProvider>
        </CartProvider>
      </QueryProvider>
    </StyledComponentsRegistry>
  );
};

export default MainProvider;
