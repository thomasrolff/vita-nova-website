import styled from 'styled-components';
import { breakpoints } from '../constants';
import { LinkButton } from './LinkButton';

const ButtonContainer = styled.div``;

interface IProps {
    className?: string;
}

const BaseLandingSection = ({ className }: IProps) => (
    <section className={className}>
        <ButtonContainer>
            <LinkButton
                href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                title="Boeken"
            />
        </ButtonContainer>
        <button className="arrow">Scroll</button>
    </section>
);

export const LandingSection = styled(BaseLandingSection)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: center / cover no-repeat url('images/placeholder.jpg');
    height: calc(100vh - 56px);
    width: 100%;

    ${ButtonContainer} {
        display: flex;
        flex-direction: column;
    }

    .arrow {
        position: absolute;
        bottom: 2rem;
    }

    @media (${breakpoints.mediumMin}) {
    }
`;
