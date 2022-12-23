import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { breakpoints, colors, settings } from '../constants';
import { routes } from '../data';
import { Logo } from '../svg';
import { Hamburger } from './Hamburger';
import { LocaleSelector } from './LocaleSelector';

const LinkItem = styled.a``;
const LeftLinkContainer = styled.div``;
const RightLinkContainer = styled.div``;
const LogoContainer = styled.div``;
const BookingButton = styled.a``;

interface IProps {
    className?: string;
    menuOpen: boolean;
    onHamburgerClick(): void;
}

const BaseNavbar = ({ className, menuOpen, onHamburgerClick }: IProps) => {
    const router = useRouter();

    return (
        <nav className={className}>
            <Hamburger menuOpen={menuOpen} onClick={onHamburgerClick} />
            <LeftLinkContainer>
                {routes
                    .filter((route) => route.inNavbar)
                    .map((route) => (
                        <Link href={route.href} key={route.id}>
                            <LinkItem
                                className={
                                    router.pathname === route.href
                                        ? 'active'
                                        : ''
                                }
                            >
                                {route.title}
                            </LinkItem>
                        </Link>
                    ))}
            </LeftLinkContainer>
            <LogoContainer>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
            </LogoContainer>

            <RightLinkContainer>
                <LocaleSelector />
                <BookingButton
                    href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Boek nu
                </BookingButton>
            </RightLinkContainer>
        </nav>
    );
};

export const Navbar = styled(BaseNavbar)`
    display: flex;
    align-items: center;
    background-color: ${colors.white};
    height: ${settings.navbarHeight + 'px'};
    z-index: 11;
    position: fixed;
    top: 0;
    width: 100%;

    ${Hamburger} {
        padding: 0 24px;

        @media (${breakpoints.largeMin}) {
            display: none;
        }
    }

    ${LeftLinkContainer} {
        display: none;

        @media (${breakpoints.largeMin}) {
            display: block;
        }
    }

    ${RightLinkContainer} {
        display: none;

        @media (${breakpoints.largeMin}) {
            display: flex;
            margin-left: auto;
        }
    }

    ${LinkItem} {
        margin: 0 12px;
        padding: 3px 0;
        cursor: pointer;
        transition: color 0.12s linear;

        :first-of-type {
            margin-left: 24px;
        }

        :hover {
            color: ${colors.blue};
        }
    }

    .active {
        color: ${colors.blue};
        border-bottom: 3px solid ${colors.blue};
    }

    ${LogoContainer} {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);

        @media (${breakpoints.largeMin}) {
            align-self: flex-start;
            background-color: ${colors.white};
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            height: 4.2rem;
            width: 240px;
            z-index: 12;
        }
    }

    ${Logo} {
        height: 24px;

        @media (${breakpoints.largeMin}) {
            height: 34px;
        }
    }

    ${LocaleSelector} {
        margin-right: 24px;
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

        @media (${breakpoints.largeMin}) {
            height: 36px;
            padding: 8px 24px;
            transition: background-color 0.12s linear;

            :hover {
                background-color: ${colors.blue};
            }
        }
    }
`;
