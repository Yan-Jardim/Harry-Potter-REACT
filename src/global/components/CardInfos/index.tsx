import { imgPhoto } from "../../utils/helpers";
import * as S from "./styles";
import { ICardProps } from "./types";

export default function CardInfos({handleOpenModal, characters}:ICardProps) {
  return (
    <S.Actor
    onClick={() => handleOpenModal(characters)}
  >
    <S.ImagePersonagem
      src={
        characters.image !== ""
          ? characters.image
          : imgPhoto(characters.name)
      }
      alt={characters.name}
    />
    <S.NameStundent>{characters.name}</S.NameStundent>
  </S.Actor>
  );
}
