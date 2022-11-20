import { useRef, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import { createMarkup } from '../utils';

const AccordionTitle = styled.div``;
const AccordionBody = styled.div``;
const Icon = styled.div``;

interface IProps {
    className?: string;
    title: string;
    body: string;
}

const BaseAccordion = ({ className, title, body }: IProps) => {
    const [isActive, setIsActive] = useState(false);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    const getActiveHeight = () => {
        if (!bodyRef.current) return;

        return bodyRef.current.scrollHeight;
    };

    return (
        <div className={className}>
            <AccordionTitle onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <Icon>{isActive ? '-' : '+'}</Icon>
            </AccordionTitle>
            <AccordionBody
                ref={bodyRef}
                style={{ maxHeight: isActive ? getActiveHeight() : 0 }}
            >
                <div dangerouslySetInnerHTML={createMarkup(body)} />
            </AccordionBody>
        </div>
    );
};

export const Accordion = styled(BaseAccordion)`
    padding: 0 24px 16px;

    ${AccordionTitle} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 24px;
        padding-top: 16px;
        min-height: 56px;
        cursor: pointer;
        border-top: 1px solid ${colors.grey};
        color: ${colors.blue};
        font-size: 1.2rem;
    }

    ${AccordionBody} {
        overflow: hidden;
        transition: max-height 0.25s ease-in-out;
        padding-right: 24px;
    }

    ${Icon} {
        margin-left: 16px;
    }
`;
