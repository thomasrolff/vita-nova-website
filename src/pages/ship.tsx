import styled from 'styled-components';
import Head from 'next/head';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { colors } from '../constants';
import * as images from '../images/ship';
import {
    Container,
    SplitImageSection,
    SplitSwiperSection,
} from '../components';

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
        alt: 'Image',
    },
    {
        id: 1,
        src: images.ship2Square,
        srcFull: images.ship2,
        alt: 'Image',
    },
    {
        id: 2,
        src: images.ship3Square,
        srcFull: images.ship3,
        alt: 'Image',
    },
    {
        id: 3,
        src: images.ship4Square,
        srcFull: images.ship4,
        alt: 'Image',
    },
];

const BaseShip: NextPage = ({ className }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={className}>
            <Head>
                <title>{t('ship:meta.title')}</title>
                <meta
                    content={t('ship:meta.description') || ''}
                    name="description"
                />
            </Head>
            <Container>
                <SplitSwiperSection images={imagesData}>
                    <h2>{t('ship:ship.heading')}</h2>
                    <p>{t('ship:ship.body1')}</p>
                    <p>{t('ship:ship.body2')}</p>
                    <a
                        href="https://my.mpskin.com/nl/tour/vitanova"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {t('ship:ship.tourLinkTitle')}
                    </a>
                </SplitSwiperSection>
                <SplitImageSection
                    imageAlt="placeholder"
                    imageLeft
                    imageSrc={images.yourHost}
                >
                    <h2>{t('ship:host.heading')}</h2>
                    <p>{t('ship:host.body')}</p>
                </SplitImageSection>
                <SplitImageSection
                    imageAlt="placeholder"
                    imageSrc={images.amersfoort}
                >
                    <h2>{t('ship:location.heading')}</h2>
                    <p>{t('ship:location.body1')}</p>
                    <p>{t('ship:location.body2')}</p>
                    <p>{t('ship:location.body3')}</p>
                </SplitImageSection>
            </Container>
        </div>
    );
};

const Ship = styled(BaseShip)`
    a {
        color: ${colors.blue};

        :hover {
            text-decoration: underline;
        }
    }
`;

export default Ship;
