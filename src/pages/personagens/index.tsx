import CharactersAll from "../../components/Services";
import LogoTodos from "../../components/Targeta";
import * as S from "./styles";

export default function Persons() {
  return (
    <S.Container>
      <S.Target>
        <LogoTodos action={() => (window.location.href = "/")} />
      </S.Target>
      <S.Background1>
        <CharactersAll />
      </S.Background1>
    </S.Container>
  );
}
