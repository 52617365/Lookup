import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider defaultTheme="synthwave">
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <div className={"relative"}>
          <Component {...pageProps} />
        </div>
        {/*<Footer/>*/}
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
