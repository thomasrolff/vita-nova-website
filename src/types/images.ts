import { StaticImageData } from 'next/image';

export interface IImage {
    id: number;
    src: StaticImageData;
    srcFull: StaticImageData;
    alt: string;
}
