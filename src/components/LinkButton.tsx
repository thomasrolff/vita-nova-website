import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../constants';

interface IProps {
    className?: string;
    href: string;
    title: string;
}

const BaseLinkButton = ({ className, href, title }: IProps) => (
    <Link href={href}>
        <a className={className}>{title}</a>
    </Link>
);

export const LinkButton = styled(BaseLinkButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    background-color: ${colors.orange};
    border: 1px solid ${colors.orange};
    font-size: 1rem;
    height: 42px;
    width: 180px;
    cursor: pointer;
`;
