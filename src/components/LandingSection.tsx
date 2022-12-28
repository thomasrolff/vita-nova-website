import styled from 'styled-components';
import { breakpoints, colors, settings } from '../constants';
import { Dropdown } from '../svg';
import { useTranslation } from 'next-i18next';
import { LinkButton } from './LinkButton';

const ButtonContainer = styled.div``;
const ScrollButton = styled.button``;
const Button = styled.a``;

interface IProps {
    className?: string;
    onScrollButtonClick(): void;
}

const BaseLandingSection = ({ className, onScrollButtonClick }: IProps) => {
    const { t } = useTranslation(['common', 'home']);

    return (
        <section className={className}>
            <video autoPlay loop muted playsInline>
                <source
                    src="/video/wintervideo-vita-nova.m4v"
                    type="video/mp4"
                />
            </video>
            <div className="video-overlay" />

            <ButtonContainer>
                <LinkButton href="/rooms" title="Bekijk de kamers" />
                <Button
                    href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {t('common:bookNow')}
                </Button>
            </ButtonContainer>
            <ScrollButton onClick={onScrollButtonClick}>
                <Dropdown />
            </ScrollButton>
        </section>
    );
};

export const LandingSection = styled(BaseLandingSection)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    overflow: hidden;
    // Account for fixed navbar height
    height: calc(100vh - ${settings.navbarHeight + 'px'});

    video,
    .video-overlay {
        position: absolute;
        width: 100vw;
        height: 56.25vw;
        min-height: 100%;
        min-width: 177.77vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .video-overlay {
        background-color: rgba(255, 255, 255, 0.15);
    }

    ${ButtonContainer} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto 0;
        z-index: 1;

        @media (${breakpoints.mediumMin}) {
            flex-direction: row;
        }
    }

    ${ScrollButton} {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 12px;
        height: 64px;
        width: 150px;
        border-radius: 40px;
        background-color: transparent;
        transition: all 0.1s linear;
        z-index: 1;

        @media (${breakpoints.mediumMin}) {
            bottom: 8px;

            :hover {
                bottom: 12px;
            }
        }
    }

    ${Dropdown} {
        height: 10px;
        fill: ${colors.white};
    }

    ${Button}, ${LinkButton} {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.white};
        width: 220px;
        margin: 6px 8px;
        height: 44px;
        font-size: 1.1rem;
        border: 1px solid ${colors.white};
        background-color: rgba(255, 255, 255, 0);
        transition: all 0.2s linear;

        @media (${breakpoints.mediumMin}) {
            margin-bottom: 48px;

            :hover {
                background-color: ${colors.white};
                color: ${colors.blue};
            }
        }
    }
`;
