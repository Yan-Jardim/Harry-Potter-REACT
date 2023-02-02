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
background: var(--primary);
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
text-transform: uppercase;
`;
export const Text = styled.p`
color: var(--primary);
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
border: 3px solid var(--primary);
transform: rotate(-0.17deg);
z-index: 1;
`;

export const Mdl = styled.main`
display: flex;
justify-content: center;
margin-top: 150px;
margin-left: 80px;
@media (max-width:360px){
//width:95vw;
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