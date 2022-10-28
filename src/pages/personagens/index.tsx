import React, { useState, useEffect } from "react";
import * as S from "./styles";
import LogoTodos from "../../components/Targeta";
import { imgPhoto } from "../utils/helpers"
import Modal from "../../components/Modal";
import { PersonagensProps } from "./interfaces";


export default function TodosPerso() {
  const [resposta, setResposta] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});
  const [house, setHouse] = useState();


  const API = house ? `https://hp-api.herokuapp.com/api/characters/house/${house}` : `https://hp-api.herokuapp.com/api/characters`;


  useEffect(() => {
    (async function () {
      const data = await fetch(API).then((respose) => respose.json());
      setResposta(data);
    })();
  }, [API]);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams : any = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString(),
        });
      });
      console.log(urlParams, 'urlParams')
      setHouse(urlParams)
    }
  }, []);

  const handleOpenModal = (personagem: string) => {
    setPersonagemAtual(personagem);
    setModalIsOpen(true)
  };


  return (
    <S.Container>
      <S.Target>
        <LogoTodos action={() => (window.location.href = '/')} />
      </S.Target>
      <S.Background1>
        <S.BoxBack>
          <S.Main>
            <S.LogoMain />
            <S.BoxText>
              <S.Text>
                {/* @ts-ignore */}
                {/* {houses()} */}
              </S.Text>
            </S.BoxText>
            <S.BoxBorder>
              <S.Border />
            </S.BoxBorder>
          </S.Main>
          <S.Mdl>
            <S.BoxInfo>
              <S.CardsStudents>
                <S.ImageCardSudents>
                {resposta &&
                           Object.values(resposta).map((item) => {
                                return(
                                <>
                                    <S.Actor>
                                        <S.ImagePersonagem src={item.image !== '' ? item.image : imgPhoto(item.name)}
                                    alt={item.name}/>
                                        <S.NameStundent>{item.name}</S.NameStundent>
                                    </S.Actor>
                                </>
                             );
                            })}
                </S.ImageCardSudents>
              </S.CardsStudents>
            </S.BoxInfo>
          </S.Mdl>
        </S.BoxBack>
        <S.BtnRef>
          {
            modalIsOpen &&
            <Modal handleClose={() => setModalIsOpen(false)} personagemAtual={personagemAtual} />
          }
        </S.BtnRef>
      </S.Background1>
    </S.Container>
  );
}
