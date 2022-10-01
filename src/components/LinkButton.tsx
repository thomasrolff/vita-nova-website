import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../constants';
import { Arrow } from '../svg';

interface IProps {
    arrow?: boolean;
    className?: string;
    href: string;
    title: string;
    secondary?: boolean;
}

const BaseLinkButton = ({ arrow, className, href, title }: IProps) => (
    <Link href={href}>
        <a className={className}>
            {title}
            {arrow && <Arrow />}
        </a>
    </Link>
);

export const LinkButton = styled(BaseLinkButton)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ secondary }) => (secondary ? colors.blue : colors.white)};
    background-color: ${({ secondary }) =>
        secondary ? 'transparent' : colors.orange};
    border: ${({ secondary }) =>
        secondary ? `1px solid ${colors.blue}` : `1px solid ${colors.orange}`};
    font-size: 1.1rem;
    height: 44px;
    width: 192px;
    cursor: pointer;
    transition: all 0.12s linear;

    ${Arrow} {
        position: absolute;
        transform: rotate(270deg);
        height: 20px;
        fill: ${colors.white};
        right: 24px;
    }

    &:hover {
        color: ${({ secondary }) => secondary && colors.offWhite};
        background-color: ${({ secondary }) => secondary && colors.blue};
    }
`;
