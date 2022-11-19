import { BedIcon, ShowerIcon, StarIcon, WifiIcon, WindowIcon } from '../svg';
import { IRooms } from '../types';
import * as images from '../images/rooms';

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
                id: 2,
                title: 'Elektrisch dakraam',
                svg: WindowIcon,
            },
            {
                id: 3,
                title: 'Gratis Wifi',
                svg: WifiIcon,
            },
        ],
        images: [
            {
                id: 0,
                src: images.hut1Square,
                srcFull: images.hut1,
                alt: 'Handdoeken image',
            },
            {
                id: 1,
                src: images.hut2Square,
                srcFull: images.hut2,
                alt: 'Handdoeken image',
            },
            {
                id: 2,
                src: images.hut3Square,
                srcFull: images.hut3,
                alt: 'Handdoeken image',
            },
            {
                id: 3,
                src: images.hut4Square,
                srcFull: images.hut4,
                alt: 'Handdoeken image',
            },
            {
                id: 4,
                src: images.hut5Square,
                srcFull: images.hut5,
                alt: 'Handdoeken image',
            },
            {
                id: 5,
                src: images.hut6Square,
                srcFull: images.hut6,
                alt: 'Handdoeken image',
            },
            {
                id: 6,
                src: images.hut7Square,
                srcFull: images.hut7,
                alt: 'Handdoeken image',
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
                id: 2,
                title: 'Douche en toilet (met scheepspomp!)',
                svg: ShowerIcon,
            },
        ],
        images: [
            {
                id: 0,
                src: images.forecastle2Square,
                srcFull: images.forecastle2,
                alt: 'Handdoeken image',
            },
            {
                id: 1,
                src: images.forecastle1Square,
                srcFull: images.forecastle1,
                alt: 'Handdoeken image',
            },
            {
                id: 2,
                src: images.forecastle7Square,
                srcFull: images.forecastle7,
                alt: 'Handdoeken image',
            },
            {
                id: 3,
                src: images.forecastle3Square,
                srcFull: images.forecastle3,
                alt: 'Handdoeken image',
            },
            {
                id: 4,
                src: images.forecastle4Square,
                srcFull: images.forecastle4,
                alt: 'Handdoeken image',
            },
            {
                id: 5,
                src: images.forecastle5Square,
                srcFull: images.forecastle5,
                alt: 'Handdoeken image',
            },
            {
                id: 6,
                src: images.forecastle6Square,
                srcFull: images.forecastle6,
                alt: 'Handdoeken image',
            },

            {
                id: 7,
                src: images.forecastle8Square,
                srcFull: images.forecastle8,
                alt: 'Handdoeken image',
            },
        ],
    },
];
