import { styled } from "styled-components";

export const ProductList = styled.div`
  width: 100%;
  max-width: 938px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 32px;
  margin-bottom: 30px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 20px;
    margin-top: 18px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    margin-top: 18px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyMessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`;

export const FilterOptions = styled.div`
  display: flex;
  align-items: center;
  max-width: 938px;
  margin: 0 auto;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 600px) {
    display: block;
    margin-top: 18px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #333;
`;

export const Option = styled.option`
  background-color: white;
  color: #333;
`;
