import styled from "styled-components";

export const Content = styled.section`
background-image: url('/back.png');
background-size: 100%;
background-repeat: no-repeat;
z-index: 0;
height: 730px;
@media (max-width:360px) {
background-color: var(--dark);
background-image: none;
}
`;