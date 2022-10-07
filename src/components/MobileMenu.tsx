import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { colors } from '../constants';
import { routes } from '../data';

const LinkItem = styled.a``;
const BookingLink = styled.a``;
const Nav = styled.nav``;

interface IProps {
    className?: string;
    open: boolean;
}

const BaseMobileMenu = ({ className }: IProps) => {
    const router = useRouter();

    return (
        <div className={className}>
            <Nav>
                {routes
                    .filter((route) => route.inNavbar)
                    .map((route) => (
                        <Link href={route.href} key={route.id}>
                            <LinkItem>{route.title}</LinkItem>
                        </Link>
                    ))}
                <Link href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/">
                    <BookingLink>Boek nu</BookingLink>
                </Link>
            </Nav>
        </div>
    );
};

export const MobileMenu = styled(BaseMobileMenu)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-top: 56px;
    background-color: ${colors.white};
    position: fixed;
    transition: top 0.4s ease;
    top: ${({ open }) => (open ? 0 : '-100%')};
    color: ${colors.white};
    z-index: 10;

    ${Nav} {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
    }

    ${LinkItem}, ${BookingLink} {
        font-size: 1.2rem;
        padding: 16px 0;
    }

    ${LinkItem} {
        width: 100%;
        height: 56px;
        color: ${colors.blue};
        border-top: 1px solid ${colors.blue};
    }

    ${BookingLink} {
        color: ${colors.white};
        background-color: ${colors.orange};
    }
`;
