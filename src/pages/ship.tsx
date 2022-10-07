import type { NextPage } from 'next';
import Head from 'next/head';
import {
    Container,
    SplitImageSection,
    SplitSwiperSection,
} from '../components';
import { LinkButton } from '../components/LinkButton';
import { placeholder, placeholderFull } from '../data';

const images = [
    {
        id: 0,
        src: placeholder,
        srcFull: placeholderFull,
        alt: 'Handdoeken image',
    },
    {
        id: 1,
        src: placeholder,
        srcFull: placeholderFull,
        alt: 'Placeholder image',
    },
];

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
            <Container>
                <SplitSwiperSection images={images}>
                    <h2>De Vita Nova</h2>
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
                        right
                        secondary
                        targetBlank
                        title="Virtuele tour"
                    />
                </SplitSwiperSection>
                <SplitImageSection
                    imageAlt="placeholder"
                    imageLeft
                    imageSrc={placeholder}
                >
                    <h2>Uw Host</h2>
                    <p>
                        Stukje over de host. Lorem ipsum dolor sit amet,
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
                <SplitImageSection
                    imageAlt="placeholder"
                    imageSrc={placeholder}
                >
                    <h2>Amersfoort</h2>
                    <p>
                        Stukje over Amersfoort. Lorem ipsum dolor sit amet,
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
            </Container>
        </div>
    );
};

export default Ship;
