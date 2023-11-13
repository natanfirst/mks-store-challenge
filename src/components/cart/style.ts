import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;


export const CartContainer = styled.div<{ open: boolean }>`
  width: 496px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-496px")};
  animation: ${slideInAnimation} 0.3s ease-in forwards;
  z-index: 1;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;

  @media(max-width: 1023px) {
    width: 90%;
    right: ${(props) => (props.open ? "0" : "-90%")};
  }
`;

export const CartDetails = styled.div`
  padding: 36px 24px;
  flex: 1;

  @media(max-width: 1023px) {
    padding: 25px 32px;
  }
`;

export const CartToggleButton = styled.button`
  width: 90px;
  height: 45px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;

  @media(max-width: 1023px) {
    width: 52px ;
    height: 26px;
    gap: 10px;

    img {
      width: 11px;
      height: 11px;
    }
  }
`;

export const CartItemCounter = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;

  @media(max-width: 1023px) {
    font-size: 12px;
  }
`;

export const CartTitle = styled.h3`
  max-width: 180px;
  color: #fff;
  font-size: 27px;
  font-weight: 700;
  line-height: normal;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductList = styled.div`
  margin-top: 40px;
  max-height: 560px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 10px 20px;

  @media(max-width: 1023px) {
    max-height: 470px;
  }
`;

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const TotalLabel = styled.h3`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
`;

export const FinishButton = styled.button`
  width: 100%;
  height: 97px;
  background: black;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;

  @media(max-width: 1023px) {
    font-size: 20px;
  }
`;

export const EmptyCartMessage = styled.p`
  margin-top: 40px;
  font-size: 28px;
  font-weight: 400;
  line-height: 15px;
  color: #fff;

  @media(max-width: 1023px) {
    font-size: 18px;
  }
`;
