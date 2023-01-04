import Head from 'next/head';
import type { NextPage } from 'next';
import { Container, SplitImageSection, TextContainer } from '../components';
import groupsImage from '../../public/images/groups.jpg';
import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface IStaticProps {
    locale: string;
}

export const getStaticProps = async ({ locale }: IStaticProps) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'groups'])),
        },
    };
};

interface IProps {
    className?: string;
}

const BaseGroups: NextPage = ({ className }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={className}>
            <Head>
                <title>{t('groups:meta.title')}</title>
                <meta
                    content={t('groups:meta.description') || ''}
                    name="description"
                />
            </Head>
            <Container>
                <SplitImageSection
                    imageAlt="placeholder"
                    imageSrc={groupsImage}
                >
                    <h2>{t('groups:groups.heading')}</h2>
                    <p>{t('groups:groups.body1')}</p>
                    <p>{t('groups:groups.body2')}</p>
                </SplitImageSection>
                <TextContainer>
                    <h2>{t('groups:info.heading')}</h2>
                    <p>{t('groups:info.groupSize')}</p>
                    <ul>
                        <li>{t('groups:info.groupSizeLi1')}</li>
                        <li>{t('groups:info.groupSizeLi2')}</li>
                    </ul>
                    <p>{t('groups:info.rentShip')}</p>
                    <ul>
                        <li>{t('groups:info.features.bedLinen')}</li>
                        <li>{t('groups:info.features.coffee')}</li>
                        <li>{t('groups:info.features.music')}</li>
                        <li>{t('groups:info.features.games')}</li>
                        <li>{t('groups:info.features.cleaning')}</li>
                        <li>{t('groups:info.features.terrace')}</li>
                        <li>{t('groups:info.features.location')}</li>
                    </ul>
                    <p>{t('groups:info.activities')}</p>
                    <p>{t('groups:info.footnote')}</p>
                </TextContainer>
            </Container>
        </div>
    );
};

const Groups = styled(BaseGroups)`
    ul {
        line-height: 1.8;
        padding-left: 16px;
        color: ${colors.blue};
        font-size: 15px;

        @media (${breakpoints.mediumMin}) {
            padding-left: 32px;
        }
    }

    li {
        list-style-type: disc;
    }

    ${TextContainer} {
        padding-bottom: 72px;
    }
`;

export default Groups;
