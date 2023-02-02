import { ReactNode } from 'react';
import { CharacterProps } from '../../@types/character';

export interface IModalProps<T = any> {
  personagemAtual: CharacterProps | null | T ;
  handleClose: () => void
  };