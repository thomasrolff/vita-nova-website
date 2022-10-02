import { BedIcon, ShowerIcon, StarIcon, WifiIcon, WindowIcon } from '../svg';
import { IRooms } from '../types';
import {
    hut0,
    hut0Full,
    placeholder,
    placeholderFull,
    forecastle0,
    forecastle0Full,
} from './images';

export const rooms: IRooms[] = [
    {
        id: 0,
        title: 'De Scheepshut',
        description:
            'De scheepshutten zijn knus en van alle gemakken voorzien. De modern ingerichte kamers beschikken over een tweepersoonsbed met eigen douche en toilet. Er is gratis wifi. Daarnaast kan je gebruik maken van het ruim, waar je alle ruimte hebt om te relaxen en gezellig samen te zijn.',
        features: [
            {
                id: 0,
                title: 'Tweepersoons bed (140 x 200cm)',
                svg: BedIcon,
            },
            {
                id: 1,
                title: 'Douche en toilet',
                svg: ShowerIcon,
            },
            {
                id: 1,
                title: 'Elektrisch dakraam',
                svg: WindowIcon,
            },
            {
                id: 1,
                title: 'Gratis Wifi',
                svg: WifiIcon,
            },
        ],
        images: [
            {
                id: 0,
                src: hut0,
                srcFull: hut0Full,
                alt: 'Handdoeken image',
            },
            {
                id: 1,
                src: placeholder,
                srcFull: placeholderFull,
                alt: 'Placeholder image',
            },
        ],
    },
    {
        id: 1,
        title: 'Het Vooronder',
        description:
            'Op zoek naar een bijzondere beleving? Boek dan een overnachting in het originele vooronder. Het vooronder is voorzien van een eigen douche en toilet en heeft een eigen ingang op het voordek. Er zijn twee aparte bedden en er is een derde slaapplek in de onderkooi. Het vooronder is geschikt voor 2-3 volwassen of een gezin met twee kleine kinderen.',
        features: [
            {
                id: 0,
                title: 'Uniek',
                svg: StarIcon,
            },
            {
                id: 1,
                title: 'Tweepersoons bed',
                svg: BedIcon,
            },
            {
                id: 1,
                title: 'Douche en toilet (met scheepspomp!)',
                svg: ShowerIcon,
            },
        ],
        images: [
            {
                id: 0,
                src: forecastle0,
                srcFull: forecastle0Full,
                alt: 'Handdoeken image',
            },
            {
                id: 1,
                src: placeholder,
                srcFull: placeholderFull,
                alt: 'Placeholder image',
            },
        ],
    },
];
