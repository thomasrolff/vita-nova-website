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
        description: `Op zoek naar een bijzondere beleving? Boek dan een overnachting in het originele vooronder. Het vooronder is voorzien van een eigen douche en toilet en heeft een eigen ingang op het voordek. Er zijn twee eenpersoonsbedstedes en er is een derde eenpersoons slaapplek in de onderkooi. Het vooronder is geschikt voor 2 tot 3 volwassen of een gezin met twee kleine kinderen. Houdt rekening met scheepscomfort.`,
        extraInfo: `Let op: het vooronder is een kleine ruimte. Een steile trap biedt toegang tot de ruimte. Er zitten geen ramen aan de zijkant en het heeft een verlaagd plafond, dus het is niet geschikt voor personen met claustrofobie. Vooral met drie volwassenen kan de ruimte als klein worden ervaren. Als je voor langere tijd een verblijf zoekt dan adviseer ik je om een 'scheepshut' of 'de roef' te boeken.`,
        features: [
            {
                id: 0,
                title: 'Uniek en avontuurlijk',
                svg: StarIcon,
            },
            {
                id: 1,
                title: '3 x eenpersoonsbed',
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
    {
        id: 2,
        title: 'De roef',
        description:
            'Wil jij ervaren hoe het is om te leven aan boord van een voormalig binnenvaartschip? Boek dan jouw verblijf in de roef. De roef is de voormalige schipperswoning. De ruimte is voorzien van een eigen zithoek met heerlijke pelletkachel, badkamer en tweepersoonsbedstede (160 x 200 cm). Er is ruimte om een babybedje in een apart kamertje te plaatsen. Daarnaast heb je vanuit de stuurhut een prachtig uitzicht op de haven en de Koppelpoort van Amersfoort. De roef is ingericht met een koelkast, servies en koffie- en theefaciliteiten. Overnachten in de roef is een unieke ervaring!',
        features: [
            {
                id: 0,
                title: 'Authentiek',
                svg: StarIcon,
            },
            {
                id: 1,
                title: 'Tweepersoonsbedstede (160 x 200 cm)',
                svg: BedIcon,
            },
            {
                id: 2,
                title: 'Eigen zithoek met pelletkachel',
                svg: ChairIcon,
            },
            {
                id: 3,
                title: 'Eigen sanitair',
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
