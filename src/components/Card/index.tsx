import Link from "next/link";
import * as S from "./styles";

export default function CardHouse() {

  return (
    <S.Cards>
      <Link href="/personagens?house=gryffindor">
        <S.Card1 />
      </Link>
      <Link href="/personagens?house=ravenclaw">
        <S.Card2 />
      </Link>
      <Link href="/personagens?house=hufflepuff">
        <S.Card3 />
      </Link>
      <Link href="/personagens?house=slytherin" >
        <S.Card4 />
      </Link>
    </S.Cards>

  )
}