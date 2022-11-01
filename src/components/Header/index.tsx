import * as S from "../../styles/styles.header";
import Button from "../Button";

export default function Header() {
  return (
    <div data-testid="test-header">
      <S.Target />
      <S.LogoDiv>
        <S.Logo src={"logo.png"} />
      </S.LogoDiv>
      <S.BoxBnt>
        <Button
          action={() => (window.location.href = "/personagens?house=all")}
          label1={"Veja Todos"}
          label2={"os Personagens"}
        />
      </S.BoxBnt>
    </div>
  );
}
