import styled from 'styled-components';
import Image from 'next/image';

import { Lightbox } from 'yet-another-react-lightbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'yet-another-react-lightbox/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { breakpoints, colors } from '../constants';
import { IImage } from '../types';
import { useState } from 'react';
import { TextContainer } from '../components';

const ImageContainer = styled.div``;

interface IProps {
    className?: string;
    children: React.ReactNode;
    imageLeft?: boolean;
    images: IImage[];
}

const BaseSplitSwiperSection = ({ className, children, images }: IProps) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const fullSizeImages = images.map((image) => image.srcFull);

    const handleImageClick = (id: number) => {
        setImageIndex(id);
        setLightboxOpen(true);
    };

    return (
        <section className={className}>
            <TextContainer>{children}</TextContainer>
            <ImageContainer>
                <Swiper
                    loop={true}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    speed={400}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <Image
                                alt={image.alt}
                                objectFit="cover"
                                src={image.src}
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleImageClick(image.id)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ImageContainer>
            <Lightbox
                animation={{ fade: 300, swipe: 400 }}
                close={() => setLightboxOpen(false)}
                index={imageIndex}
                open={lightboxOpen}
                slides={fullSizeImages}
            />
        </section>
    );
};

// Todo: optimize lightbox image sizes
// https://yet-another-react-lightbox.com/examples/nextjs

export const SplitSwiperSection = styled(BaseSplitSwiperSection)`
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
        height: 100%;
        max-height: 400px;
        overflow: hidden;

        @media (${breakpoints.mediumMin}) {
            max-height: initial;
        }
    }

    // Swiper style overrides
    .swiper-slide {
        height: auto !important;

        span,
        img {
            height: 100% !important;
            width: 100% !important;
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: ${colors.offWhite};
        opacity: 0.8;
        padding: 0 24px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        padding: 56px;
    }

    // Todo: fix responsive pagination visibility
    .swiper-pagination-bullet {
        background: ${colors.offWhite};
        opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
    }
`;
