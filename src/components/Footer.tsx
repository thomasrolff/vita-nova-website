import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints, colors, settings } from '../constants';
import { routes } from '../data';
import { Email, Logo, Phone, Pin, Insta, Facebook, Whatsapp } from '../svg';
import { Container } from './Container';
import { Map } from './Map';

const LogoContainer = styled.div``;
const GoogleMapContainer = styled.div``;
const ListContainer = styled.ul``;
const LinkItem = styled.li``;
const Copyright = styled.span``;
const ContactContainer = styled.div``;
const ContactLink = styled.a``;
const SocialContainer = styled.div``;
const SocialLink = styled.a``;
const FlexContainer = styled(Container)``;

interface IProps {
    className?: string;
}

const BaseFooter = ({ className }: IProps) => (
    <div className={className}>
        <Container>
            <SocialContainer>
                <SocialLink
                    href="https://www.instagram.com/hotelvitanova033/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Insta />
                </SocialLink>
                <SocialLink
                    href="https://www.facebook.com/hotelvitanova/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Facebook />
                </SocialLink>
                <SocialLink
                    href="https://wa.me/31651672548"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Whatsapp />
                </SocialLink>
            </SocialContainer>
        </Container>
        <FlexContainer>
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
            </ContactContainer>
            <GoogleMapContainer>
                <Map />
            </GoogleMapContainer>
        </FlexContainer>
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

    @media (min-width: ${settings.maxContainerWidthRem}) {
        padding: 48px 0 24px;
    }

    ${SocialContainer} {
        display: flex;
        margin-bottom: 48px;
    }

    ${SocialLink} {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        width: 44px;
        border-radius: 50%;
        background-color: ${colors.offWhite};
        transition: background-color 0.15s linear;
        margin-right: 24px;

        svg {
            height: 24px;
            width: 24px;
        }

        :hover {
            background-color: ${colors.white};
        }
    }

    ${FlexContainer} {
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
            margin-left: 48px;
        }
    }

    ${ContactLink} {
        color: ${colors.offWhite};

        :hover {
            text-decoration: underline;
        }
    }

    ${GoogleMapContainer} {
        height: 240px;

        @media (${breakpoints.mediumMin}) {
            /* margin-left: 48px; */
            height: 220px;
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
            left: -32px;
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
        margin-top: 32px;
    }

    ${Logo} {
        height: 32px;
        fill: ${colors.offWhite};
    }

    ${Copyright} {
        font-size: 0.8rem;
    }
`;
