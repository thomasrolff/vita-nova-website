import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { BookingArrow, Close } from '../svg';

const BookingLink = styled.a``;
const CloseButton = styled.div``;
const TextContainer = styled.div``;

interface IProps {
    className?: string;
    open: boolean;
    popupRef?: React.MutableRefObject<HTMLDivElement | null>;
    onClick(): void;
}

const BaseBookingPopUp = ({ className, popupRef, onClick }: IProps) => {
    const { t } = useTranslation('common');

    return (
        <div className={className} ref={popupRef}>
            <CloseButton onClick={onClick}>
                <Close />
            </CloseButton>
            <TextContainer>
                <p>{t('common:popupTitle')}</p>
            </TextContainer>
            <BookingLink
                href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                rel="noopener noreferrer"
                target="_blank"
            >
                {t('common:bookNow')}
                <BookingArrow />
            </BookingLink>
        </div>
    );
};

export const BookingPopUp = styled(BaseBookingPopUp)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.orange};
    color: ${colors.white};
    font-size: 16px;
    height: 130px;
    width: 240px;
    padding: 16px 16px;

    @media (${breakpoints.mediumMin}) {
        font-size: 18px;
        height: 180px;
        width: 400px;
        padding: 24px;
    }

    ${TextContainer} {
        display: flex;
        height: 100%;
        align-items: center;
    }

    p {
        margin: 0;
        line-height: 1.1;
        padding-right: 44px;
    }

    ${BookingLink} {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: 2px solid ${colors.white};
        color: ${colors.white};
        font-size: 24px;
        padding-top: 10px;
        padding-right: 24px;
        margin-top: auto;

        @media (${breakpoints.mediumMin}) {
            font-size: 28px;
            padding-top: 20px;
            padding-right: 40px;

            :hover {
                ${BookingArrow} {
                    right: 0;
                }
            }
        }

        ${BookingArrow} {
            position: absolute;
            height: 12px;
            right: 0;

            @media (${breakpoints.mediumMin}) {
                height: 16px;
                right: 4px;
                transition: right 0.15s ease-in-out;
            }
        }
    }

    ${CloseButton} {
        position: absolute;
        width: 24px;
        top: 6px;
        right: 6px;
        padding: 6px;
        cursor: pointer;

        @media (${breakpoints.mediumMin}) {
            width: 28px;
            top: 12px;
            right: 12px;
        }
    }
`;
