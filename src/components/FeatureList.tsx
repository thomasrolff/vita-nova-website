import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { IFeature } from '../types';

const IconContainer = styled.span``;

interface IProps {
    className?: string;
    features: IFeature[];
}

const BaseFeatureList = ({ className, features }: IProps) => (
    <ul className={className}>
        {features.map((feature) => {
            const SvgComponent = feature.svg;

            return (
                <li key={feature.id}>
                    <IconContainer>
                        <SvgComponent />
                    </IconContainer>
                    {feature.title}
                </li>
            );
        })}
    </ul>
);

export const FeatureList = styled(BaseFeatureList)`
    color: ${colors.blue};
    margin: 1.5rem 0 1.5rem 1rem;
    font-size: 1rem;

    li {
        margin: 6px 0;
    }

    ${IconContainer} {
        height: 100%;
        width: 1rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.6rem;
    }

    svg {
        max-height: 1rem;
        max-width: 1rem;
    }
`;