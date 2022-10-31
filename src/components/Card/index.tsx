import * as S from "./styles";

export default function CardHouse() {
  return (
    <S.Cards>
        <S.Card1 onClick={() => (window.location.href='/personagens?house=Gryffindor')}/>
        <S.Card2 onClick={() => (window.location.href='/personagens?house=Ravenclaw')}/>
        <S.Card3 onClick={() => (window.location.href='/personagens?house=Hufflepuff')}/>
        <S.Card4 onClick={() => (window.location.href='/personagens?house=Slytherin')}/>
    </S.Cards>

  )
}