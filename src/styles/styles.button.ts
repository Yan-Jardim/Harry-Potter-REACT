import styled from "styled-components";

export const Button = styled.button`
font-family: Arial, Helvetica, sans-serif;
z-index: 1;
background-color: #A6955A;
width: 210px;
height: 42px;
border-radius: 10px;
border:  solid #A6955A;
color:#031C29;
cursor: pointer;
font-size: 16px;
font-weight: 700;
@media (max-width:360px) {
    width: 800px;
    height: 180px;
    font-size: 60px;
    margin-bottom: 40px;
 }
`;