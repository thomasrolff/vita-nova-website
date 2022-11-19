import styled from 'styled-components';
import { colors } from '../constants';

interface IProps {
    className?: string;
}

const BaseFacebook = ({ className }: IProps) => (
    <svg
        className={className}
        fill={colors.blue}
        viewBox="0 0 11 22"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M2.28977 21.7726H6.69208V10.794H9.7635L10.0912 7.11736H6.69211C6.69211 7.11736 6.69211 5.7452 6.69211 5.02425C6.69211 4.15721 6.86712 3.81455 7.70872 3.81455C8.38571 3.81455 10.0912 3.81455 10.0912 3.81455V0C10.0912 0 7.57914 0 7.04291 0C3.76703 0 2.28981 1.43669 2.28981 4.18692C2.28981 6.58263 2.28981 7.1174 2.28981 7.1174H0V10.8393H2.28981V21.7726H2.28977Z" />
    </svg>
);

export const Facebook = styled(BaseFacebook)``;
