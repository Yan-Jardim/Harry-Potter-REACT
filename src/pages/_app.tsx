
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { GlobalStyle } from "../../styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
  <div className="container">
    <GlobalStyle/>
  <Component key={router.asPath} {...pageProps} />
  </div>
  )
}