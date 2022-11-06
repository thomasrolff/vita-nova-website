import styled from 'styled-components';

interface IProps {
    className?: string;
}

const BaseEmail = ({ className }: IProps) => (
    <svg
        className={className}
        fill="#ffffff"
        height="11"
        viewBox="0 0 15 11"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.3302 0H1.71568C0.769695 0 0 0.887902 0 1.97916V9.02083C0 10.1121 0.769695 11 1.71568 11H12.3302C13.2762 11 14.0459 10.1121 14.0459 9.02083V1.97938C14.0461 0.887902 13.2764 0 12.3302 0ZM11.4919 1.29118L7.02295 4.61253L2.55402 1.29118H11.4919ZM12.3302 9.70903H1.71568C1.38679 9.70903 1.11928 9.40023 1.11928 9.02105V2.01596L6.67765 6.13913C6.68511 6.14451 6.69313 6.14817 6.70078 6.15312C6.7088 6.15829 6.71701 6.16324 6.72522 6.16797C6.76831 6.19358 6.81271 6.21424 6.85804 6.2278C6.86271 6.2293 6.86737 6.22995 6.87203 6.23124C6.92184 6.2448 6.97221 6.25319 7.02258 6.25319C7.02276 6.25319 7.02295 6.25319 7.02295 6.25319C7.02332 6.25319 7.02351 6.25319 7.0237 6.25319C7.07407 6.25319 7.12443 6.24501 7.17424 6.23124C7.1789 6.22995 7.18357 6.2293 7.18823 6.2278C7.23356 6.21424 7.27777 6.19358 7.32105 6.16797C7.32926 6.16324 7.33747 6.15829 7.34549 6.15312C7.35314 6.14817 7.36116 6.14451 7.36862 6.13913L12.927 2.01596V9.02083C12.9268 9.40023 12.6591 9.70903 12.3302 9.70903Z"
            fill="white"
        />
    </svg>
);

export const Email = styled(BaseEmail)``;
