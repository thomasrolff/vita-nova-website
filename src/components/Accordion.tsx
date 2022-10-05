import { useState } from 'react';
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

    console.log(isActive);

    return (
        <div className={className}>
            <AccordionTitle onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>+</div>
            </AccordionTitle>
            <AccordionBody className={isActive ? 'active' : 'inactive'}>
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
        border-top: 1px solid ${colors.greyLight};
        border-bottom: 1px solid ${colors.greyLight};
    }

    ${AccordionBody} {
        overflow: hidden;
        background: lightgray;
        transition: all 0.8s linear;
        padding-right: 24px;
    }

    .inactive {
        max-height: 0px;
    }

    .active {
        max-height: 300px;
    }
`;
