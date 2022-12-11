import styled from 'styled-components';
import { colors, settings } from '../constants';
import { Arrow } from '../svg';
import { LinkButton } from './LinkButton';

const ButtonContainer = styled.div``;
const ScrollButton = styled.button``;
const RoomsButton = styled(LinkButton)``;

interface IProps {
    className?: string;
    onScrollButtonClick(): void;
}

const BaseLandingSection = ({ className, onScrollButtonClick }: IProps) => (
    <section className={className}>
        <ButtonContainer>
            <LinkButton
                href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                targetBlank
                title="Boek nu"
            />
            <RoomsButton href="/rooms" title="Kamers bekijken" />
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
    background: center / cover no-repeat url('images/landing.jpg');
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
        transition: all 0.1s linear;
    }

    ${Arrow} {
        height: 14px;
    }

    ${RoomsButton} {
        background-color: ${colors.offWhite};
        color: ${colors.blue};
        margin-top: 8px;

        :hover {
            background-color: ${colors.white};
        }
    }
`;
