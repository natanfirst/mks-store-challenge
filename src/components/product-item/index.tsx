import { Product } from "@/types/products";
import * as S from "./style";
import { priceFormatter } from "@/utils/priceFormatter";
import { BagIcon } from "@/assets/icons/bag";
import { useCart } from "@/providers/CartProvider";

const ProductItem = ({ product }: { product: Product }) => {
  const { addProductToCart } = useCart();

  return (
    <S.ProductContainer data-testid={`product-${product.id}`} className="">
      <S.ProductDetails>
        <S.ProductImage alt={product.name} src={product.photo || '/product-placeholder.png'} />
        <S.PriceContent>
          <S.ProductName>{product.name}</S.ProductName>
          <S.ProductPrice>{priceFormatter(product.price)}</S.ProductPrice>
        </S.PriceContent>

        <S.ProductDescription>{product.description}</S.ProductDescription>
      </S.ProductDetails>
      <S.AddToCartButton
        onClick={() => addProductToCart({ ...product, quantity: 1 })}
      >
        <BagIcon />
        Comprar
      </S.AddToCartButton>
    </S.ProductContainer>
  );
};

export default ProductItem;
