import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { breakpoints, colors } from '../constants';
import { IFeature } from '../types';

const IconContainer = styled.span``;

interface IProps {
    className?: string;
    features: IFeature[];
}

const BaseFeatureList = ({ className, features }: IProps) => {
    const { t } = useTranslation();

    return (
        <ul className={className}>
            {features.map((feature) => {
                const SvgComponent = feature.svg;

                return (
                    <li key={feature.id}>
                        <IconContainer>
                            <SvgComponent />
                        </IconContainer>
                        {t(feature.title)}
                    </li>
                );
            })}
        </ul>
    );
};

export const FeatureList = styled(BaseFeatureList)`
    color: ${colors.blue};
    padding-left: 8px;
    font-size: 16px;

    @media (${breakpoints.mediumMin}) {
        padding-left: 24px;
    }

    li {
        margin: 6px 0;
    }

    ${IconContainer} {
        height: 100%;
        width: 16px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    svg {
        height: 16px;
        width: 16px;
    }
`;
