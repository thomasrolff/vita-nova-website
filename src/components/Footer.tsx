import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { routes } from '../data';
import { Logo } from '../svg';
import { Container } from './Container';
import { GoogleMap } from './GoogleMap';

const LogoContainer = styled.div``;
const GoogleMapContainer = styled.div``;
const LinkContainer = styled.ul``;
const LinkItem = styled.li``;
const Copyright = styled.span``;

interface IProps {
    className?: string;
}

const BaseFooter = ({ className }: IProps) => (
    <div className={className}>
        <Container>
            <LinkContainer>
                <h3>LINKS</h3>
                {routes.map((route) => (
                    <Link href={route.href} key={route.id}>
                        <LinkItem>{route.title} </LinkItem>
                    </Link>
                ))}
            </LinkContainer>
            <GoogleMapContainer>
                <GoogleMap />
            </GoogleMapContainer>
        </Container>
        <LogoContainer>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <Copyright>
                &copy; {new Date().getFullYear()} B&B Vita Nova
            </Copyright>
        </LogoContainer>
    </div>
);

export const Footer = styled(BaseFooter)`
    background-color: ${colors.blue};
    color: ${colors.offWhite};
    padding: 48px 24px 24px;

    // Todo: fix responsive padding
    @media (${breakpoints.mediumMin}) {
        padding: 48px 0 24px;
    }

    ${Container} {
        @media (${breakpoints.mediumMin}) {
            display: flex;
            justify-content: space-between;
        }
    }

    ${GoogleMapContainer} {
        @media (${breakpoints.mediumMin}) {
            width: 400px;
        }
    }

    h3 {
        margin-bottom: 8px;
    }

    ${LinkContainer} {
        width: fit-content;
    }

    ${LinkItem} {
        font-weight: 300;
        margin: 4px 0;
        cursor: pointer;
        transition: all 0.5s linear;

        &:hover {
            text-decoration: underline;
        }
    }

    ${LogoContainer} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 24px;
    }

    ${Logo} {
        height: 32px;
        fill: ${colors.offWhite};
    }

    ${Copyright} {
        font-size: 0.8rem;
    }
`;
