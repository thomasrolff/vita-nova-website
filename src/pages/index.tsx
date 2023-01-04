import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import placeholderImg from '../../public/images/placeholder.jpg';
import landingImg2 from '../../public/images/landing-2-min.jpg';
import giftImg from '../../public/images/gift.jpg';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
    BookingPopUp,
    Container,
    SplitImageSection,
    LandingSection,
    LinkButton,
} from '../components';
import { colors, settings } from '../constants';
import { useTranslation, Trans } from 'next-i18next';

interface IStaticProps {
    locale: string;
}

export const getStaticProps = async ({ locale }: IStaticProps) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home'])),
        },
    };
};

interface IProps {
    className?: string;
}

const BaseHome: NextPage = ({ className }: IProps) => {
    const sectionRef = useRef<null | HTMLDivElement>(null);
    const popupRef = useRef<null | HTMLDivElement>(null);
    const [showPopUp, setShowPopUp] = useState(true);
    const { navbarHeight } = settings;
    const { t } = useTranslation();

    const handleScrollButtonClick = () => {
        if (!sectionRef.current) return;

        window.scrollTo({
            top: sectionRef.current.offsetTop - navbarHeight,
            left: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        setTimeout(() => {
            if (!popupRef.current) return;

            popupRef.current.style.right = '0';
        }, 8000);
    }, []);

    return (
        <div className={className}>
            <Head>
                <title>{t('home:welcomeTitle')}</title>
                <meta
                    content={t('home:meta.description') || ''}
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>

            {showPopUp && (
                <BookingPopUp
                    open={true}
                    popupRef={popupRef}
                    onClick={() => setShowPopUp(false)}
                />
            )}

            <LandingSection onScrollButtonClick={handleScrollButtonClick} />

            <Container>
                <SplitImageSection
                    imageAlt="Placeholder Image"
                    imageLeft
                    imageSrc={placeholderImg}
                    noImageMobile
                    sectionRef={sectionRef}
                >
                    <h2>{t('home:welcomeTitle')}</h2>
                    <p>{t('home:welcomeBody')}</p>
                    <LinkButton
                        href="/ship"
                        secondary
                        title={t('home:discover')}
                    />
                </SplitImageSection>
                <SplitImageSection
                    imageAlt="Placeholder Image"
                    imageSrc={landingImg2}
                >
                    <h2>{t('home:groupsTitle')}</h2>
                    <p>{t('home:groupsBody1')}</p>
                    <p>{t('home:groupsBody2')}</p>
                    <LinkButton
                        href="/groups"
                        right
                        secondary
                        title={t('home:moreOnGroups')}
                    />
                </SplitImageSection>
                <SplitImageSection imageAlt="Gift" imageLeft imageSrc={giftImg}>
                    <h2>{t('home:giftTitle')}</h2>
                    <p>{t('home:giftBody1')}</p>
                    <p>{t('home:giftBody2')}</p>
                    <p>{t('home:giftBody3')}</p>
                    <p>
                        <Trans i18nKey="home:giftBody4">
                            Wil jij iemand verrassen? Neem contact met ons op
                            via{' '}
                            <a
                                className="gift-link"
                                href="mailto:elene@hotelvitanova.nl"
                            >
                                e-mail
                            </a>
                            ,{' '}
                            <a className="gift-link" href="tel:+31651672548">
                                telefoon
                            </a>{' '}
                            of{' '}
                            <a
                                className="gift-link"
                                href="https://wa.me/31651672548"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                whatsapp
                            </a>
                            .
                        </Trans>
                    </p>
                </SplitImageSection>
            </Container>
        </div>
    );
};

const Home = styled(BaseHome)`
    ${SplitImageSection} {
        ${LinkButton} {
            margin-top: 36px;
        }
    }

    ${BookingPopUp} {
        position: fixed;
        bottom: 40px;
        right: -100%;
        z-index: 200;
        transition: right 0.96s ease-in-out;
    }

    .gift-link {
        color: ${colors.blue};
        text-decoration: underline;
    }
`;

export default Home;
