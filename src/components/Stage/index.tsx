import * as S from "../../styles/styles.stage";
import { StageProps } from "./interfaces";

export default function Stage ({text}:StageProps) {

    return(
        <>
        <div>
        <S.Text>{text}</S.Text>
        </div>
        </>
    )
}