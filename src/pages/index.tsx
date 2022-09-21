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

            {/* Todo: Landing section */}

            <ImageSection
                imageAlt="Placeholder Image"
                imageLeft
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
            <ImageSection
                imageAlt="Placeholder Image"
                imageSrc={placeholderImg}
            >
                <h2>Ideaal voor groepen: huur de hele Vita Nova af</h2>
                <p>
                    Kom aan boord met jouw vrienden, familie of collega’s en
                    ervaar de intimiteit en sfeer van leven op het water.
                </p>
                <p>
                    Het hele schip staat tot jullie beschikking en in het
                    sfeervolle ruim is er genoeg plaats om samen te borrelen of
                    een spelletje te spelen. Wij denken graag met je mee over
                    leuke groepsactiviteiten of catering aan boord voor een
                    onvergetelijke tijd samen!
                </p>
            </ImageSection>
        </div>
    );
};

const Home = styled(BaseHome)``;

export default Home;
