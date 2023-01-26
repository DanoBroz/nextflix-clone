import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Slab } from "@next/font/google";

const robotoSlab = Roboto_Slab({
    weight: "400",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={robotoSlab.className}>
            <Component {...pageProps} />
        </main>
    );
}
