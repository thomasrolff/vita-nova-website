import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import {
    Container,
    FeatureList,
    SplitSwiperSection,
    ReadMoreDrawer,
    LinkButton,
} from '../components';
import { rooms } from '../data';

interface IStaticProps {
    locale: string;
}

export const getStaticProps = async ({ locale }: IStaticProps) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'rooms'])),
        },
    };
};

interface IProps {
    className?: string;
}

const BaseRooms: NextPage = ({ className }: IProps) => {
    const { t } = useTranslation('rooms');

    return (
        <div className={className}>
            <Head>
                <title>{t('rooms:meta.title')}</title>
                <meta
                    content={t('rooms:meta.description') || ''}
                    name="description"
                />
            </Head>
            <Container>
                {rooms.map((room) => (
                    <SplitSwiperSection
                        imageLeft={room.id % 2 !== 0}
                        images={room.images}
                        key={room.id}
                    >
                        <h2>{t(room.title)}</h2>
                        <FeatureList features={room.features} />
                        <p>{t(room.description)}</p>
                        {room.extraInfo && (
                            <ReadMoreDrawer
                                body={t(room.extraInfo)}
                                title={t('rooms:sailorsCabin.extraInfoTitle')}
                            />
                        )}
                        <LinkButton
                            href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                            right={room.id % 2 === 0}
                            secondary
                            targetBlank
                            title={t('rooms:availability')}
                        />
                    </SplitSwiperSection>
                ))}
            </Container>
        </div>
    );
};

const Rooms = styled(BaseRooms)`
    font-size: 15px;

    ${LinkButton} {
        margin-top: 32px;
    }

    ${FeatureList} {
        margin-top: 16px;
    }

    p {
        margin-bottom: 0;
        line-height: 1.7;
    }

    ${ReadMoreDrawer} {
        margin-top: 12px;
    }
`;

export default Rooms;
