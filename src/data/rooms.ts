import {
    BedIcon,
    ChairIcon,
    ShowerIcon,
    StarIcon,
    WifiIcon,
    WindowIcon,
} from '../svg';
import { IRooms } from '../types';
import * as images from '../images/rooms';

export const rooms: IRooms[] = [
    {
        id: 0,
        title: 'rooms:shipsCabin.title',
        description: 'rooms:shipsCabin.description',
        features: [
            {
                id: 0,
                title: 'rooms:shipsCabin.features.doubleBed',
                svg: BedIcon,
            },
            {
                id: 1,
                title: 'rooms:shipsCabin.features.bathroom',
                svg: ShowerIcon,
            },
            {
                id: 2,
                title: 'rooms:shipsCabin.features.skyLight',
                svg: WindowIcon,
            },
            {
                id: 3,
                title: 'rooms:shipsCabin.features.wifi',
                svg: WifiIcon,
            },
            // todo: add availability feature
        ],
        images: [
            {
                id: 0,
                src: images.hut1Square,
                srcFull: images.hut1,
                alt: 'Kamer',
            },
            {
                id: 1,
                src: images.hut2Square,
                srcFull: images.hut2,
                alt: 'Kamer',
            },
            {
                id: 2,
                src: images.hut3Square,
                srcFull: images.hut3,
                alt: 'Kamer',
            },
            {
                id: 3,
                src: images.hut4Square,
                srcFull: images.hut4,
                alt: 'Kamer',
            },
            {
                id: 4,
                src: images.hut5Square,
                srcFull: images.hut5,
                alt: 'Kamer',
            },
            {
                id: 5,
                src: images.hut6Square,
                srcFull: images.hut6,
                alt: 'Kamer',
            },
            {
                id: 6,
                src: images.hut7Square,
                srcFull: images.hut7,
                alt: 'Kamer',
            },
        ],
    },
    {
        id: 1,
        title: 'rooms:sailorsCabin.title',
        description: 'rooms:sailorsCabin.description',
        extraInfo: 'rooms:sailorsCabin.extraInfo',
        features: [
            {
                id: 0,
                title: 'rooms:sailorsCabin.features.unique',
                svg: StarIcon,
            },
            {
                id: 1,
                title: 'rooms:sailorsCabin.features.beds',
                svg: BedIcon,
            },
            {
                id: 2,
                title: 'rooms:sailorsCabin.features.bathroom',
                svg: ShowerIcon,
            },
        ],
        images: [
            {
                id: 0,
                src: images.forecastle2Square,
                srcFull: images.forecastle2,
                alt: 'Kamer',
            },
            {
                id: 1,
                src: images.forecastle1Square,
                srcFull: images.forecastle1,
                alt: 'Kamer',
            },
            {
                id: 2,
                src: images.forecastle7Square,
                srcFull: images.forecastle7,
                alt: 'Kamer',
            },
            {
                id: 3,
                src: images.forecastle3Square,
                srcFull: images.forecastle3,
                alt: 'Kamer',
            },
            {
                id: 4,
                src: images.forecastle4Square,
                srcFull: images.forecastle4,
                alt: 'Kamer',
            },
            {
                id: 5,
                src: images.forecastle5Square,
                srcFull: images.forecastle5,
                alt: 'Kamer',
            },
            {
                id: 6,
                src: images.forecastle6Square,
                srcFull: images.forecastle6,
                alt: 'Kamer',
            },

            {
                id: 7,
                src: images.forecastle8Square,
                srcFull: images.forecastle8,
                alt: 'Kamer',
            },
        ],
    },
    {
        id: 2,
        title: 'rooms:skippersHouse.title',
        description: 'rooms:skippersHouse.description',
        features: [
            {
                id: 0,
                title: 'rooms:skippersHouse.features.authentic',
                svg: StarIcon,
            },
            {
                id: 1,
                title: 'rooms:skippersHouse.features.beds',
                svg: BedIcon,
            },
            {
                id: 2,
                title: 'rooms:skippersHouse.features.comfort',
                svg: ChairIcon,
            },
            {
                id: 3,
                title: 'rooms:skippersHouse.features.bathroom',
                svg: ShowerIcon,
            },
            {
                id: 3,
                title: 'rooms:shipsCabin.features.wifi',
                svg: WifiIcon,
            },
        ],
        images: [
            {
                id: 0,
                src: images.deckhouse1Square,
                srcFull: images.deckhouse1,
                alt: 'Kamer',
            },
            {
                id: 1,
                src: images.deckhouse2Square,
                srcFull: images.deckhouse2,
                alt: 'Kamer',
            },
            {
                id: 2,
                src: images.deckhouse3Square,
                srcFull: images.deckhouse3,
                alt: 'Kamer',
            },
            {
                id: 3,
                src: images.deckhouse4Square,
                srcFull: images.deckhouse4,
                alt: 'Kamer',
            },
            {
                id: 4,
                src: images.deckhouse5Square,
                srcFull: images.deckhouse5,
                alt: 'Kamer',
            },
            {
                id: 5,
                src: images.deckhouse8Square,
                srcFull: images.deckhouse8,
                alt: 'Kamer',
            },
            {
                id: 6,
                src: images.deckhouse9Square,
                srcFull: images.deckhouse9,
                alt: 'Kamer',
            },
            {
                id: 7,
                src: images.deckhouse6Square,
                srcFull: images.deckhouse6,
                alt: 'Kamer',
            },
            {
                id: 8,
                src: images.deckhouse10Square,
                srcFull: images.deckhouse10,
                alt: 'Kamer',
            },
        ],
    },
];
