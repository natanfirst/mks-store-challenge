import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/header";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "@/components/product-list";
import { Product } from "@/types/products";
import { CartProvider } from "@/providers/CartProvider";
import { ProductProvider } from "@/providers/ProductProvider";

const queryClient = new QueryClient();

const fakeData: Product[] = [];

queryClient.setQueryData(["products", 1, "id", "ASC"], {
  products: fakeData,
  count: fakeData.length,
});

it("should have empty message", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ProductProvider>
            <Header />
            <ProductList />
          </ProductProvider>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );

  const openCartButton = screen.getByTestId("open-cart-btn");
  fireEvent.click(openCartButton);

  const emptyMessage = screen.queryByTestId("empty-cart-message");
  expect(emptyMessage).not.toBeNull();
});
