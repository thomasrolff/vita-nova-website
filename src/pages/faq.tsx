import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Accordion, Container } from '../components';

const accordionData = [
    {
        id: 0,
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
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
            {accordionData.map((section) => (
                <Accordion
                    body={section.content}
                    key={section.id}
                    title={section.title}
                />
            ))}
        </Container>
        <div className="test" />
    </div>
);

const Faq = styled(BaseFaq)`
    .test {
        height: 400px;
    }
`;

export default Faq;
