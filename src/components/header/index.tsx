import Cart from "../cart";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LogoContent>
          <S.Title>MKS</S.Title>
          <S.Subtitle>Sistemas</S.Subtitle>
        </S.LogoContent>
        <Cart />
      </S.Content>
    </S.Container>
  );
};

export default Header;
