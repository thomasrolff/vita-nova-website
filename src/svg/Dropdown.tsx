import styled from 'styled-components';
import { colors } from '../constants';

interface IProps {
    className?: string;
}

const BaseDropdown = ({ className }: IProps) => (
    <svg
        className={className}
        fill={colors.blue}
        height="8"
        viewBox="0 0 30 17"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M14.729 16.6108C14.3032 16.6108 13.8791 16.4492 13.5541 16.1252L0.875885 3.44699C0.226918 2.79725 0.226918 1.74612 0.875885 1.09808C1.52485 0.448344 2.57598 0.448344 3.22479 1.09808L14.729 12.6014L26.2333 1.09808C26.8822 0.448344 27.9334 0.448344 28.5822 1.09808C29.2311 1.74705 29.2311 2.79725 28.5822 3.44699L15.9032 16.1252C15.5792 16.4492 15.1541 16.6108 14.729 16.6108Z" />
    </svg>
);

export const Dropdown = styled(BaseDropdown)``;
