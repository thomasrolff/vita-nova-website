import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../constants';

const LinkItem = styled.a``;
const LinkContainer = styled.div``;
const LogoContainer = styled.div``;
const BookingButton = styled.a``;

interface IProps {
    className?: string;
}

const BaseNavbar = ({ className }: IProps) => (
    <nav className={className}>
        <LinkContainer>
            <Link href="/rooms">
                <LinkItem>Kamers </LinkItem>
            </Link>
            <Link href="/ship">
                <LinkItem>Het Schip </LinkItem>
            </Link>
        </LinkContainer>
        <LogoContainer>
            <Link href="/">Logo</Link>
        </LogoContainer>
        <LinkContainer>
            <BookingButton
                href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Boek nu
            </BookingButton>
        </LinkContainer>
    </nav>
);

const Navbar = styled(BaseNavbar)`
    display: flex;
    align-items: center;
    background-color: ${colors.white};
    height: 3.5rem;

    ${LinkItem} {
        padding: 0 12px;
        margin-right: 6px;
        cursor: pointer;

        &:first-of-type {
            margin-left: 12px;
        }
    }

    ${LogoContainer} {
        align-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4.2rem;
        width: 240px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background-color: ${colors.white};
        margin: 0 auto;
    }

    ${BookingButton} {
        background-color: ${colors.orange};
        color: ${colors.white};
        padding: 8px 24px;
        margin-right: 24px;
        font-size: 1.1rem;
    }
`;

export default Navbar;
