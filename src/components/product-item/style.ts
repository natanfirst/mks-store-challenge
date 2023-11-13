import { styled } from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  min-height: 285px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  display: flex ;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden ;

  @media(max-width: 1023px) {
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 138px;
    object-fit: contain;
    @media(max-width: 1023px) {
        max-height: 158px;
    }
`;

export const ProductDetails = styled.div`
  padding: 20px 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const PriceContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;

export const ProductName = styled.p`
  max-width: 124px;
  color: #2c2c2c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductDescription = styled.p`
  color: #2c2c2c;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPrice = styled.span`
  background: #373737;
  border-radius: 5px;
  color: white;
  height: 26px;
  padding: 0 5px;
  flex-shrink: 0;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  height: 31.907px;
  background: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  display:  flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;
