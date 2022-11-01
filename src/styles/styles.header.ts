import styled from "styled-components";

export const Target = styled.div`
background-color: #A6955A;
height: 29px;
width: 1345px;
@media (max-width:360px) {
height: 80px;
width: 1345px;
 }
`;
export const LogoDiv = styled.div`
z-index:1;
margin: 120px 0px 0 120px;
@media (max-width:360px) {
display: flex;
align-items: center;
justify-content: center;
margin: 50px 0 0 0;
 }
`;
export const Logo = styled.img`
z-index: 1;

@media (max-width:360px) {
   width: 800px;
   height: 400px;  
   margin-top: 20px;
  margin-right: 0.25rem;
  animation: bounce 0.5s linear infinite alternate;

@keyframes bounce {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(10%);
  }
}
 }
`;
export const BoxBnt = styled.div`
margin: 40px 0 0 175px;
font-weight: 700px;
text-transform: uppercase;
@media (max-width:360px) {
display: flex;
align-items: center;
justify-content: center;
margin-top: 20%;
margin-right: 10%;
 }
`;
