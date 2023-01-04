import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation, Trans } from 'next-i18next';
import styled from 'styled-components';
import { Accordion, Container } from '../components';
import { colors, settings } from '../constants';
import backgroundImg from '/public/images/faqs.jpg';
import Link, { LinkProps } from 'next/link';

interface IStaticProps {
    locale: string;
}

export const getStaticProps = async ({ locale }: IStaticProps) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'faq'])),
        },
    };
};

const ImageContainer = styled.div``;

interface IProps {
    className?: string;
}

const BaseFaq: NextPage = ({ className }: IProps) => {
    const { t } = useTranslation();

    const LinkComponent = (props: React.PropsWithChildren<LinkProps>) => {
        return (
            <Link {...props} href={props.href || ''}>
                <a>{props.children}</a>
            </Link>
        );
    };

    return (
        <div className={className}>
            <Head>
                <title>{t('faq:meta.title')}</title>
                <meta
                    content={t('faq:meta.description') || ''}
                    name="description"
                />
            </Head>
            <Container>
                <h2>FAQs</h2>
                <Accordion title={t('faq:cancelPolicy.title')}>
                    <p>{t('faq:cancelPolicy.body1')}</p>
                    <p>{t('faq:cancelPolicy.body2')}</p>
                    <p>{t('faq:cancelPolicy.body3')}</p>
                </Accordion>
                <Accordion title={t('faq:parking.title')}>
                    <p>{t('faq:parking.body1')}</p>
                    <p>{t('faq:parking.body2')}</p>
                </Accordion>
                <Accordion title={t('faq:checkInOut.title')}>
                    <p>{t('faq:checkInOut.body')}</p>
                </Accordion>
                <Accordion title={t('faq:breakfast.title')}>
                    <p>{t('faq:breakfast.body')}</p>
                </Accordion>
                <Accordion title={t('faq:bike.title')}>
                    <p>{t('faq:bike.body')}</p>
                </Accordion>
                <Accordion title={t('faq:groups.title')}>
                    <p>
                        <Trans
                            components={{
                                linkComponent: <LinkComponent href="/groups" />,
                            }}
                            i18nKey="faq:groups.body"
                            t={t}
                        />
                    </p>
                </Accordion>
                <Accordion title={t('faq:gift.title')}>
                    <p>{t('faq:gift.body')}</p>
                </Accordion>
            </Container>
            <ImageContainer>
                <Image
                    alt="placeholder"
                    layout="fill"
                    objectFit="cover"
                    // Todo: add better quality image
                    src={backgroundImg}
                />
            </ImageContainer>
        </div>
    );
};

const Faq = styled(BaseFaq)`
    h2 {
        margin-bottom: 48px;
        margin-left: 24px;
    }

    ${Container} {
        max-width: 800px;
        // Account for fixed navbar height
        margin: ${settings.navbarHeight + 48 + 'px'} auto 96px;
    }

    ${ImageContainer} {
        position: relative;
        width: 100%;
        height: 480px;
    }

    a {
        color: ${colors.blue};
        text-decoration: underline;
    }
`;

export default Faq;
