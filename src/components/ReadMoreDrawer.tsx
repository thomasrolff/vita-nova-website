import { useRef, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import { Dropdown } from '../svg';

interface IDropdownIcon {
    isActive: boolean;
}

const Title = styled.div``;
const Body = styled.div``;
const DropdownIcon = styled(Dropdown)<IDropdownIcon>`
    transform: ${({ isActive }) => isActive && 'rotate(180deg)'};
    transition: all 0.12s ease-in-out;
`;

interface IProps {
    className?: string;
    title: string;
    body: string;
}

const BaseReadMoreDrawer = ({ className, title, body }: IProps) => {
    const [isActive, setIsActive] = useState(false);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    const getActiveHeight = () => {
        if (!bodyRef.current) return;

        return bodyRef.current.scrollHeight;
    };

    return (
        <div className={className}>
            <Title onClick={() => setIsActive(!isActive)}>
                {title}
                <DropdownIcon isActive={isActive} />
            </Title>
            <Body
                ref={bodyRef}
                style={{ maxHeight: isActive ? getActiveHeight() : 0 }}
            >
                {body}
            </Body>
        </div>
    );
};

export const ReadMoreDrawer = styled(BaseReadMoreDrawer)`
    color: ${colors.blue};
    line-height: 1.8;

    ${Title} {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    ${Body} {
        overflow: hidden;
        transition: max-height 0.25s ease-in-out;
    }

    ${DropdownIcon} {
        margin-left: 8px;
    }
`;
