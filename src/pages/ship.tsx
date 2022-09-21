import type { NextPage } from 'next';
import Head from 'next/head';

const Ship: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Een beschrijving over het schip</title>
                <meta
                    content="Een beschrijving over het schip"
                    name="description"
                />
            </Head>
            <h1>Het Schip</h1>
        </div>
    );
};

export default Ship;
