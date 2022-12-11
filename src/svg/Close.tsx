import styled from 'styled-components';

interface IProps {
    className?: string;
}

const BaseClose = ({ className }: IProps) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 22 23"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1.96582 2.56641L19.4016 20.7802Z" fill="white" />
        <path d="M1.96582 20.7802L19.4016 2.56641Z" fill="white" />
        <path
            d="M1.96582 2.56641L19.4016 20.7802M1.96582 20.7802L19.4016 2.56641"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="3.23162"
        />
    </svg>
);

export const Close = styled(BaseClose)``;
