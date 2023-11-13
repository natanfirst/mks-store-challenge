import { ProductTotal, useCart } from "@/providers/CartProvider";
import * as S from "./style";
import { CloseIcon } from "@/assets/icons/close";
import { priceFormatter } from "@/utils/priceFormatter";

const CartItem = ({
  product,
}: {
  product: ProductTotal;
}) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useCart();

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <S.Container data-testid={`cart-product-${product.id}`}>
      <S.ProductImage
        width={46}
        height={57}
        alt={product.name}
        src={product.photo || '/product-placeholder.png'}
      />
      <S.ProductName>{product.name}</S.ProductName>
      <S.PriceDetails>
        <S.QuantityContent>
          <S.QuantityButton
            data-testid="decrease-cart-product-btn"
            onClick={() => handleDecreaseProductQuantityClick()}
          >
            -
          </S.QuantityButton>
          <S.ProductQuantity data-testid={`cart-product-quantity-${product.id}`}>
            {product.quantity}
          </S.ProductQuantity>
          <S.QuantityButton
            data-testid="increase-cart-product-btn"
            onClick={() => handleIncreaseProductQuantityClick()}
          >
            +
          </S.QuantityButton>
        </S.QuantityContent>
        <S.ProductPrice>{priceFormatter(product.price)}</S.ProductPrice>
      </S.PriceDetails>

      <S.RemoveProductButton
        data-testid={`remove-product-cart-${product.id}`}
        onClick={() => handleRemoveProductClick()}
      >
        <CloseIcon width={18} height={18} />
      </S.RemoveProductButton>
    </S.Container>
  );
};

export default CartItem;
