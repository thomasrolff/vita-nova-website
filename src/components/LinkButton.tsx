import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../constants';
import { Arrow } from '../svg';

interface IProps {
    arrow?: boolean;
    className?: string;
    href: string;
    title: string;
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
    color: ${colors.white};
    background-color: ${colors.orange};
    border: 1px solid ${colors.orange};
    font-size: 1.1rem;
    height: 44px;
    width: 192px;
    cursor: pointer;

    ${Arrow} {
        position: absolute;
        transform: rotate(270deg);
        height: 20px;
        fill: ${colors.white};
        right: 24px;
    }
`;
