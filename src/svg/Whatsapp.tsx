import styled from 'styled-components';
import { colors } from '../constants';

interface IProps {
    className?: string;
}

const BaseWhatsapp = ({ className }: IProps) => (
    <svg
        className={className}
        fill={colors.blue}
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.2497 12.5874C16.2069 12.5669 14.606 11.7805 14.3215 11.6784C14.2053 11.6368 14.0809 11.5961 13.9486 11.5961C13.7324 11.5961 13.5508 11.7036 13.4093 11.9147C13.2494 12.1518 12.7653 12.7163 12.6157 12.885C12.5961 12.9072 12.5695 12.9338 12.5535 12.9338C12.5392 12.9338 12.2914 12.832 12.2164 12.7995C10.499 12.0554 9.19541 10.2659 9.01666 9.9641C8.99113 9.92072 8.99006 9.90102 8.98985 9.90102C8.99612 9.87804 9.05388 9.82029 9.08368 9.79049C9.17088 9.70443 9.26535 9.59099 9.35676 9.48125C9.40004 9.42926 9.44339 9.3772 9.48595 9.32813C9.61857 9.17422 9.67761 9.05473 9.74606 8.91633L9.78192 8.84442C9.94905 8.51321 9.80631 8.23369 9.76017 8.14344C9.72231 8.06791 9.04632 6.44049 8.97445 6.26951C8.80162 5.85693 8.57324 5.66483 8.25588 5.66483C8.22644 5.66483 8.25588 5.66483 8.13239 5.67002C7.98202 5.67635 7.16314 5.78388 6.80107 6.01155C6.41712 6.25301 5.76758 7.02269 5.76758 8.3763C5.76758 9.59455 6.54261 10.7448 6.87537 11.1823C6.88364 11.1933 6.89883 11.2157 6.92086 11.2479C8.19521 13.1043 9.78385 14.4801 11.3943 15.1218C12.9447 15.7396 13.6789 15.811 14.0963 15.811C14.0964 15.811 14.0964 15.811 14.0964 15.811C14.2718 15.811 14.4122 15.7973 14.536 15.7851L14.6146 15.7776C15.1502 15.7303 16.3272 15.1219 16.5949 14.3797C16.8058 13.7952 16.8615 13.1565 16.7211 12.9247C16.625 12.7671 16.4594 12.6878 16.2497 12.5874Z" />
        <path d="M11.1754 0C5.22782 0 0.389099 4.79038 0.389099 10.6785C0.389099 12.583 0.900036 14.4472 1.86794 16.0787L0.0153432 21.5299C-0.0191661 21.6315 0.006502 21.7439 0.0818663 21.8204C0.136268 21.8758 0.210064 21.9057 0.285428 21.9057C0.314305 21.9057 0.343395 21.9014 0.371773 21.8923L6.07009 20.0861C7.62942 20.9172 9.39182 21.3559 11.1755 21.3559C17.1225 21.3559 21.9607 16.566 21.9607 10.6785C21.9607 4.79038 17.1225 0 11.1754 0ZM11.1754 19.1315C9.49706 19.1315 7.87148 18.6481 6.47414 17.7334C6.42716 17.7027 6.37261 17.6869 6.31771 17.6869C6.28869 17.6869 6.2596 17.6913 6.23129 17.7002L3.37679 18.6053L4.29827 15.8935C4.32808 15.8057 4.31318 15.7089 4.25828 15.6341C3.19419 14.1838 2.6317 12.4702 2.6317 10.6785C2.6317 6.01696 6.46438 2.22442 11.1753 2.22442C15.8857 2.22442 19.7179 6.01696 19.7179 10.6785C19.718 15.3395 15.8858 19.1315 11.1754 19.1315Z" />
    </svg>
);

export const Whatsapp = styled(BaseWhatsapp)``;