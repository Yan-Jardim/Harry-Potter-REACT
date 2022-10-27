import { ButtonProps } from "./interfaces";
import * as S from "./styles";

export default function LogoTodos({ action }: ButtonProps) {

  return (
    <>
      <div data-testid="test-logo-stage" onClick={action}>
        <S.Logo3 src={"logo_3.png"} />
      </div>
    </>
  )
}