import styled from 'styled-components';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { breakpoints, colors } from '../constants';
import { IImages } from '../types';

const ImageContainer = styled.div``;
const TextContainer = styled.div``;

interface IProps {
    className?: string;
    children: React.ReactNode;
    imageLeft?: boolean;
    images: IImages[];
}

const BaseSplitSwiperSection = ({ className, children, images }: IProps) => (
    <section className={className}>
        <TextContainer>{children}</TextContainer>
        <ImageContainer>
            <Swiper
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
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ImageContainer>
    </section>
);

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

    ${TextContainer} {
        padding: 48px 24px;

        @media (${breakpoints.mediumMin}) {
            padding: 60px;
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
