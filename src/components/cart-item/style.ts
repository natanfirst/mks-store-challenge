import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 95px;
  background: white;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 1023px) {
    min-height: 220px;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const ProductImage = styled.img`
    width: 46px;
    height: 57px ;
    object-fit: contain;

    @media(max-width: 1023px) {
        width: auto ;
        height: 101px ;
    }
`;

export const ProductName = styled.div`
  color: #2c2c2c;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  max-width: 113px;
  @media (max-width: 1023px) {
    max-width: none;
    font-size: 16px;
  }
`;

export const ProductPrice = styled.div`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;

  @media (max-width: 1023px) {
    height: 34px;
    background: black;
    color: white;
    border-radius: 5px;
    padding:  0 17px;
    display: flex ;
    align-items: center;
  }
`;

export const QuantityContent = styled.div`
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: #fff;
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width; 1023px) {
    flex-direction: column;
  }
`;

export const ProductQuantity = styled.span`
  border: 0 1px 0 1px solid;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RemoveProductButton = styled.button`
  position: absolute;
  right: -6px;
  top: -6px;

  @media (max-width: 1023px) {
    right: 10px;
    top: 10px;
  }

`;
