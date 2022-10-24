import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import LogoTodos from "../../components/Targeta";
import { imgPhoto } from "../utils/helpers"
import Modal from "../../components/Modal";


export default function TodosPerso() {
  const [resposta, setResposta] = useState([]);
  const [respostaGryffindor, setGryffindor] = useState([]);
  const [respostaRavenclaw, setRavenclaw] = useState([]);
  const [respostaHufflepuff, setHufflepuff] = useState([]);
  const [respostaSlytherin, setSlytherin] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});
  const [house, setHouse] = useState();
  const [api, setApi] = useState();

  //const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKTGZ3asGHBqoap1YPeldfLJ9Iwk8ZN7prhoOh0Fo6hv8_JoSXxFwIbu_cEYlO8HtG4&usqp=CAU";
  const URL_STUDENTS = "https://hp-api.herokuapp.com/api/characters/house/"

  const gryffindor = "gryffindor";
  const ravenclaw = "ravenclaw";
  const hufflepuff = "hufflepuff";
  const slytherin = "slytherin";
  const characters = "characters";


  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/${characters}`)
      .then((response) => {
        setResposta(response.data);
        console.log(response.data,'response.data');
      })

  }, []);

  useEffect(() => {
    fetch(`${URL_STUDENTS}${gryffindor}`)
      .then((response) => response.json())
      .then((json) => {
        setGryffindor(json);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`${URL_STUDENTS}${ravenclaw}`)
      .then((response) => {
        setRavenclaw(response.data);
      });
  }, []);

  useEffect(() => {
    fetch(`${URL_STUDENTS}${hufflepuff}`)
      .then((response) => response.json())
      .then((json) => {
        setHufflepuff(json);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`${URL_STUDENTS}${slytherin}`)
      .then((response) => {
        setSlytherin(response.data);
      });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams:any = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString(),
        });
      });
      console.log(urlParams, 'urlParams')
      setHouse(urlParams)
      setApi(urlParams)
    }
  }, []);

  const handleOpenModal = (personagem:string) => {
    setPersonagemAtual(personagem);
    setModalIsOpen(true)
  };

  const houses = (house:any) => {
    switch (house?.house) {
      case 'gryffindor': return (
        <>
          <S.SwitchText>grifinória</S.SwitchText>
        </>
      );
      case 'slytherin': return (
        <>
          <S.SwitchText>soncerina</S.SwitchText>
        </>
      );
      case 'hufflepuff': return (
        <>
          <S.SwitchText>lufa-lufa</S.SwitchText>
        </>
      );
      case 'ravenclaw': return (
        <>
          <S.SwitchText>corvinal</S.SwitchText>
        </>
      );
      case 'personagens': return (
        <>
          <S.SwitchText>personagens</S.SwitchText>
        </>
      );
    }
  }
  const apihouse = (api:any) => {
    switch (api?.api) {
      case 'gryffindor': return (
        <>
          {respostaGryffindor &&
            Object.values(respostaGryffindor).map((item) => {
              return (
                <>
                  <S.Actor className='divStudents' onClick={() => handleOpenModal(item)}>
                    {/* @ts-ignore */}
                    <S.ImagePersonagem src={item.image !== '' ? item.image : imgPhoto(item?.name)} alt={item.name} />
                    {/* @ts-ignore */}
                    <S.NameStundent>{item.name}</S.NameStundent>
                  </S.Actor>
                </>
              );
            })}
        </>
      );
      case 'ravenclaw': return (
        <>
          {respostaHufflepuff &&
            Object.values(respostaHufflepuff).map((item) => {
              return (
                <>
                  <S.Actor className='divStudents' onClick={() => handleOpenModal(item)}>
                    {/* @ts-ignore */}
                    <S.ImagePersonagem src={item.image !== '' ? item.image : imgPhoto(item?.name)} alt={item.name} />
                    {/* @ts-ignore */}
                    <S.NameStundent>{item.name}</S.NameStundent>
                  </S.Actor>
                </>
              );
            })}
        </>
      );
      case 'hufflepuff': return (
        <>
          {respostaRavenclaw &&
            Object.values(respostaRavenclaw).map((item) => {
              return (
                <>
                  <S.Actor className='divStudents' onClick={() => handleOpenModal(item)}>
                    {/* @ts-ignore */}
                    <S.ImagePersonagem src={item.image !== '' ? item.image : imgPhoto(item?.name)} alt={item.name} />
                    {/* @ts-ignore */}
                    <S.NameStundent>{item.name}</S.NameStundent>
                  </S.Actor>
                </>
              );
            })}
        </>
      );
      case 'slytherin': return (
        <>
          {respostaSlytherin &&
            Object.values(respostaSlytherin).map((item) => {
              return (
                <>
                  <S.Actor className='divStudents' onClick={() => handleOpenModal(item)}>
                    {/* @ts-ignore */}
                    <S.ImagePersonagem src={item.image !== '' ? item.image : imgPhoto(item?.name)} alt={item.name} />
                    {/* @ts-ignore */}
                    <S.NameStundent>{item.name}</S.NameStundent>
                  </S.Actor>
                </>
              );
            })}
        </>
      );
      case 'personagens': return (
        <>
          {resposta &&
            Object.values(resposta).map((item) => {
              return (
                <>
                  <S.Actor className='divStudents' onClick={() => handleOpenModal(item)}>
                    {/* @ts-ignore */}
                    <S.ImagePersonagem src={item.image !== '' ? item.image : imgPhoto(item?.name)} alt={item.name} />
                    {/* @ts-ignore */}
                    <S.NameStundent>{item.name}</S.NameStundent>
                  </S.Actor>
                </>
              );
            })}
        </>
      );
    }
  }

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
                {houses()}
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
                  {apihouse()}
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
