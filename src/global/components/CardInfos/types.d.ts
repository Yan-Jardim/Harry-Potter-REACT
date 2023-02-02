import { ReactNode } from 'react';
import { CharacterProps } from '../../@types/character';

export interface ICardProps<T = any> {
  characters: T;
  handleOpenModal: T
  }

