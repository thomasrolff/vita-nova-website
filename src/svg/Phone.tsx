import styled from 'styled-components';

interface IProps {
    className?: string;
}

const BasePhone = ({ className }: IProps) => (
    <svg
        className={className}
        fill="#ffffff"
        height="16"
        viewBox="0 0 15 16"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M4.03818 7.79269C4.43035 8.64133 4.88185 9.45685 5.46894 10.2002C6.05732 10.9485 6.78858 11.6287 7.7366 12.2093C7.80686 12.2505 7.87374 12.2505 7.93308 12.2224C8.02312 12.1809 8.11498 12.0918 8.20554 11.9828C8.2758 11.8987 8.36272 11.7644 8.45432 11.6172C8.81839 11.041 9.26989 10.327 9.90668 10.6842C9.92073 10.692 9.9314 10.7007 9.94545 10.7086L12.0705 12.1759C12.0762 12.1796 12.0843 12.189 12.0906 12.1924C12.3711 12.424 12.4861 12.7811 12.4892 13.1848C12.4892 13.5966 12.363 14.0591 12.178 14.4503C11.9334 14.9658 11.5724 15.3073 11.1566 15.5342C10.761 15.7529 10.3205 15.8701 9.89705 15.9451C9.23216 16.0628 8.60968 15.9879 7.97289 15.7526C7.3499 15.5207 6.723 15.1392 6.03754 14.6312L5.9868 14.5921C5.6727 14.3571 5.3331 14.1044 5.00026 13.8069C3.77951 12.7008 2.53716 11.1048 1.7281 9.3478C1.04941 7.873 0.678838 6.28102 0.881559 4.76309C0.993459 3.93102 1.29064 3.17456 1.80877 2.67525C2.26027 2.23843 2.86895 1.99909 3.65668 2.08282C3.74724 2.09001 3.82791 2.15375 3.86981 2.24655L5.23161 5.01181C5.4312 5.32208 5.45567 5.62892 5.34715 5.93606C5.25633 6.18884 5.07469 6.42038 4.82564 6.63785C4.75226 6.71284 4.66482 6.78908 4.57348 6.86907C4.26875 7.13466 3.9229 7.44087 4.0413 7.80175L4.03818 7.79269ZM6.57571 6.47256C6.36544 6.40756 6.23897 6.14916 6.29335 5.89669C6.34774 5.64423 6.56269 5.49237 6.77296 5.55768C7.41079 5.75734 8.01063 6.17197 8.49596 6.71596C8.98416 7.26339 9.36279 7.94736 9.55407 8.6807C9.6186 8.93036 9.50254 9.19595 9.29487 9.27344C9.08721 9.35124 8.86575 9.21188 8.80121 8.96254C8.65158 8.38855 8.35023 7.84737 7.9591 7.40868C7.56485 6.96655 7.08264 6.63128 6.57571 6.47256ZM6.62801 3.57481C6.41332 3.53107 6.26915 3.2861 6.30558 3.02832C6.34176 2.77086 6.54604 2.59744 6.76047 2.64119C7.963 2.89116 9.10464 3.62418 10.0199 4.6528C10.9356 5.68141 11.6286 7.00905 11.9334 8.44792C11.987 8.70164 11.8592 8.95973 11.6479 9.02409C11.4366 9.08846 11.2216 8.93504 11.168 8.68133C10.9 7.41649 10.2897 6.24759 9.48302 5.34146C8.67812 4.43689 7.67753 3.79322 6.62801 3.57481ZM6.88148 0.944225C6.66523 0.914542 6.50987 0.679573 6.53459 0.41992C6.55931 0.160267 6.75475 -0.0265837 6.971 0.00309982C8.6534 0.239631 10.2343 1.16607 11.4858 2.52808C12.7404 3.89321 13.6673 5.69985 14.0366 7.69052C14.0834 7.94486 13.9494 8.19733 13.7373 8.25357C13.5255 8.30981 13.3152 8.1489 13.2684 7.89424C12.9353 6.09917 12.096 4.46563 10.9583 3.22799C9.82549 1.99534 8.39759 1.15701 6.88148 0.944225Z" />
    </svg>
);

export const Phone = styled(BasePhone)``;
