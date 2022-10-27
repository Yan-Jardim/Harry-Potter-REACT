import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import LogoTodos from "../../components/Targeta";
import { imgPhoto } from "../utils/helpers"
import Modal from "../../components/Modal";


export default function TodosPerso() {
  const [resposta, setResposta] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});
  const [house, setHouse] = useState();


  const URL_STUDENTS = "https://hp-api.herokuapp.com/api/characters/house/"




  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams: any = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString(),
        });
      });
      console.log(urlParams, 'urlParams')
      setHouse(urlParams)
    }
  }, []);

  // const handleOpenModal = (personagem: string) => {
  //   setPersonagemAtual(personagem);
  //   setModalIsOpen(true)
  // };
 

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
                  {/* @ts-ignore */}
                  {/* {apihouse()} */}
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
