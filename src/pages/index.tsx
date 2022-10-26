import * as S from "../styles/styles";
import Header from "../components/Header";
import CardHouse from "../components/Card";

export default function Home() {

  return (

    <S.Content>
      <S.Background>
        <Header />
        <S.Main>
          <S.LogoMain />
          <S.BoxText>
            <S.Text>Navegue pelas Casas</S.Text>
          </S.BoxText>
          <S.Border />
        </S.Main>
        <CardHouse />
      </S.Background>
    </S.Content>
  );
}
