import styled from 'styled-components';
import { colors } from '../constants';
import { BookingArrow, Close } from '../svg';

const BookingLink = styled.a``;
const CloseButton = styled.div``;

interface IProps {
    className?: string;
    open: boolean;
    popupRef?: React.MutableRefObject<HTMLDivElement | null>;
    onClick(): void;
}

const BaseBookingPopUp = ({ className, popupRef, onClick }: IProps) => (
    <div className={className} ref={popupRef}>
        <CloseButton onClick={onClick}>
            <Close />
        </CloseButton>
        <p>Boek direct en krijg de beste prijs!</p>
        <BookingLink
            href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
            rel="noopener noreferrer"
            target="_blank"
        >
            Boek nu
            <BookingArrow />
        </BookingLink>
    </div>
);

export const BookingPopUp = styled(BaseBookingPopUp)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 400px;
    font-size: 18px;
    background-color: ${colors.orange};
    color: ${colors.white};
    padding: 24px;

    p {
        margin: 0;
    }

    ${BookingLink} {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: 2px solid ${colors.white};
        color: ${colors.white};
        font-size: 28px;
        padding-top: 20px;
        padding-right: 40px;
        margin-top: auto;

        ${BookingArrow} {
            position: absolute;
            height: 16px;
            right: 4px;
            transition: right 0.15s ease-in-out;
        }

        :hover {
            ${BookingArrow} {
                right: 0;
            }
        }
    }

    ${CloseButton} {
        position: absolute;
        width: 28px;
        height: 28px;
        top: 12px;
        right: 12px;
        padding: 6px;
        cursor: pointer;
    }
`;
