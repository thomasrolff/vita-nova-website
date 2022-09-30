import styled from 'styled-components';

interface IProps {
    className?: string;
}

const BaseArrow = ({ className }: IProps) => (
    <svg
        className={className}
        fill="#3C3A3A"
        viewBox="0 0 10 18"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5.72727 0.818183L5.72727 15.2066L8.42149 12.5124C8.74096 12.1928 9.25904 12.1928 9.57856 12.5124C9.73827 12.6721 9.81818 12.8815 9.81818 13.0909C9.81818 13.3003 9.73827 13.5097 9.57851 13.6694L5.4876 17.7604C5.16812 18.0799 4.65005 18.0799 4.33052 17.7604L0.239605 13.6694C-0.0798683 13.35 -0.0798683 12.8319 0.239605 12.5124C0.559078 12.1928 1.07715 12.1928 1.39668 12.5124L4.0909 15.2066L4.0909 0.818183C4.0909 0.366328 4.45723 -1.97512e-08 4.90909 0C5.36094 1.97512e-08 5.72727 0.366328 5.72727 0.818183Z" />
    </svg>
);

export const Arrow = styled(BaseArrow)``;
