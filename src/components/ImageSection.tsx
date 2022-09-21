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
}

const BaseImageSection = ({
    className,
    children,
    imageAlt,
    imageSrc,
}: IProps) => (
    <section className={className}>
        <ImageContainer>
            <Image alt={imageAlt} objectFit="cover" src={imageSrc} />
        </ImageContainer>
        <TextContainer>{children}</TextContainer>
    </section>
);

const ImageSection = styled(BaseImageSection)`
    display: flex;
    flex-direction: column;

    @media (${breakpoints.mediumMin}) {
        flex-direction: row;
    }

    ${ImageContainer}, ${TextContainer} {
        flex: 1;
    }

    ${ImageContainer} {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 400px;
        overflow: hidden;
        flex: 1;

        @media (${breakpoints.mediumMin}) {
            max-height: 540px;
        }
    }

    ${TextContainer} {
        padding: 24px;

        @media (${breakpoints.mediumMin}) {
            padding: 60px;
        }
    }
`;

export default ImageSection;
