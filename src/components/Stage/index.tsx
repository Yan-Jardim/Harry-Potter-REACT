import * as S from "../../styles/styles.stage";
import { StageProps } from "./interfaces";

export default function Stage({ text }: StageProps) {
  return <S.Text data-testid="test-stage">{text}</S.Text>;
}
