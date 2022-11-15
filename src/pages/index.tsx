import * as S from "../styles/styles";
import Header from "../components/Header";
import CardHouse from "../components/Card";
import Stage from "../components/Stage";
import Head from "next/head";

export default function Home() {
  return (
    <S.Content>
      <Head>
        <title>Harry Potter</title>
        <meta name="description" content="Harry Potter" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <S.Background>
        <Header />
        <S.Main>
          <S.LogoMain src={"logo2.png"} />
          <S.BoxText>
            <Stage text={"Navegue pelas Casas"} />
          </S.BoxText>
          <S.Border />
        </S.Main>
        <CardHouse />
      </S.Background>
    </S.Content>
  );
}
