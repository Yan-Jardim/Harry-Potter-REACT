import { ButtonProps } from "./interfaces";
import * as S from "./styles";

export default function Button({action, label1, label2}:ButtonProps) {

    return(
        <>
        <div data-testid="test-button">
        <S.Button onClick={action}>
              {label1}
              <br/>
              {label2}
            </S.Button>
        </div>
        </>
    )
}