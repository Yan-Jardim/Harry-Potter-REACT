import * as S from "../../styles/styles.header";
import Button from "../Button";
import Head from "next/head";


export default function Header() {
    return (
        <div data-testid="test-header">
            <Head>
                <title>Harry Potter</title>
                <meta name="description" content="Harry Potter" />
                <link rel="icon" href="chapeu.png" />
            </Head>
            <S.Soon src={"bpo1.png"} />
            <S.SizeBnt>
                <Button action={() => (window.location.href = "/personagens?casa=personagens&numbre=personagens")}
                    label1={'Veja Todos'}
                    label2={'os Personagens'}
                />
            </S.SizeBnt>
        </div>
    )
}