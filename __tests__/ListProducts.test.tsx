import ProductList from "@/components/product-list";
import { ProductProvider } from "@/providers/ProductProvider";
import theme from "@/styles/theme";
import { mockedProducts } from "@/utils/mock/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

const fakeData = mockedProducts;

queryClient.setQueryData(["products", 1, "id", "ASC"], {
  products: fakeData,
  count: fakeData.length,
});

it("should be able to list and display products", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ProductProvider>
          <ProductList />
        </ProductProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );

  expect(await screen.findByTestId("product-0")).toBeInTheDocument();

  expect(await screen.findByText("Headset Cloud Stinger")).toBeInTheDocument();
});
