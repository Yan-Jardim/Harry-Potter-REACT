import * as S from "../styles/styles";
import Header from "../components/Header";
import CardHouse from "../components/Card";
import Stage from "../components/Stage";

export default function Home() {

  return (

    <S.Content>
      <S.Background>
        <Header />
        <S.Main>
          <S.LogoMain src={'logo2.png'} />
          <S.BoxText>
            <Stage text={'Navegue pelas Casas'}/>
          </S.BoxText>
          <S.Border />
        </S.Main>
        <CardHouse />
      </S.Background>
    </S.Content>
  );
}
