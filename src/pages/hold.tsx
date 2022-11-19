import type { NextPage } from 'next';
import Head from 'next/head';
import {
    Container,
    SplitImageSection,
    SplitSwiperSection,
} from '../components';
import { LinkButton } from '../components/LinkButton';
import * as images from '../images/hold';

const holdImages = [
    {
        id: 0,
        src: images.hold1Square,
        srcFull: images.hold1,
        alt: 'Handdoeken image',
    },
    {
        id: 1,
        src: images.hold2Square,
        srcFull: images.hold2,
        alt: 'Handdoeken image',
    },
    {
        id: 2,
        src: images.hold3Square,
        srcFull: images.hold3,
        alt: 'Handdoeken image',
    },
    {
        id: 3,
        src: images.hold4Square,
        srcFull: images.hold4,
        alt: 'Handdoeken image',
    },
];

const breakfastImages = [
    {
        id: 0,
        src: images.breakfast1Square,
        srcFull: images.breakfast1Square,
        alt: 'Handdoeken image',
    },
    {
        id: 1,
        src: images.breakfast2Square,
        srcFull: images.breakfast2,
        alt: 'Handdoeken image',
    },
    {
        id: 2,
        src: images.breakfast3Square,
        srcFull: images.breakfast3,
        alt: 'Handdoeken image',
    },
    {
        id: 3,
        src: images.breakfast4Square,
        srcFull: images.breakfast4,
        alt: 'Handdoeken image',
    },
];

const Ship: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Een beschrijving over het scheepsruim</title>
                <meta
                    content="Een beschrijving over het scheepsruim"
                    name="description"
                />
            </Head>
            <Container>
                <SplitSwiperSection images={holdImages}>
                    <h2>Het scheepsruim</h2>
                    <p>
                        De Vita Nova is een motorvrachtschip dat in 1940 gebouwd
                        is in België, een zogenaamde spits. Het schip is met
                        haar specifieke afmetingen speciaal gebouwd om te kunnen
                        varen over de kanalen en door de sluizen in België en
                        Frankrijk. De Vita Nova is in de periode dat ze dienst
                        deed als vrachtschip meerdere keren in Amersfoort
                        geweest.
                    </p>
                    <p>
                        De Vita Nova is één van de meest compleet bewaard
                        gebleven schepen in Europa van deze soort. Het behoort
                        tot het zogenaamde Varende Erfgoed. Sinds 2010 is er een
                        B&B in het schip gevestigd.
                    </p>
                    <LinkButton
                        href="https://my.mpskin.com/nl/tour/vitanova"
                        secondary
                        targetBlank
                        title="Virtuele tour"
                    />
                </SplitSwiperSection>
                <SplitImageSection
                    imageAlt="placeholder"
                    imageLeft
                    imageSrc={images.kitchen}
                >
                    <h2>De keuken</h2>
                    <p>
                        Stukje over de keuken. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nam vulputate non dui sit
                        amet suscipit. Nam pellentesque mollis turpis at semper.
                        Duis et erat in leo iaculis aliquam eget id tortor.
                        Vestibulum aliquet quam iaculis nibh lobortis egestas.
                    </p>
                    <p>
                        Aliquam hendrerit semper diam at faucibus. Nulla viverra
                        velit quis est sollicitudin, nec consequat nisl blandit.
                        Suspendisse facilisis imperdiet quam, at sodales mauris.
                    </p>
                </SplitImageSection>
                <SplitSwiperSection images={breakfastImages}>
                    <h2>Ontbijt en lunch</h2>
                    <p>
                        Stukje ontbijt en lunch voorzieningen op de Vita Nova.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vulputate non dui sit amet suscipit. Nam
                        pellentesque mollis turpis at semper. Duis et erat in
                        leo iaculis aliquam eget id tortor. Vestibulum aliquet
                        quam iaculis nibh lobortis egestas.
                    </p>
                    <p>
                        Aliquam hendrerit semper diam at faucibus. Nulla viverra
                        velit quis est sollicitudin, nec consequat nisl blandit.
                        Suspendisse facilisis imperdiet quam, at sodales mauris.
                    </p>
                </SplitSwiperSection>
            </Container>
        </div>
    );
};

export default Ship;
