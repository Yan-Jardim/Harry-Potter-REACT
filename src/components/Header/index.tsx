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
            <div>
                <S.Target />
            </div>

            <div>
                <S.Logo src={"logo.png"} />
                <S.BoxBnt>
                    <Button action={() => (window.location.href = "/personagens?house=personagens&api=personagens")}
                        label1={'Veja Todos'}
                        label2={'os Personagens'}
                    />

                </S.BoxBnt>
            </div>
        </div>
    )
}