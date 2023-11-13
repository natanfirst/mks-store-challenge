import { render, screen } from "@testing-library/react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "@/components/product-list";
import { Product } from "@/types/products";
import { ProductProvider } from "@/providers/ProductProvider";

const queryClient = new QueryClient();

const fakeData: Product[] = [];

queryClient.setQueryData(["products", 1, "id", "ASC"], { products: fakeData, count: fakeData.length });

it("should have empty products message", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ProductProvider>
          <ProductList />
        </ProductProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );

  const emptyMessage = screen.queryByTestId("empty-products-message");
  expect(emptyMessage).not.toBeNull();
});
