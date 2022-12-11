import styled from 'styled-components';

interface IProps {
    className?: string;
}

const BaseBookingArrow = ({ className }: IProps) => (
    <svg
        className={className}
        fill="#FFFFFF"
        viewBox="0 0 30 21"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1.36364 8.75001H25.3443L20.8539 2.98737C20.3214 2.30406 20.3214 1.19596 20.8539 0.512522C21.1202 0.170922 21.4692 4.25382e-06 21.8182 4.25382e-06C22.1672 4.25382e-06 22.5162 0.170921 22.7824 0.512638L29.6006 9.26265C30.1331 9.94597 30.1331 11.0541 29.6006 11.7375L22.7824 20.4875C22.2499 21.1708 21.3865 21.1708 20.8539 20.4875C20.3214 19.8042 20.3214 18.6961 20.8539 18.0127L25.3443 12.25H1.36364C0.610546 12.25 0 11.4665 0 10.5C0 9.53355 0.610546 8.75001 1.36364 8.75001Z" />
    </svg>
);

export const BookingArrow = styled(BaseBookingArrow)``;
