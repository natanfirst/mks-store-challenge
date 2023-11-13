import { render, screen, fireEvent, within } from "@testing-library/react";
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

queryClient.setQueryData(["products", 1, "id", "ASC"], { products: fakeData, count: fakeData.length  });

it("should add and subtract product quantity in the cart", async () => {
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

  const addToCartBtn = await within(screen.getByTestId("product-0")).findByText(
    "Comprar"
  );
  fireEvent.click(addToCartBtn);

  const quantityElement = screen.getByTestId("cart-product-quantity");
  expect(quantityElement).toHaveTextContent("1");

  const openCartButton = screen.getByTestId("open-cart-btn");
  fireEvent.click(openCartButton);

  const increaseBtn = screen.getByTestId("increase-cart-product-btn");
  fireEvent.click(increaseBtn);

  const productCartQuantity = screen.getByTestId("cart-product-quantity-0");
  expect(productCartQuantity).toHaveTextContent("2");

  const decreaseBtn = screen.getByTestId("decrease-cart-product-btn");
  fireEvent.click(decreaseBtn);

  expect(productCartQuantity).toHaveTextContent("1");
});
