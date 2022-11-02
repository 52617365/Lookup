import "../styles/globals.css";
import type {AppProps} from "next/app";
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        // <ThemeProvider defaultTheme="business">
        <div className={"bg-gray-100"}>
            <SessionProvider session={session}>
                <Component {...pageProps} />
                {/*<Footer/>*/}
            </SessionProvider>
        </div>
        // </ThemeProvider>
    );
}

export default MyApp;
