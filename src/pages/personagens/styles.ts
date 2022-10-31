import styled from "styled-components";

export const Container = styled.section`
width: 1345px;
`;
export const Background1 = styled.div`
background-image: url('background_2.png');
`;
export const SwitchText = styled.p`
text-transform:uppercase;
`;

export const Target = styled.div`
background: #A6955A;
height: 103px;
display: flex;
justify-content: center;
align-items: center;
@media  (max-width:360px) {
   height: 200px;
}
`;
export const BoxBack = styled.div`
display: flex;
justify-content: center;
z-index: 0;
`;
export const Main = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 45px;
position: absolute;
@media  (max-width:360px) {
   display: flex;
   flex-direction: column;
   margin-top: 100px;
}
`;
export const LogoMain = styled.img`
width: 72px;
height: 84px;
z-index: 999;
@media  (max-width:360px) {
    width: 200px;
    height: 212px;
} 
`;
export const BoxText = styled.div`
font-family: Arial, Helvetica, sans-serif;
margin-left: 15px;
`;
export const Text = styled.p`
color: #A6955A;
font-size: 24px;
font-weight: 400;
text-transform: uppercase;
@media  (max-width:360px) {
   font-size: 50px;
}
`;
export const BoxBorder = styled.div`
margin-left: 50px;
`;
export const Border = styled.div`
width: 840px;
height: 0px;
border: 3px solid #A6955A;
transform: rotate(-0.17deg);
z-index: 1;
`;

export const Mdl = styled.main`
display: flex;
justify-content: center;
margin-top: 150px;
margin-left: 80px;
@media (max-width:768px){
width:95vw;
} 
`
export const BoxInfo = styled.main`
z-index: 2;
    padding:1rem 0;
    @media (max-width:768px){
        width:95vw;
    }
    @media  (max-width:360px) {
   margin-top: 300px;
 }
`

export const CardsStudents = styled.div`
    display:flex;
    @media (max-width:360px){
        display:flex;
        justify-content: center;
    }
`

export const ImageCardSudents = styled.div`
background-image: url('background_2.png');
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    align-self: stretch;
    text-align:center;
    position: relative;
    margin-right: 100px;       
`

export const ImagePersonagem = styled.img`
    background-size:cover;
    border: 2px solid #A6955A;
    cursor:pointer;
    margin-top:1rem;
    height:227px;
    max-height:40vh;
    width:163px;
    background-size:cover;
    &:hover{
        box-shadow: -5px 5px 20px #A6955A;
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
  color: #A6955A;
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
    @media (max-width:360px){
        font-size:50px;
        height: 100px;
        width: 230px;
    }
`