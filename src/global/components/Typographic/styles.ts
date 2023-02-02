import styled from "styled-components";
import { IPrimaryColorProps } from "./types";

export const Large = styled.h1<IPrimaryColorProps>`
  font-size: var(--font-size-large);  
  color: ${(props) => props.primary ? 'var(--dark)' : 'var(--primary'};
`

export const Medium = styled.h2<IPrimaryColorProps>`
  font-size: var(--font-size-medium);
  color: ${(props) => props.primary ? 'var(--dark)' : 'var(--primary)'};
  @media (max-width: 768px) {
    font-size: var(--font-regular);
  }
`

export const Regular = styled.h3<IPrimaryColorProps>`
  font-size: var(--font-size-regular);
  color: ${(props) => props.primary ? 'var(--dark)' : 'var(--primary)'};
`

export const Small = styled.h4<IPrimaryColorProps>`
  font-size: var(--font-size-small);
  color: ${(props) => props.primary ? 'var(--dark)' : 'var(--primary)'};
`

export const Description = styled.p<IPrimaryColorProps>`
  font-size: var(--font-size-regular);
  color: ${(props) => props.primary ? 'var(--dark)' : 'var(--primary)'};
`