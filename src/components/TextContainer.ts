import styled from 'styled-components';
import { breakpoints } from '../constants';

export const TextContainer = styled.div`
    padding: 48px 24px 72px;

    @media (${breakpoints.mediumMin}) {
        padding: 48px 48px 24px;
    }
`;
