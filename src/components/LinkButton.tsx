import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { Arrow } from '../svg';

interface IProps {
    arrow?: boolean;
    className?: string;
    href: string;
    title: string;
    secondary?: boolean;
    right?: boolean;
    targetBlank?: boolean;
}

const BaseLinkButton = ({
    arrow,
    className,
    href,
    title,
    targetBlank,
}: IProps) => (
    <Link href={href}>
        <a className={className} target={targetBlank ? '_blank' : '_self'}>
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
    padding: 0 24px;
    min-width: 192px;
    width: fit-content;
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

    @media (${breakpoints.mediumMin}) {
        margin-left: ${({ right }) => right && 'auto'};
    }
`;
