import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, SplitSwiperSection } from '../components';
import { LinkButton } from '../components/LinkButton';
import { rooms } from '../constants';

interface IProps {
    className?: string;
}

const BaseRooms: NextPage = ({ className }: IProps) => {
    const roomOne = rooms[0];
    const roomTwo = rooms[1];

    return (
        <div className={className}>
            <Head>
                <title>Een beschrijving over de Kamers pagina</title>
                <meta
                    content="Een beschrijving over de Kamers pagina"
                    name="description"
                />
            </Head>
            <Container>
                <SplitSwiperSection images={roomOne.images}>
                    <h2>{roomOne.title}</h2>
                    <p>{roomOne.description}</p>
                </SplitSwiperSection>
                <SplitSwiperSection imageLeft images={roomTwo.images}>
                    <h2>{roomTwo.title}</h2>
                    <p>{roomTwo.description}</p>
                </SplitSwiperSection>
            </Container>
        </div>
    );
};

const Rooms = styled(BaseRooms)`
    ${LinkButton} {
        margin-top: 36px;
    }
`;

export default Rooms;
