import { IImage } from './images';

export interface IRooms {
    id: number;
    title: string;
    description: string;
    images: IImage[];
}
