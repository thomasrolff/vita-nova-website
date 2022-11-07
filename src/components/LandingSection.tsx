import styled from 'styled-components';
import { breakpoints, colors, settings } from '../constants';
import { Arrow } from '../svg';
import { LinkButton } from './LinkButton';

const ButtonContainer = styled.div``;
const ScrollButton = styled.button``;

interface IProps {
    className?: string;
    onScrollButtonClick(): void;
}

const BaseLandingSection = ({ className, onScrollButtonClick }: IProps) => (
    <section className={className}>
        <ButtonContainer>
            <LinkButton
                href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                title="Boek nu"
            />
        </ButtonContainer>
        <ScrollButton onClick={onScrollButtonClick}>
            <Arrow />
        </ScrollButton>
    </section>
);

export const LandingSection = styled(BaseLandingSection)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: center / cover no-repeat url('images/placeholder.jpg');
    width: 100%;
    // Account for fixed navbar height
    height: calc(100vh - ${settings.navbarHeight + 'px'});

    ${ButtonContainer} {
        display: flex;
        flex-direction: column;
    }

    ${ScrollButton} {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 1.5rem;
        height: 44px;
        width: 44px;
        border-radius: 40px;
        background-color: ${colors.offWhite};
    }

    ${Arrow} {
        height: 14px;
    }

    @media (${breakpoints.mediumMin}) {
    }
`;
