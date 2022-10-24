import * as S from "./styles";

export default function LogoTodos({action}) {

    return(
        <>
        <div onClick={action}>
          <S.Logo3 src={"logo_3.png"} />
        </div>
        </>
    )
}