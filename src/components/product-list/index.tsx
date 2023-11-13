"use client";
import api from "@/lib/axios";
import { Product } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../product-item";
import * as S from "./style";
import SkeletonLoading from "../skeleton-loading";
import { BsBagXFill } from "react-icons/bs";
import Pagination from "../pagination";
import { useProduct } from "@/providers/ProductProvider";
import { ITEMS_PER_PAGE } from "@/utils/constants";

const fetchProducts = async (page: number, sortBy: string, orderBy: string) => {
  const { data } = await api.get(
    `/api/v1/products?page=${page}&rows=${ITEMS_PER_PAGE}&sortBy=${sortBy}&orderBy=${orderBy}`
  );
  return data as { products: Product[]; count: number };
};

const ProductList = () => {
  const { page, setPage, orderBy, setOrderBy, sortBy, setSortBy } =
    useProduct();
  const { data, isLoading } = useQuery({
    queryKey: ["products", page, sortBy, orderBy],
    queryFn: () => fetchProducts(page, sortBy, orderBy),
  });

  return (
    <>
      <S.FilterOptions>
        <S.FieldContainer>
          <S.Label htmlFor="sortBy">Ordenar por:</S.Label>
          <S.Select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <S.Option value="id">ID</S.Option>
            <S.Option value="name">Nome</S.Option>
            <S.Option value="price">Preço</S.Option>
          </S.Select>
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label htmlFor="orderBy">Ordenar por ordem:</S.Label>
          <S.Select
            id="orderBy"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <S.Option value="ASC">Crescente</S.Option>
            <S.Option value="DESC">Decrescente</S.Option>
          </S.Select>
        </S.FieldContainer>
      </S.FilterOptions>

      <S.ProductList>
        {isLoading
          ? Array.from({ length: 8 }).map((_, key) => (
              <SkeletonLoading key={key} width={"100%"} height={"285px"} />
            ))
          : data?.products?.map((product, key) => (
              <ProductItem product={product} key={key} />
            ))}
      </S.ProductList>

      {data && (
        <Pagination page={page} rows={data?.count} onPageChange={setPage} />
      )}

      {!isLoading && data?.products?.length === 0 && (
        <S.EmptyMessageContainer className="w-full">
          <BsBagXFill size={40} />
          <span data-testid="empty-products-message">
            Estamos sem produtos no momento !
          </span>
        </S.EmptyMessageContainer>
      )}
    </>
  );
};

export default ProductList;
