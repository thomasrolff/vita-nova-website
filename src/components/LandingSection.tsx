import styled from 'styled-components';
import { colors, settings } from '../constants';
import { Arrow } from '../svg';
import { useTranslation } from 'next-i18next';

const ButtonContainer = styled.div``;
const ScrollButton = styled.button``;
const BookingButton = styled.a``;

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
                <BookingButton
                    href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {t('common:bookNow')}
                </BookingButton>
                <ScrollButton onClick={onScrollButtonClick}>
                    <Arrow />
                </ScrollButton>
            </ButtonContainer>
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
        width: 100vw;
        height: 56.25vw;
        min-height: 100vh;
        min-width: 177.77vh;
        position: absolute;
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
        width: 100%;
        z-index: 1;
        margin-bottom: 60px;
    }

    ${ScrollButton} {
        /* position: absolute; */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        width: 44px;
        border-radius: 40px;
        background-color: ${colors.offWhite};
        transition: all 0.1s linear;
    }

    ${Arrow} {
        height: 14px;
    }

    ${BookingButton} {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.white};
        width: 100%;
        max-width: 220px;
        margin: 0 auto;
        padding: 16px 0;
        font-size: 20px;
        border: 1px solid ${colors.white};
        border-radius: 40px;
        margin-bottom: 8%;
    }
`;
