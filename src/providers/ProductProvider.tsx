"use client";
import { Product } from "@/types/products";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";

interface ProductContext {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductContext = createContext<ProductContext>({
  page: 1,
  setPage: () => {},
  sortBy: "",
  setSortBy: () => {},
  orderBy: "",
  setOrderBy: () => {},
});

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("ASC");

  const contextValue = useMemo(
    () => ({
      page,
      setPage,
      sortBy,
      setSortBy,
      orderBy,
      setOrderBy,
    }),
    [page, setPage, sortBy, setSortBy, orderBy, setOrderBy]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

function useProduct() {
  return useContext(ProductContext);
}

export { ProductProvider, useProduct };
