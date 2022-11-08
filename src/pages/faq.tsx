import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Accordion, Container, TextContainer } from '../components';
import { faqs } from '../data';
import backgroundImg from '/public/images/placeholder_full.jpg';

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
            <TextContainer>
                <h2>FAQs</h2>
                {faqs.map((section) => (
                    <Accordion
                        body={section.content}
                        key={section.id}
                        title={section.title}
                    />
                ))}
            </TextContainer>
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
        margin-bottom: 64px;
    }

    ${ImageContainer} {
        position: relative;
        width: 100%;
        height: 480px;
    }
`;

export default Faq;
