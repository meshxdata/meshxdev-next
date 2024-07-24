import "../styles/global.css";
import { AppProps } from "next/app";
import { ClerkProvider} from '@clerk/nextjs'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
