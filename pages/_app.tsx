import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import Footer from "../components/Footer"

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider defaultTheme="synthwave">
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
    )
}

export default MyApp
