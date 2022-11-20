import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import {
    Container,
    SplitImageSection,
    SplitSwiperSection,
} from '../components';
import { colors } from '../constants';
import * as images from '../images/ship';

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
            <title>Een beschrijving over het schip</title>
            <meta
                content="Een beschrijving over het schip"
                name="description"
            />
        </Head>
        <Container>
            <SplitSwiperSection images={imagesData}>
                <h2>De Vita Nova</h2>
                <p>
                    De Vita Nova is een motorvrachtschip dat in 1940 gebouwd is
                    in België, een zogenaamde spits. Het schip is met haar
                    specifieke afmetingen speciaal gebouwd om te kunnen varen
                    over de kanalen en door de sluizen in België en Frankrijk.
                    De Vita Nova is in de periode dat ze dienst deed als
                    vrachtschip meerdere keren in Amersfoort geweest. Sinds 2010
                    is er een B&B in het schip gevestigd. Aan boord zijn vijf
                    scheepshutten, het vooronder en de roef (de voormalige
                    schipperswoning). Er is een gemeenschappelijke ruimte waar
                    onder andere het ontbijt wordt geserveerd. In de
                    gemeenschappelijke ruimte zijn spelletjes en tijdschriften
                    aanwezig en staat een minibar op basis van selfservice. Bij
                    mooi weer kan er gebruik worden gemaakt van de
                    picknicktafels op de kade.
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
                <h2>Uw Host</h2>
                <p>
                    Stukje over de host. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nam vulputate non dui sit amet suscipit.
                    Nam pellentesque mollis turpis at semper. Duis et erat in
                    leo iaculis aliquam eget id tortor. Vestibulum aliquet quam
                    iaculis nibh lobortis egestas.
                </p>
                <p>
                    Aliquam hendrerit semper diam at faucibus. Nulla viverra
                    velit quis est sollicitudin, nec consequat nisl blandit.
                    Suspendisse facilisis imperdiet quam, at sodales mauris.
                </p>
            </SplitImageSection>
            <SplitImageSection
                imageAlt="placeholder"
                imageSrc={images.amersfoort}
            >
                <h2>Amersfoort</h2>
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
