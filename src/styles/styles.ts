import styled from "styled-components";

export const Content = styled.section`
width: 1345px;
margin: 0 auto;
`;
export const Target = styled.div`
border: 8px solid #A6955A;
@media (max-width:360px) {
    background-color: #A6955A;
    height: 50px;
 }
`;
export const Background = styled.div`
background-image: url('back.png');
background-size: cover;
background-repeat: no-repeat;
z-index: 0;
height: 730px;
`;
export const Logo = styled.img`
z-index: 1;
margin: 120px 0px 0 120px;
@media (max-width:360px) {
    height: 300px;
    margin: 100px 0px 0px 400px;
 }
`;
export const BoxBnt = styled.div`
margin: 40px 0 0 175px;
font-weight: 700px;
text-transform: uppercase;
@media (max-width:360px) {
   display: flex;
   justify-content: center;
   margin: 0;
 }
`;

export const Main = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 150px;
@media (max-width:360px) {
display: flex;
flex-direction: column;
}
`;
export const LogoMain = styled.div`
background-image: url('logo2.png');
width: 72px;
height: 84px;
margin-left: 120px;
@media (max-width:360px) {
margin: 0;
}
`;
export const BoxText = styled.div`
font-family: Arial, Helvetica, sans-serif;
 margin-right: 30px;
`;
export const Text = styled.p`
color: #A6955A;
font-size: 18px;
font-weight: 400;
@media (max-width:360px) {
    font-size: 50px;
}
`;
export const Border = styled.div`
border: 3px solid #A6955A;
width: 804px;
height: 0px;
margin-right: 50px;
@media (max-width:360px) {
    border: 3px solid #A6955A; 
    width:360px; 
    height:0px; 

}
`;
export const Cards = styled.section`
display: flex;
justify-content: space-evenly;
margin-top: 150px;
margin-left: 5px;
@media (max-width:360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
 }
`;
export const Card1 = styled.div`
width: 272px;
height: 288px;
background-image: url('grifinoria.png');
border: 2px solid #A6955A;
cursor: pointer;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
    @media (max-width:360px) {
   background-repeat: no-repeat;
   padding: 30px 0;
}
`;

export const Card2 = styled.div`
width: 272px;
height: 288px;
background-image: url('sonserina.png');
border: 2px solid #A6955A;
cursor: pointer;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
    @media (max-width:360px) {
   background-repeat: no-repeat;
   padding: 30px 0;
}
`;
export const Card3 = styled.div`
width: 272px;
height: 288px;
background-image: url('lufa-lufa.png');
border: 2px solid #A6955A;
cursor: pointer;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
    @media (max-width:360px) {
   background-repeat: no-repeat;
   padding: 30px 0;
}
`;
export const Card4 = styled.div`
width: 272px;
height: 288px;
background-image: url('corvinal.png');
border: 2px solid #A6955A;
cursor: pointer;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
    `;