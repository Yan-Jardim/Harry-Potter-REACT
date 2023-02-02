import styled from "styled-components";

export const ImagePersonagem = styled.img`
    background-size:cover;
    border: 2px solid var(--primary);
    cursor:pointer;
    margin-top:1rem;
    height:227px;
    max-height:40vh;
    width:163px;
    background-size:cover;
    &:hover{
        box-shadow: -5px 5px 20px var(--primary);
        transition:0.55s;
    }
    @media (max-width:768px){
        height:45vh;
        max-height:45vh;
        width:25vw;
    }
    @media (max-width:425px){
        height:45vh;
        max-height:45vh;
        width:38vw;
    }
    @media (max-width:360px){
        height:100vh;
        max-height:100vh;
        width:150vw;
    }
`
export const Actor = styled.div`
  color: var(--primary);
   margin: 0rem 1rem;
   font-weight:600;
   font-size:24px;
   margin-bottom: 10px;
   @media (max-width:360px){
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const NameStundent = styled.p`
width: 143px;
height: 28px;
text-align: center;
margin-bottom: 10px;
    @media (max-width:360px){
        font-size:50px;
        height: 100px;
        width: 230px;
    }
`