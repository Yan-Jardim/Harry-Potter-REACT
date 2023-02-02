import router from "next/router";
import * as S from "./styles";

export default function CardHouse() {
  return (
    <S.Cards>
      <S.Card1
        src={"grifinoria.png"}
        onClick={() => { router.push('/characters?house=gryffindor')}}
      />
      <S.Card2
        src={"sonserina.png"}
        onClick={() => { router.push('/characters?house=slytherin')}}
      />
      <S.Card3
        src={"lufa-lufa.png"}
        onClick={() => { router.push('/characters?house=hufflepuff')}}
      />
      <S.Card4
        src={"corvinal.png"}
        onClick={() => { router.push('/characters?house=ravenclaw')}}
      />
    </S.Cards>
  );
}
