import styled from 'styled-components';
import { colors } from '../constants';

const Line = styled.div``;

interface IProps {
    className?: string;
    onClick(): void;
}

const BaseHamburger = ({ className, onClick }: IProps) => (
    <div className={className} onClick={onClick}>
        <Line />
        <Line />
        <Line />
    </div>
);

export const Hamburger = styled(BaseHamburger)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30px;
    height: 100%;

    ${Line} {
        height: 2px;
        margin: 2px;
        background-color: ${colors.blue};
    }
`;
