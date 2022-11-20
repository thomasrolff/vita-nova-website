import { useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import placeholderImg from '../../public/images/placeholder.jpg';
import landingImg2 from '../../public/images/landing-2-min.jpg';
import {
    Container,
    SplitImageSection,
    LandingSection,
    TextContainer,
    LinkButton,
    ReviewSection,
} from '../components';
import { breakpoints, settings } from '../constants';

interface IProps {
    className?: string;
}

const BaseHome: NextPage = ({ className }: IProps) => {
    const sectionRef = useRef<null | HTMLDivElement>(null);
    const { navbarHeight } = settings;

    const handleScrollButtonClick = () => {
        if (!sectionRef.current) return;

        window.scrollTo({
            top: sectionRef.current.offsetTop - navbarHeight,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={className}>
            <Head>
                <title>Welkom aan boord van de Vita Nova</title>
                <meta
                    content="Welkom aan boord van de Vita Nova"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <LandingSection onScrollButtonClick={handleScrollButtonClick} />

            <Container>
                <SplitImageSection
                    imageAlt="Placeholder Image"
                    imageLeft
                    imageSrc={placeholderImg}
                    sectionRef={sectionRef}
                >
                    <h2>Welkom aan boord van de Vita Nova</h2>
                    <p>
                        Op B&B Vita Nova ben je te gast als opvarende. Je stapt
                        geen hotel binnen, maar aan boord van een beleving. Kom
                        aan boord en overnacht in één van de vijf moderne
                        scheepshutten of het vooronder. Hier slaap je op de
                        zachte deining van het water. Een onvergetelijke
                        ervaring!
                    </p>
                    <LinkButton
                        href="/ship"
                        secondary
                        title="Ontdek de Vita Nova"
                    />
                </SplitImageSection>
                <SplitImageSection
                    imageAlt="Placeholder Image"
                    imageSrc={landingImg2}
                >
                    <h2>Ideaal voor groepen: huur de hele Vita Nova af</h2>
                    <p>
                        Kom aan boord met jouw vrienden, familie of collega’s en
                        ervaar de intimiteit en sfeer van leven op het water.
                    </p>
                    <p>
                        Het hele schip staat tot jullie beschikking en in het
                        sfeervolle ruim is er genoeg plaats om samen te borrelen
                        of een spelletje te spelen. Wij denken graag met je mee
                        over leuke groepsactiviteiten of catering aan boord voor
                        een onvergetelijke tijd samen!
                    </p>
                    <LinkButton
                        href="/groups"
                        right
                        secondary
                        title="Meer over groepen"
                    />
                </SplitImageSection>
                <TextContainer center className="review">
                    <ReviewSection />
                </TextContainer>
            </Container>
        </div>
    );
};

const Home = styled(BaseHome)`
    ${SplitImageSection} {
        ${LinkButton} {
            margin-top: 36px;
        }
    }

    ${TextContainer}.review {
        margin-top: 48px;

        @media (${breakpoints.mediumMin}) {
            margin-left: 64px;
            margin-bottom: 64px;
        }
    }
`;

export default Home;
