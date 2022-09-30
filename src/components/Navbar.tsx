import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { Logo } from '../svg';
import { Hamburger } from './Hamburger';

const LinkItem = styled.a``;
const LeftLinkContainer = styled.div``;
const RightLinkContainer = styled.div``;
const LogoContainer = styled.div``;
const BookingButton = styled.a``;

interface IProps {
    className?: string;
    onHamburgerClick(): void;
}

const BaseNavbar = ({ className, onHamburgerClick }: IProps) => (
    <nav className={className}>
        <Hamburger onClick={onHamburgerClick} />
        <LeftLinkContainer>
            <Link href="/rooms">
                <LinkItem>Kamers </LinkItem>
            </Link>
            <Link href="/ship">
                <LinkItem>Het Schip </LinkItem>
            </Link>
        </LeftLinkContainer>
        <LogoContainer>
            <Link href="/">
                <Logo />
            </Link>
        </LogoContainer>
        <RightLinkContainer>
            <BookingButton
                href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Boeken
            </BookingButton>
        </RightLinkContainer>
    </nav>
);

export const Navbar = styled(BaseNavbar)`
    display: flex;
    align-items: center;
    background-color: ${colors.white};
    height: 3.5rem;

    ${Hamburger} {
        margin: 0 24px;

        @media (${breakpoints.mediumMin}) {
            display: none;
        }
    }

    ${LeftLinkContainer} {
        display: none;

        @media (${breakpoints.mediumMin}) {
            display: block;
        }
    }

    ${RightLinkContainer} {
        display: none;

        @media (${breakpoints.mediumMin}) {
            display: block;
            margin-left: auto;
        }
    }

    ${LinkItem} {
        padding: 0 12px;
        margin-right: 6px;
        cursor: pointer;

        &:first-of-type {
            margin-left: 12px;
        }
    }

    ${LogoContainer} {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);

        @media (${breakpoints.mediumMin}) {
            align-self: flex-start;
            background-color: ${colors.white};
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            height: 4.2rem;
            width: 240px;
            z-index: 1;
        }
    }

    ${Logo} {
        height: 24px;

        @media (${breakpoints.mediumMin}) {
            height: 34px;
        }
    }

    ${BookingButton} {
        display: flex;
        align-items: center;
        background-color: ${colors.orange};
        color: ${colors.white};
        height: 32px;
        padding: 0 12px;
        margin-right: 24px;
        font-size: 1rem;

        @media (${breakpoints.mediumMin}) {
            height: 36px;
            padding: 8px 24px;
        }
    }
`;
