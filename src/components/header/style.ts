import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 101px;
  background: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1023px) {
    height: 48px;
  }
`;

export const Content = styled.div`
  max-width: 1320px;
  padding: 0 40px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    padding: 11px 32px;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media (max-width: 1023px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h2`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;
