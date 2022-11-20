import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, FeatureList, SplitSwiperSection } from '../components';
import { LinkButton } from '../components/LinkButton';
import { ReadMoreDrawer } from '../components/ReadMoreDrawer';
import { rooms } from '../data';

interface IProps {
    className?: string;
}

const BaseRooms: NextPage = ({ className }: IProps) => (
    <div className={className}>
        <Head>
            <title>Een beschrijving over de Kamers pagina</title>
            <meta
                content="Een beschrijving over de Kamers pagina"
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
        margin-top: 4px;
    }
`;

export default Rooms;
