import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { routes } from '../data';
import { Email, Logo, Phone, Pin } from '../svg';
import { Container } from './Container';
import { Map } from './Map';

const LogoContainer = styled.div``;
const GoogleMapContainer = styled.div``;
const ListContainer = styled.ul``;
const LinkItem = styled.li``;
const Copyright = styled.span``;
const ContactContainer = styled.div``;
const ContactLink = styled.a``;

interface IProps {
    className?: string;
}

const BaseFooter = ({ className }: IProps) => (
    <div className={className}>
        <Container>
            <ListContainer>
                <h3>LINKS</h3>
                {routes.map((route) => (
                    <Link href={route.href} key={route.id}>
                        <LinkItem>{route.title}</LinkItem>
                    </Link>
                ))}
            </ListContainer>
            <ContactContainer>
                <ListContainer>
                    <h3>CONTACT</h3>
                    <li>
                        <Pin />
                        Kleine koppel 11
                    </li>
                    <li>3812 PG Amersfoort</li>
                    <li>
                        <Email />
                        <ContactLink href="mailto:elene@hotelvitanova.nl">
                            elene@hotelvitanova.nl
                        </ContactLink>
                    </li>
                    <li>
                        <Phone />
                        <ContactLink href="tel:+31651672548">
                            +31 651672548
                        </ContactLink>
                    </li>
                </ListContainer>
                <GoogleMapContainer>
                    <Map />
                </GoogleMapContainer>
            </ContactContainer>
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

    ${ContactContainer} {
        display: flex;
        flex-direction: column;

        @media (${breakpoints.mediumMin}) {
            flex-direction: row;
        }
    }

    ${GoogleMapContainer} {
        @media (${breakpoints.mediumMin}) {
            margin-left: 140px;
            width: 400px;
        }
    }

    ${ListContainer}, ${GoogleMapContainer} {
        margin-bottom: 32px;

        @media (${breakpoints.mediumMin}) {
            margin-bottom: 0;
        }
    }

    ${ListContainer} {
        width: fit-content;
    }

    h3 {
        margin-bottom: 8px;
    }

    ${Pin}, ${Email}, ${Phone} {
        display: none;

        @media (${breakpoints.mediumMin}) {
            display: block;
            position: absolute;
            left: -24px;
        }
    }

    li {
        position: relative;
        display: flex;
        align-items: center;
        margin: 4px 0;
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

    ${ContactLink} {
        color: ${colors.offWhite};

        :hover {
            text-decoration: underline;
        }
    }
`;
