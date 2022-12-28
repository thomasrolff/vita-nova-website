import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import styled from 'styled-components';
import {
    Container,
    SplitImageSection,
    SplitSwiperSection,
} from '../components';
import { colors } from '../constants';
import * as images from '../images/ship';

interface IStaticProps {
    locale: string;
}

export const getStaticProps = async ({ locale }: IStaticProps) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'ship'])),
        },
    };
};

interface IProps {
    className?: string;
}

const imagesData = [
    {
        id: 0,
        src: images.ship1Square,
        srcFull: images.ship1,
        alt: 'Handdoeken image',
    },
    {
        id: 1,
        src: images.ship2Square,
        srcFull: images.ship2,
        alt: 'Handdoeken image',
    },
    {
        id: 2,
        src: images.ship3Square,
        srcFull: images.ship3,
        alt: 'Handdoeken image',
    },
    {
        id: 3,
        src: images.ship4Square,
        srcFull: images.ship4,
        alt: 'Handdoeken image',
    },
];

const BaseShip: NextPage = ({ className }: IProps) => (
    <div className={className}>
        <Head>
            <title>B&B Vita Nova - Het schip</title>
            <meta
                content="B&B Vita Nova is gevestigd op een voormalig binnenvaartschip. Het schip ligt in de haven van Amersfoort, op loopafstand van het oude stadscentrum."
                name="description"
            />
        </Head>
        <Container>
            <SplitSwiperSection images={imagesData}>
                <h2>Van vrachtschip naar B&B</h2>
                <p>
                    De Vita Nova is een motorvrachtschip dat in 1940 gebouwd is
                    in België, een zogenaamde spits. Het schip is met haar
                    specifieke afmetingen speciaal gebouwd om te kunnen varen
                    over de kanalen en door de sluizen in België en Frankrijk.
                    De Vita Nova is in de periode dat ze dienst deed als
                    vrachtschip meerdere keren in Amersfoort geweest. Sinds 2010
                    is er een B&B in het schip gevestigd.
                </p>
                <p>
                    Aan boord zijn vijf scheepshutten, het vooronder en de roef.
                    In het scheepsruim wordt het ontbijt geserveeerd en is er
                    ruimte voor ontspanning.{' '}
                </p>
                <a
                    href="https://my.mpskin.com/nl/tour/vitanova"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Klik hier voor een virtuele tour door het schip!
                </a>
            </SplitSwiperSection>
            <SplitImageSection
                imageAlt="placeholder"
                imageLeft
                imageSrc={images.yourHost}
            >
                <h2>Meet the host</h2>
                <p>
                    Ik ben Elène en ik ontvang je graag aan boord van mijn schip
                    Vita Nova. Sinds 2018 run ik met trots en plezier een B&B in
                    dit stoere vrachtschip uit 1940. Ontdek de charme van dit
                    schip op deze unieke locatie in Amersfoort.
                </p>
            </SplitImageSection>
            <SplitImageSection
                imageAlt="placeholder"
                imageSrc={images.amersfoort}
            >
                <h2>Thuishaven: Amersfoort</h2>
                <p>
                    Onze thuishaven is Amersfoort: centraal gelegen, goed
                    bereikbaar en vlakbij de historische binnenstad. Het schip
                    ligt midden in &lsquo;De Nieuwe Stad&rsquo;, het creatieve
                    gebied van Amersfoort.
                </p>
                <p>
                    Via het moderne Eemplein en de prachtige Koppelpoort loop je
                    eenvoudig naar het oude stadscentrum.
                </p>
                <p>
                    Een verblijf in Amersfoort is ook eenvoudig te combineren
                    met een bezoek aan bijvoorbeeld Utrecht of Amsterdam.
                </p>
            </SplitImageSection>
        </Container>
    </div>
);

const Ship = styled(BaseShip)`
    a {
        color: ${colors.blue};

        :hover {
            text-decoration: underline;
        }
    }
`;

export default Ship;
