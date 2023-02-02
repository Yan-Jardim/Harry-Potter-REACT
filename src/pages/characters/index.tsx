import router from "next/router";
import CharactersAll from "../../global/components/Person";
import LogoTodos from "../../global/components/Targeta";
import * as S from "./styles";

export default function Characters() {
  return (
    <S.Container>
      <S.Target>
        <LogoTodos
          action={() => {
            router.push("/");
          }}
        />
      </S.Target>
      <CharactersAll />
    </S.Container>
  );
}