import * as S from "./styles";
import { TypographicComponent } from "../Typographic";
import router from "next/router";
import CardHouse from "../Card";

export function Header() {
  return (
    <S.Header>
      <S.ImagMain>
        <S.ImgOne src={"/logo.png"} alt="Logo" />
        <S.BoxButton>
          <button
            onClick={() => {
              router.push("/characters?house=all");
            }}
          >
            Veja Todos <br /> os Personagens
          </button>
        </S.BoxButton>
      </S.ImagMain>
      <S.Main>
        <S.LogoMain src={"logo2.png"} />
        <S.BoxText>
          <TypographicComponent title={"Navegue pelas Casas"} description />
        </S.BoxText>
        <S.Border />
      </S.Main>      
      <CardHouse /> 
    </S.Header>
  );
}
