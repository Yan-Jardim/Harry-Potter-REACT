import Head from 'next/head'
import { Header } from '../global/components/Header';
import * as S from "../../styles/styles.home";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Harry Potter | Home</title>     
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <S.Content>
      <Header/>         
     </S.Content>
    </div>
  )
}
