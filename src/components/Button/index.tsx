import { ButtonProps } from "./interfaces";
import * as S from "../../styles/styles.button";

export default function Button({ action, label1, label2 }: ButtonProps) {
  return (
    <>
      <S.Button data-testid="test-button" onClick={action}>
        {label1}
        <br />
        {label2}
      </S.Button>
    </>
  );
}
