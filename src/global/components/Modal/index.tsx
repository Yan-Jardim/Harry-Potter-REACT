import React, { useRef } from "react";
import * as S from "./styles";
import { imgPhoto } from "../../utils/helpers";
import { IModalProps } from "./types";

export default function Modal({personagemAtual, handleClose}:IModalProps) {

  return (
    <S.Container data-testid="test-modal">
      <S.Content>
        <S.Img>
          <S.StyleImg
            src={
              personagemAtual.image !== ""
                ? personagemAtual.image
                : imgPhoto(personagemAtual.name)
            }
          />
        </S.Img>
        <S.Main>
          <S.Text>
            Nome:{" "}
            <S.Color>
              {personagemAtual.name
                ? personagemAtual.name
                : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Casa:{" "}
            <S.Color>
              {personagemAtual.house
                ? personagemAtual.house
                : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Espécie:{" "}
            <S.Color>
              {personagemAtual.species
                ? personagemAtual.species
                : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Data de Nasc:{" "}
            <S.Color>
              {personagemAtual.dateOfBirth
                ? personagemAtual.dateOfBirth
                : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Gênero:{" "}
            <S.Color>
              {personagemAtual.gender
                ? personagemAtual.gender
                : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Patronus:{" "}
            <S.Color>
              {personagemAtual.patronus
                ? personagemAtual.patronus
                : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Varinha: <S.Color></S.Color>
          </S.Text>
          <S.Alignment>
            <S.Text>
              - Madeira:{" "}
              <S.Color>
                {personagemAtual.wand.wood
                  ? personagemAtual.wand.wood
                  : "Desconhecido"}
              </S.Color>
            </S.Text>
            <S.Text>
              - Núcleo:{" "}
              <S.Color>
                {personagemAtual.wand.core
                  ? personagemAtual.wand.core
                  : "Desconhecido"}
              </S.Color>
            </S.Text>
            <S.Text>
              - Comprimento:{" "}
              <S.Color>
                {personagemAtual.wand.length
                  ? personagemAtual.wand.length
                  : "Desconhecido"}
              </S.Color>
            </S.Text>
          </S.Alignment>
          <S.Text>
            Ancestralidade:{" "}
            <S.Color>
              {personagemAtual.ancestry
                ? personagemAtual.ancestry
                : "Desconhecido"}
            </S.Color>
          </S.Text>
          <S.Text>
            Ator:{" "}
            <S.Color>
              {personagemAtual.actor
                ? personagemAtual.actor
                : "Desconhecido"}
            </S.Color>
          </S.Text>
        </S.Main>
        <S.Closed onClick={handleClose}>X</S.Closed>
      </S.Content>
    </S.Container>
  );
}
