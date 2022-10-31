import styled from "styled-components";

export const Content = styled.section`
width: 1345px;
margin: 0 auto;
`;

export const Background = styled.div`
background-image: url('back.png');
background-size: 100%;
background-repeat: no-repeat;
z-index: 0;
height: 730px;
@media (max-width:360px) {
background-color: #041b29;
background-image: none;
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
margin-top: 5%;
}
`;
export const LogoMain = styled.img`
width: 72px;
height: 84px;
margin-left: 120px;
@media (max-width:360px) {
display: flex;
align-items: center;
width: 200px;
height: 212px;
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
    border: none;
}
`;