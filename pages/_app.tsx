import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <ThemeProvider defaultTheme="business">
            <SessionProvider session={session}>
                <Component {...pageProps} />
                {/*<Footer/>*/}
            </SessionProvider>
        </ThemeProvider>
    );
}

export default MyApp;
