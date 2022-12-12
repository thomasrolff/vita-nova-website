import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import placeholderImg from '../../public/images/placeholder.jpg';
import landingImg2 from '../../public/images/landing-2-min.jpg';
import giftImg from '../../public/images/gift.jpg';
import {
    BookingPopUp,
    Container,
    SplitImageSection,
    LandingSection,
    LinkButton,
} from '../components';
import { breakpoints, settings } from '../constants';

interface IProps {
    className?: string;
}

const BaseHome: NextPage = ({ className }: IProps) => {
    const sectionRef = useRef<null | HTMLDivElement>(null);
    const popupRef = useRef<null | HTMLDivElement>(null);
    const [showPopUp, setShowPopUp] = useState(true);
    const { navbarHeight } = settings;

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
        }, 3000);
    }, []);

    return (
        <div className={className}>
            <Head>
                <title>Welkom aan boord van B&B Vita Nova</title>
                <meta
                    content="Overnacht op een voormalig binnenvaartschip in het stadscentrum van Amersfoort. Bij B&B Vita Nova stap je aan boord van een bijzondere beleving."
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
                    <h2>Welkom aan boord van B&B Vita Nova</h2>
                    <p>
                        Op B&B Vita Nova ben je te gast als opvarende. Je stapt
                        geen hotel binnen, maar aan boord van een beleving. Kom
                        aan boord en overnacht in één van de vijf scheepshutten,
                        het vooronder of de roef. Hier slaap je op de zachte
                        deining van het water. Een onvergetelijke ervaring!
                    </p>
                    <LinkButton
                        href="/ship"
                        secondary
                        title="Ontdek B&B Vita Nova"
                    />
                </SplitImageSection>
                <SplitImageSection
                    imageAlt="Placeholder Image"
                    imageSrc={landingImg2}
                >
                    <h2>Ideaal voor groepen: huur het hele schip</h2>
                    <p>
                        Kom aan boord met jouw vrienden, familie of collega’s en
                        ervaar de intimiteit en sfeer van leven op het water.
                    </p>
                    <p>
                        Het hele schip staat tot jullie beschikking en in het
                        sfeervolle ruim is er genoeg plaats om samen te borrelen
                        of een spelletje te spelen. Wij denken graag met je mee
                        over leuke groepsactiviteiten voor een onvergetelijke
                        tijd samen!
                    </p>
                    <LinkButton
                        href="/groups"
                        right
                        secondary
                        title="Meer over groepen"
                    />
                </SplitImageSection>
                <SplitImageSection imageAlt="Gift" imageLeft imageSrc={giftImg}>
                    <h2>Geef B&B Vita Nova kado!</h2>
                    <p>
                        Ben jij op zoek naar een uniek kado? Geef je vader,
                        moeder, broer, zus, vriend, vriendin of collega een
                        waardebon kado voor een overnachting aan boord van B&B
                        Vita Nova.
                    </p>
                    <p>
                        Het is mogelijk om een waardebon te kopen voor 1 of 2
                        personen en met of zonder ontbijt.
                    </p>
                    <p>
                        De waardebon pakken wij feestelijk voor je in, zodat het
                        extra leuk is om te geven én te krijgen. De waardebon
                        kan je na bevestiging van je bestelling bij ons afhalen
                        of we sturen hem kosteloos per post naar je op. De
                        waardebon is tot een jaar na aankoop geldig.
                    </p>
                    <p>
                        Wil jij iemand verrassen? Neem contact met ons op via de
                        e-mail, telefoon of whatsapp.
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
        display: none;

        @media (${breakpoints.mediumMin}) {
            display: flex;
            position: fixed;
            bottom: 40px;
            right: -100%;
            z-index: 200;
            transition: right 0.96s ease-in-out;
        }
    }
`;

export default Home;
