import { IFeature } from './features';
import { IImage } from './images';

export interface IRooms {
    id: number;
    title: string;
    description: string;
    extraInfo?: string;
    images: IImage[];
    features: IFeature[];
}
