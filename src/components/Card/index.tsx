import Link from "next/link";
import * as S from "./styles";

export default function CardHouse() {

    return(
      <S.Cards data-testid="test-card">
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

    )
}