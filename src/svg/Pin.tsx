import styled from 'styled-components';

interface IProps {
    className?: string;
}

const BasePin = ({ className }: IProps) => (
    <svg
        className={className}
        fill="#ffffff"
        height="19"
        viewBox="0 0 13 19"
        width="13"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5.21426 0.192501C2.70411 0.948818 0.974018 3.38858 0.834972 6.35064C0.788568 7.37703 0.927614 8.40322 1.23664 9.29467C1.42958 9.83482 6.49628 19 6.60439 19C6.7125 19 11.779 9.83482 11.9721 9.29467C13.1153 6.00845 11.8562 2.19119 9.11437 0.669636C7.91735 0.00347137 6.43457 -0.18556 5.21426 0.192501ZM7.53114 4.64006C8.24168 5.06329 8.60476 5.78355 8.61241 6.76476C8.62023 9.20452 5.78558 10.0149 4.81242 7.84505C4.53433 7.23278 4.51903 6.38651 4.75837 5.76532C5.23738 4.52295 6.47316 4.01887 7.53114 4.64006Z" />
    </svg>
);

export const Pin = styled(BasePin)``;
