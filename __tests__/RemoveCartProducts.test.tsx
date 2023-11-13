import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import Header from "@/components/header";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "@/components/product-list";
import { mockedProducts } from "@/utils/mock/products";
import { CartProvider } from "@/providers/CartProvider";
import { ProductProvider } from "@/providers/ProductProvider";

const queryClient = new QueryClient();

const fakeData = mockedProducts;

queryClient.setQueryData(["products", 1, 'id', 'ASC'], {
  products: fakeData,
  count: fakeData.length,
});

it("should remove cart product", async () => {
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

  const openCartButton = screen.getByTestId("open-cart-btn");
  fireEvent.click(openCartButton);

  const cartItem = screen.queryByTestId("cart-product-0");
  expect(cartItem).not.toBeNull();

  const removeCartProductBtn = screen.getByTestId("remove-product-cart-0");
  fireEvent.click(removeCartProductBtn);

  const newCartItem = screen.queryByTestId("cart-product-0");
  expect(newCartItem).toBeNull();
});
