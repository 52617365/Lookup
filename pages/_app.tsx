import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider defaultTheme="synthwave">
            <div className={"relative"}>
                <Component {...pageProps} />
            </div>
            {/*<Footer/>*/}
        </ThemeProvider>
    )
}

export default MyApp
