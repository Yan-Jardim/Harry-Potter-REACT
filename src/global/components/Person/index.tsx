import React, { useState, useEffect, Fragment } from "react";
import * as S from "./styles";
import Modal from "../../components/Modal";
import { TypographicComponent } from "../Typographic";
import { useRouter } from "next/router";
import { getAllCharacters } from "../../services/CharactersService";
import { Loading } from "../Loading";
import * as Types from "../../@types/character";
import CardInfos from "../CardInfos";
import { baseURL } from "../../config/api";
import axios from "axios";
import Head from "next/head";

export default function CharactersAll() {
  const [resposta, setResposta] = useState<Types.CharacterProps[]>([]);
  const [personagemAtual, setPersonagemAtual] =
  useState<Types.CharacterProps | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const router = useRouter();
  const { house } = router.query;

  useEffect(() => {
    if (house) {
      if (house === "all") {
        getAllCharacters().then((response: any) => setResposta(response.data));
      } else {
        axios
          .get(baseURL + `/house/${house}`)
          .then(
            (response: {
              data: React.SetStateAction<Types.CharacterProps[]>;
            }) => setResposta(response.data)
          );
      }
    }
  }, [house]);

  if (resposta.length === 0) {
    return <Loading />;
  }

  const handleOpenModal = (character: Types.CharacterProps) => {
    setPersonagemAtual(character);
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setPersonagemAtual(null);
  };

  const houses = () => {
    switch (house) {
      case "all":
        return "PERSONAGENS";
      case "gryffindor":
        return "Grifinória";
      case "hufflepuff":
        return "Lufa-Lufa";
      case "ravenclaw":
        return "Corvinal";
      case "slytherin":
        return "Sonserina";

      default:
        "Desconhecido";
    }
  };

  return (
    <>
      <Head>
        <title>Harry Potter | {houses()}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Background1>
        <S.BoxBack>
          <S.Main onClick={handleCloseModal}>
            <S.LogoMain src={"logo2.png"} />
            <S.BoxText>
              <TypographicComponent title={houses()} description />
            </S.BoxText>
            <S.BoxBorder>
              <S.Border />
            </S.BoxBorder>
          </S.Main>
          <S.Mdl>
            <S.BoxInfo>
              <S.CardsStudents>
                <S.ImageCardSudents>
                  {resposta?.map((characters, index) => {
                    return (
                      <CardInfos
                        characters={characters}
                        key={index}
                        handleOpenModal={handleOpenModal}
                      />
                    );
                  })}
                </S.ImageCardSudents>
              </S.CardsStudents>
            </S.BoxInfo>
          </S.Mdl>
        </S.BoxBack>
        {resposta && modalIsOpen && (
          <Modal
            handleClose={handleCloseModal}
            personagemAtual={personagemAtual}
          />
        )}
      </S.Background1>
    </>
  );
}
