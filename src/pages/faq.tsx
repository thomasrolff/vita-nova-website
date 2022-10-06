import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Accordion, Container } from '../components';
import backgroundImg from '/public/images/placeholder_full.jpg';

const ImageContainer = styled.div``;

const accordionData = [
    {
        id: 0,
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore.`,
    },
    {
        id: 1,
        title: 'Section 2',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore.`,
    },
    {
        id: 2,
        title: 'Section 3',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore.`,
    },
];

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
            {accordionData.map((section) => (
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
                height="100%"
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
        margin: 0 auto;
        padding: 48px 0;
    }

    ${ImageContainer} {
        position: relative;
        width: 100%;
        height: 400px;
    }
`;

export default Faq;
