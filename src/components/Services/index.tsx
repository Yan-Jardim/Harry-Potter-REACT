import React, { useState, useEffect } from "react";
import * as S from "../../pages/personagens/styles";
import { imgPhoto } from "../../pages/utils/helpers"
import Modal from "../../components/Modal";
import Stage from "../../components/Stage";
import axios from "axios";

export default function CharactersAll() {
  const [resposta, setResposta] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});
  const [house, setHouse] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams : any = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString().replace('house=', ''),
        });
      });
      setHouse(urlParams.house)
    }
  }, []);
  
  console.log(house, 'house')

   const baseURL = "https://hp-api.herokuapp.com/api/characters"

   useEffect(() => {   
    if (house){
            if (house === 'all'){
                axios.get(baseURL).then((response) => setResposta(response.data))
            }
            else {
                axios.get(baseURL + `/house/${house}`).then((response) => setResposta(response.data))
            } 
          }
      }, [house]);
console.log(resposta,'resposta')
  const handleOpenModal = (personagem: string) => {
    setPersonagemAtual(personagem);
    setModalIsOpen(true)
  };

  const houses = () => {
    switch (house) {
      case 'all':
        return 'PERSONAGENS';
      case 'Gryffindor':
        return 'Grifinória';
      case 'Hufflepuff':
        return 'Lufa-Lufa';
      case 'Ravenclaw':
        return 'Corvinal';
      case 'Slytherin':
        return 'Sonserina';

      default:
        'Desconhecido';
    }
  };

  return (
    <S.Container>    
      <S.Background1>
        <S.BoxBack>
          <S.Main>
            <S.LogoMain src={'logo2.png'}/>
            <S.BoxText>
              <Stage text={houses()}/>              
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
                           Object.values(resposta).map((characters: any , index) => {
                                return(
                                <>
                                    <S.Actor onClick={() => handleOpenModal(characters)} key={index}>
                                        <S.ImagePersonagem src={characters.image !== '' ? characters.image : imgPhoto(characters.name)}
                                    alt={characters.name}/>
                                        <S.NameStundent>{characters.name}</S.NameStundent>
                                    </S.Actor>
                                </>
                             );
                            })}
                </S.ImageCardSudents>
              </S.CardsStudents>
            </S.BoxInfo>
          </S.Mdl>
        </S.BoxBack>
          {
            modalIsOpen &&
            <Modal handleClose={() => setModalIsOpen(false)} personagemAtual={personagemAtual} />
          }
      </S.Background1>
    </S.Container>
  );
}