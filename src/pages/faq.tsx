import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Accordion, Container } from '../components';
import { settings } from '../constants';
import { faqs } from '../data';
import backgroundImg from '/public/images/faqs.jpg';

const ImageContainer = styled.div``;

interface IProps {
    className?: string;
}

const BaseFaq: NextPage = ({ className }: IProps) => (
    <div className={className}>
        <Head>
            <title>Een beschrijving over de Kamers pagina</title>
            <meta
                content="Een beschrijving over de FAQs pagina"
                name="description"
            />
        </Head>
        <Container>
            <h2>FAQs</h2>
            {faqs.map((section) => (
                <Accordion
                    body={section.content}
                    key={section.id}
                    title={section.title}
                />
            ))}
        </Container>
        <ImageContainer>
            <Image
                alt="placeholder"
                layout="fill"
                objectFit="cover"
                src={backgroundImg}
            />
        </ImageContainer>
    </div>
);

const Faq = styled(BaseFaq)`
    h2 {
        margin-bottom: 48px;
        margin-left: 24px;
    }

    ${Container} {
        max-width: 800px;
        // Account for fixed navbar height
        margin: ${settings.navbarHeight + 48 + 'px'} auto 64px;
    }

    ${ImageContainer} {
        position: relative;
        width: 100%;
        height: 480px;
    }
`;

export default Faq;
