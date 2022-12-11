import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, SplitSwiperSection } from '../components';
import { LinkButton } from '../components/LinkButton';
import * as images from '../images/hold';

const holdImages = [
    {
        id: 0,
        src: images.hold3Square,
        srcFull: images.hold3,
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
        src: images.hold4Square,
        srcFull: images.hold4,
        alt: 'Handdoeken image',
    },
    {
        id: 3,
        src: images.hold1Square,
        srcFull: images.hold1,
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
                <title>B&B Vita Nova - Het scheepsruim</title>
                <meta
                    content="In het scheepsruim van B&B Vita Nova is ruimte voor ontspanning en wordt in de ochtend een heerlijk ontbijt met lokale producten geserveerd."
                    name="description"
                />
            </Head>
            <Container>
                <SplitSwiperSection images={holdImages}>
                    <h2>Het scheepsruim</h2>
                    <p>
                        In het scheepsruim is er ruimte voor ontspanning en
                        plezier. Heb je zin in een kopje koffie, thee of
                        misschien een speciaal biertje? In onze minibar op basis
                        van self service is dit allemaal verkrijgbaar.
                    </p>
                    <p>
                        Met een ruim assortiment aan spelletjes en tijdschriften
                        is er voldoende vermaak. &lsquo;s Winters zorgt de
                        pelletkachel voor een heerlijke warmte en in de zomer
                        kan je buiten op de picknicktafels in het zonnetje
                        vertoeven.
                    </p>
                    <LinkButton
                        href="https://my.mpskin.com/nl/tour/vitanova"
                        right
                        secondary
                        targetBlank
                        title="Virtuele tour"
                    />
                </SplitSwiperSection>
                <SplitSwiperSection imageLeft images={breakfastImages}>
                    <h2>Aan boord ontbijten</h2>
                    <p>
                        Van dinsdag tot zondag wordt er in het scheepsruim een
                        heerlijk ontbijt geserveerd. Wij werken graag samen met
                        lokale leveranciers. Bij het ontbijt serveren wij
                        desembrood van Elsenburg&Sebastiani, onze koffie is van
                        Boot Koffie en de granola van Bamboo Bytes.
                    </p>
                    <p>
                        Van dinsdag t/m vrijdag serveren we het ontbijt tussen
                        7.30 uur en 10.30 uur. Op zaterdag en zondag kan er
                        tussen 9.00 en 10.30 uur aangeschoven worden.
                    </p>
                </SplitSwiperSection>
            </Container>
        </div>
    );
};

export default Ship;
