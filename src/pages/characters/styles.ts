import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
`;

export const Target = styled.div`
background: var(--primary);
height: 6.4rem;
z-index: 1000;
display: flex;
justify-content: center;
align-items: center;
@media  (max-width:360px) {
   height: auto;
}
`;


