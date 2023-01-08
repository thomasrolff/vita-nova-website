import Head from 'next/head';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
import { Container, SplitSwiperSection } from '../components';
import { LinkButton } from '../components/LinkButton';
import * as images from '../images/hold';

const holdImages = [
    {
        id: 0,
        src: images.hold3Square,
        srcFull: images.hold3,
        alt: 'Image',
    },
    {
        id: 1,
        src: images.hold2Square,
        srcFull: images.hold2,
        alt: 'Image',
    },
    {
        id: 2,
        src: images.hold4Square,
        srcFull: images.hold4,
        alt: 'Image',
    },
    {
        id: 3,
        src: images.hold1Square,
        srcFull: images.hold1,
        alt: 'Image',
    },
];

const breakfastImages = [
    {
        id: 0,
        src: images.breakfast1Square,
        srcFull: images.breakfast1Square,
        alt: 'Image',
    },
    {
        id: 1,
        src: images.breakfast2Square,
        srcFull: images.breakfast2,
        alt: 'Image',
    },
    {
        id: 2,
        src: images.breakfast3Square,
        srcFull: images.breakfast3,
        alt: 'Image',
    },
    {
        id: 3,
        src: images.breakfast4Square,
        srcFull: images.breakfast4,
        alt: 'Image',
    },
];

interface IStaticProps {
    locale: string;
}

export const getStaticProps = async ({ locale }: IStaticProps) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'hold'])),
        },
    };
};

const Ship: NextPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Head>
                <title>{t('hold:meta.title')}</title>
                <meta
                    content={t('hold:meta.description') || ''}
                    name="description"
                />
            </Head>
            <Container>
                <SplitSwiperSection images={holdImages}>
                    <h2>{t('hold:hold.heading')}</h2>
                    <p>{t('hold:hold.body1')}</p>
                    <p>{t('hold:hold.body2')}</p>
                    <LinkButton
                        href="https://my.mpskin.com/nl/tour/vitanova"
                        right
                        secondary
                        targetBlank
                        title={t('hold:hold.tourLinkTitle')}
                    />
                </SplitSwiperSection>
                <SplitSwiperSection imageLeft images={breakfastImages}>
                    <h2>{t('hold:breakfast.heading')}</h2>
                    <p>
                        <Trans i18nKey="hold:breakfast.body1">
                            Van dinsdag tot zondag wordt er in het scheepsruim
                            een heerlijk ontbijt geserveerd. Wij werken graag
                            samen met lokale leveranciers. Bij het ontbijt
                            serveren wij desembrood van
                            <a
                                className="vita-nova-link"
                                href="http://elsenburg-sebastiani.nl/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Elsenburg&Sebastiani
                            </a>
                            , onze koffie is van{' '}
                            <a
                                className="vita-nova-link"
                                href="https://www.bootkoffie.nl/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Boot Koffie
                            </a>{' '}
                            en de granola van{' '}
                            <a
                                className="vita-nova-link"
                                href="https://www.bamboobyte.nl/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Bamboo Bytes
                            </a>
                            .
                        </Trans>
                    </p>
                    <p>{t('hold:breakfast.body2')}</p>
                </SplitSwiperSection>
            </Container>
        </div>
    );
};

export default Ship;
