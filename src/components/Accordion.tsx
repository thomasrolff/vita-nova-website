import { useRef, useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../constants';

const AccordionTitle = styled.div``;
const AccordionBody = styled.div``;

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
                <div>+</div>
            </AccordionTitle>
            <AccordionBody
                ref={bodyRef}
                style={{ maxHeight: isActive ? getActiveHeight() : 0 }}
            >
                <p>{body}</p>
            </AccordionBody>
        </div>
    );
};

export const Accordion = styled(BaseAccordion)`
    max-width: 600px;
    margin: 0 auto;

    ${AccordionTitle} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 24px;
        height: 56px;
        cursor: pointer;
        border-top: 1px solid ${colors.grey};
    }

    ${AccordionBody} {
        overflow: hidden;
        background: lightgray;
        transition: max-height 0.3s ease-in-out;
        padding-right: 24px;
    }
`;
