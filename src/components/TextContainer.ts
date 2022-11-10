import styled from 'styled-components';
import { breakpoints } from '../constants';

interface IProps {
    center?: boolean;
}

export const TextContainer = styled.div<IProps>`
    padding: 48px 24px 72px;
    display: ${({ center }) => center && 'flex'};
    flex-direction: ${({ center }) => center && 'column'};
    align-items: ${({ center }) => center && 'center'};

    @media (${breakpoints.mediumMin}) {
        padding: 48px 48px 24px;
    }
`;
