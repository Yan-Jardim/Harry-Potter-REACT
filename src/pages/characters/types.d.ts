import { ReactNode } from 'react';
import { CharacterProps } from '../../@types/character';

export interface Props {
  characters: ReactNode;
  titleTab: string;
  titlePage: string;
  contentArray: CharacterProps[];
}

export interface PropsAll {
  characters: CharacterProps[];
}
