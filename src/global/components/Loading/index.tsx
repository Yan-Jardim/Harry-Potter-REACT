import Image from 'next/image';
import * as S from "./styles";
import LoaderSrc from '../../../../public/loader.gif';

export function Loading() {
  return (
    <S.Wrapper>
      <Image src={LoaderSrc} alt='loading' />
    </S.Wrapper>
  );
}
