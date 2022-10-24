// eslint-disable-next-line @next/next/no-title-in-document-head
import * as S from "../styles/styles";
import Button from "../components/Button";
import Link from "next/link";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head } from "next/document";

export default function Home() {


  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKTGZ3asGHBqoap1YPeldfLJ9Iwk8ZN7prhoOh0Fo6hv8_JoSXxFwIbu_cEYlO8HtG4&usqp=CAU";


  return (
   
    <S.Content>
      <Head>   
            
      {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
      <title>Harry Potter</title>
      <meta name="description" content="Harry Potter" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <div>
        <S.Target />
      </div>

      <S.Background>
        <div>
          <S.Logo src={"logo.png"} />
          <S.BoxBnt>
            <Button action={() => (window.location.href = "/personagens?house=personagens&api=personagens")}
              label1={'Veja Todos'}
              label2={'os Personagens'}
            />

          </S.BoxBnt>
        </div>

        <S.Main>
          <S.LogoMain />
          <S.BoxText>
            <S.Text>Navegue pelas Casas</S.Text>
          </S.BoxText>
          <S.Border />
        </S.Main>

        <S.Cards>
          <Link href="/personagens?house=gryffindor&apihouse=gryffindor">
            <S.Card1 />
          </Link>
          <Link href="/personagens?house=ravenclaw&apihouse=ravenclaw">
            <S.Card2 />
          </Link>
          <Link href="/personagens?house=hufflepuff&apihouse=hufflepuff">
            <S.Card3 />
          </Link>
          <Link href="/personagens?house=slytherin&apihouse=slytherin" >
            <S.Card4 />
          </Link>
        </S.Cards>
      </S.Background>
    </S.Content>
  );
}
