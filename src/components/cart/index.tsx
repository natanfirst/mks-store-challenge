import { useState } from "react";
import Image from "next/image";
import { CloseIcon } from "@/assets/icons/close";
import {  useCart } from "@/providers/CartProvider";
import CartItem from "../cart-item";
import { priceFormatter } from "@/utils/priceFormatter";
import * as S from "./style";

const Cart = () => {
  const { products, total } = useCart();
  const [open, setOpen] = useState(false);

  const quantity = products.reduce(
    (total, produto) => total + produto.quantity,
    0
  );

  return (
    <>
      <S.CartToggleButton
        data-testid="open-cart-btn"
        onClick={() => setOpen(!open)}
      >
        <Image width={19} height={19} src="/cart.svg" alt="" />
        <S.CartItemCounter data-testid="cart-product-quantity">
          {quantity}
        </S.CartItemCounter>
      </S.CartToggleButton>
      {open && (
        <S.CartContainer data-testid="cart" open={open}>
          <S.CartDetails>
            <S.CartHeader>
              <S.CartTitle>Carrinho de compras</S.CartTitle>
              <button
                data-testid="close-cart-btn"
                onClick={() => setOpen(!open)}
              >
                <CloseIcon />
              </button>
            </S.CartHeader>
            {products.length === 0 && (
              <S.EmptyCartMessage data-testid="empty-cart-message">
                Carrinho vazio !
              </S.EmptyCartMessage>
            )}
            <S.ProductList>
              {products.map((product, key) => (
                <CartItem product={product} key={key} />
              ))}
            </S.ProductList>
          </S.CartDetails>
          <S.TotalContainer>
            <S.TotalLabel>Total:</S.TotalLabel>
            <S.TotalLabel>{priceFormatter(total.toString())}</S.TotalLabel>
          </S.TotalContainer>
          <S.CartFooter>
            <S.FinishButton>Finalizar Compra</S.FinishButton>
          </S.CartFooter>
        </S.CartContainer>
      )}
    </>
  );
};

export default Cart;
