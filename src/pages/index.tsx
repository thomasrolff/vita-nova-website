import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import placeholderImg from '../../public/images/placeholder.jpg';
import ImageSection from '../components/ImageSection';

const BaseHome: NextPage = () => {
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
            <h1>Landing Section</h1>
            <ImageSection
                imageAlt="Placeholder Image"
                imageSrc={placeholderImg}
            >
                <h2>Welkom aan boord van de Vita Nova</h2>
                <p>
                    Op B&B Vita Nova ben je te gast als opvarende. Je stapt geen
                    hotel binnen, maar aan boord van een beleving. Kom aan boord
                    en overnacht in één van de vijf moderne scheepshutten of het
                    vooronder. Hier slaap je op de zachte deining van het water.
                    Een onvergetelijke ervaring!
                </p>
            </ImageSection>
        </div>
    );
};

const Home = styled(BaseHome)``;

export default Home;
