import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, FeatureList, SplitSwiperSection } from '../components';
import { LinkButton } from '../components/LinkButton';
import { ReadMoreDrawer } from '../components/ReadMoreDrawer';
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

const BaseRooms: NextPage = ({ className }: IProps) => (
    <div className={className}>
        <Head>
            <title>B&B Vita Nova - Kamers</title>
            <meta
                content="Aan boord van B&B Vita Nova in Amersfoort kan je overnachten in één van de vijf scheepshutten, het vooronder of de roef. Een unieke ervaring!"
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
                    <h2>{room.title}</h2>
                    <FeatureList features={room.features} />
                    <p>{room.description}</p>
                    {room.extraInfo && (
                        <ReadMoreDrawer
                            body={room.extraInfo}
                            title="Meer over scheepscomfort"
                        />
                    )}
                    <LinkButton
                        href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                        right={room.id % 2 === 0}
                        secondary
                        targetBlank
                        title="Beschikbaarheid"
                    />
                </SplitSwiperSection>
            ))}
        </Container>
    </div>
);

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
