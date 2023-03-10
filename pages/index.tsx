import Banner from "../components/banner/banner";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Nextflix</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Nextflix</h1>
            {/* <NavBar /> */}
            <Banner />

            {/* <Card /> */}
        </>
    );
}
