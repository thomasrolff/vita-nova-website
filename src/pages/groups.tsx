import Head from 'next/head';
import type { NextPage } from 'next';
import { Container, SplitImageSection, TextContainer } from '../components';
import { placeholder } from '../data';

const Groups: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Een beschrijving over het groepen</title>
                <meta
                    content="Een beschrijving over groepen"
                    name="description"
                />
            </Head>
            <Container>
                <SplitImageSection
                    imageAlt="placeholder"
                    imageSrc={placeholder}
                >
                    <h2>Groepen</h2>
                    <p>
                        Op zoek naar een unieke groepsaccommodatie in het
                        centrum van Amersfoort? Kom aan boord met jouw vrienden,
                        familie of collega’s en ervaar de intimiteit en sfeer
                        van leven op het water.
                    </p>
                    <p>
                        Het hele schip staat tot jullie beschikking. Slaap in
                        een scheepshut, het vooronder of de roef die allemaal
                        voorzien zijn van eigen sanitair. In het sfeervolle
                        scheepsruim is er genoeg plaats om samen te borrelen of
                        een spelletje te spelen. In de goed uitgeruste keuken
                        kan je je eigen maaltijden klaar maken.
                    </p>
                </SplitImageSection>
                <TextContainer>
                    <h2>Mogelijkheden en tarieven</h2>
                    <p>
                        In het schip is plaats voor een groep van 10 tot 15
                        personen:
                        <ul>
                            <li>
                                – Vanaf 1 november t/m 31 maart is er plaats
                                voor een groep van maximaal 12 personen*.
                            </li>
                            <li>
                                – Vanaf 1 april t/m 31 oktober is er plaats voor
                                een groep van maximaal 15 personen.
                            </li>
                        </ul>
                    </p>
                    <p>
                        Je kan het schip vanaf 2 nachten huren. Dit kan vanaf €
                        1495,-. Voor een offerte op maat kunt u contact met ons
                        opnemen. Als je het schip afhuurt, dan krijg je daarbij:
                    </p>
                    <p>
                        <ul>
                            <li>
                                – bedlinnen en handdoeken, shampoo/douchegel,
                                toiletpapier en keukenlinnen;
                            </li>
                            <li>
                                – onbeperkt toegang tot heerlijke koffie van
                                Boot Koffie en thee van Clipper;
                            </li>
                            <li>
                                – toegang tot het draadloos muzieksysteem Sonos
                                om je persoonlijke muziek af te spelen;
                            </li>
                            <li>
                                – een groot assortiment aan spellen,
                                tijdschriften en de Volkskrant;
                            </li>
                            <li>– een eindschoonmaak;</li>
                            <li>– een terras in de zon;</li>
                            <li>
                                – eenperfecte uitvalsbasis op loopafstand van
                                het stadscentrum en openbaar vervoer.
                            </li>
                        </ul>
                    </p>
                    <p>
                        Wij denken ook graag met je mee over leuke
                        groepsactiviteiten of catering aan boord voor een
                        onvergetelijke tijd samen!
                    </p>
                    <p>
                        * Van 1 november t/m 31 maart is het vooronder gesloten,
                        omdat het hier in de winter wat kouder wordt. In overleg
                        kan het vooronder wel gehuurd worden in deze periode.
                    </p>
                </TextContainer>
            </Container>
        </div>
    );
};

export default Groups;