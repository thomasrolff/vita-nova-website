import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import { breakpoints } from '../constants';

const ImageContainer = styled.div``;
const TextContainer = styled.div``;

interface IProps {
    className?: string;
    children: React.ReactNode;
    imageSrc: StaticImageData;
    imageAlt: string;
    imageLeft?: boolean;
    sectionRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const BaseSplitImageSection = ({
    className,
    children,
    imageAlt,
    imageSrc,
    sectionRef,
}: IProps) => (
    <section className={className} ref={sectionRef}>
        <TextContainer>{children}</TextContainer>
        <ImageContainer>
            <Image alt={imageAlt} objectFit="cover" src={imageSrc} />
        </ImageContainer>
    </section>
);

export const SplitImageSection = styled(BaseSplitImageSection)`
    display: flex;
    flex-direction: column;

    @media (${breakpoints.mediumMin}) {
        flex-direction: ${({ imageLeft }) =>
            imageLeft ? 'row-reverse' : 'row'};
    }

    ${ImageContainer}, ${TextContainer} {
        @media (${breakpoints.mediumMin}) {
            width: 50%;
        }
    }

    ${ImageContainer} {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 400px;
        overflow: hidden;

        @media (${breakpoints.mediumMin}) {
            max-height: initial;
        }
    }

    ${TextContainer} {
        padding: 48px 24px 72px;

        @media (${breakpoints.mediumMin}) {
            padding: 48px;
        }
    }
`;
