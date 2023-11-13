import Header from '@/components/header';
import { CartProvider } from '@/providers/CartProvider';
import theme from '@/styles/theme';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

it("should open and close the cart", async () => {
  render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Header />
      </CartProvider>
    </ThemeProvider>
  
  );
  
  const cart = screen.queryByTestId("cart");
  expect(cart).not.toBeInTheDocument();

  const openCartButton = screen.getByTestId("open-cart-btn"); 
  fireEvent.click(openCartButton);

  const cartOpen = await screen.findByTestId("cart");
  expect(cartOpen).toBeInTheDocument();


  const closeCartButton = screen.getByTestId("close-cart-btn"); 
  fireEvent.click(closeCartButton);

  const cartClosed = screen.queryByTestId("cart");
  expect(cartClosed).not.toBeInTheDocument();
});