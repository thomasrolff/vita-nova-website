import { IImages } from './images';

export interface IRooms {
    id: number;
    title: string;
    description: string;
    images: IImages[];
}
