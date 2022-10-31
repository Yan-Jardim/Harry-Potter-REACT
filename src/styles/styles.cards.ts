import styled from "styled-components";

export const Cards = styled.div`
display: flex;
justify-content: space-around;
margin-top: 150px;
margin-left: 5px;
@media (max-width:360px) {
   display: flex;
   flex-direction: column;
   align-items: center;
}
`;

export const Card1 = styled.img`
width: 272px;
height: 288px;
border: 2px solid #A6955A;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
    @media (max-width:360px) {
margin-bottom: 50px;
width: 50%;
height: 50%;
}
`;

export const Card2 = styled.img`
width: 272px;
height: 288px;
border: 2px solid #A6955A;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
    @media (max-width:360px) {
margin-bottom: 50px;
width: 50%;
height: 50%;
}
`;
export const Card3 = styled.img`
width: 272px;
height: 288px;
border: 2px solid #A6955A;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
    @media (max-width:360px) {
margin-bottom: 50px;
width: 50%;
height: 50%;
}
`;
export const Card4 = styled.img`
width: 272px;
height: 288px;
border: 2px solid #A6955A;
&:hover{
        box-shadow: -5px 5px 20px #A6955A;
        transition:0.55s;
    }
@media (max-width:360px) {
width: 50%;
height: 50%;
margin-bottom: 50px;
}
`;