import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Welkom aan boord van de Vita Nova</title>
                <meta
                    content="Welkom aan boord van de Vita Nova"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
