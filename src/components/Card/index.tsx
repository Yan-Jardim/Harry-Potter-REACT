import * as S from "../../styles/styles.cards";

export default function CardHouse() {
  return (
    <S.Cards>
      <S.Card1
        src={"grifinoria.png"}
        onClick={() => (window.location.href = "/personagens?house=Gryffindor")}
      />
      <S.Card2
        src={"sonserina.png"}
        onClick={() => (window.location.href = "/personagens?house=Ravenclaw")}
      />
      <S.Card3
        src={"lufa-lufa.png"}
        onClick={() => (window.location.href = "/personagens?house=Hufflepuff")}
      />
      <S.Card4
        src={"corvinal.png"}
        onClick={() => (window.location.href = "/personagens?house=Slytherin")}
      />
    </S.Cards>
  );
}
