import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--primary);
  height: 1.8rem;
  z-index: 1000;
`
export const ImgOne = styled.img`
    margin: 120px 0 0 120px ;
`
export const ImagMain = styled.div`

`
export const BoxButton = styled.div`
margin: 40px 0px 0px 175px;
text-transform: uppercase;

 button {
background-color: var(--primary);
width: 210px;
height: 42px;
border-radius: 10px;
border: solid var(--primary);
color: var(--dark);
cursor: pointer;
font-size: 16px;
font-weight: 700;
}
`
export const Img = styled.img`

`
export const Org = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;
`
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
 color: var(--primary);
font-size: 18px;
font-weight: 400;
 @media (max-width:360px) {
font-size: 80px;    
}
`;
export const Border = styled.div`
border: 3px solid var(--primary);
width: 804px;
height: 0px;
margin-right: 50px;
@media (max-width:360px) {
    border: none;
}
`;