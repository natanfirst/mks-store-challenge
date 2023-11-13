import Header from "@/components/header";
import ProductList from "@/components/product-list";
import { CartProvider } from "@/providers/CartProvider";
import { ProductProvider } from "@/providers/ProductProvider";
import theme from "@/styles/theme";
import { mockedProducts } from "@/utils/mock/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

const fakeData = mockedProducts;

queryClient.setQueryData(["products", 1, 'id', 'ASC'], {products: fakeData, count: fakeData.length});

it("should be able to add product to cart", async () => {
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

  expect(await screen.findByTestId("product-0")).toBeInTheDocument();

  const addToCartBtn = await within(screen.getByTestId("product-0")).findByText(
    "Comprar"
  );

  fireEvent.click(addToCartBtn);

  expect(await screen.findByTestId("cart-product-quantity")).toHaveTextContent(
    "1"
  );
});
