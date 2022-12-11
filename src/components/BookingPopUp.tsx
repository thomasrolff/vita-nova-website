import styled from 'styled-components';
import { colors } from '../constants';
import { BookingArrow } from '../svg';

const BookingLink = styled.a``;

interface IProps {
    className?: string;
    open: boolean;
    popupRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const BaseBookingPopUp = ({ className, popupRef }: IProps) => (
    <div className={className} ref={popupRef}>
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
    }

    ${BookingArrow} {
        position: absolute;
        right: 8px;
        height: 16px;
    }
`;
