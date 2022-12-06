import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <ThemeProvider defaultTheme="corporate">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
