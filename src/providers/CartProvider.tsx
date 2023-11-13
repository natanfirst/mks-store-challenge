"use client";
import { Product } from "@/types/products";
import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

export interface ProductTotal extends Product {
  quantity: number;
}

interface ICartContext {
  products: ProductTotal[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subtotal: number;
  totalDiscount: number;
  addProductToCart: (product: ProductTotal) => void;
  decreaseProductQuantity: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subtotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductTotal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedProducts = localStorage.getItem("mks-cart-products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("mks-cart-products", JSON.stringify(products));
    }
  }, [products, loading]);

  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => subtotal, [subtotal]);

  const totalDiscount = subtotal - total;

  const addProductToCart = useCallback((product: ProductTotal) => {
    toast.success("Produto adicionado !");
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        })
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  },[products]);

  const decreaseProductQuantity = (productId: number) => {
    toast.success("Produto removido !");
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  const increaseProductQuantity = (productId: number) => {
    toast.success("Produto adicionado !");
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  };

  const removeProductFromCart = (productId: number) => {
    toast.success("Produto removido do carrinho !");
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId)
    );
  };

  const contextValue = useMemo(() => ({
    products,
    addProductToCart,
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
    total,
    subtotal,
    totalDiscount,
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
  }),[addProductToCart, products, subtotal, total, totalDiscount])

  return (
    <CartContext.Provider
      value={contextValue}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  return useContext(CartContext);
}

export { CartProvider , useCart };