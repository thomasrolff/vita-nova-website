import { IRoutes } from '../types';

export const routes: IRoutes[] = [
    {
        id: 0,
        title: 'Kamers',
        inNavbar: true,
        href: '/rooms',
    },
    {
        id: 1,
        title: 'Het Schip',
        inNavbar: true,
        href: '/ship',
    },
    {
        id: 2,
        title: 'Scheepsruim',
        inNavbar: true,
        href: '/hold',
    },
    {
        id: 3,
        title: 'Groepen',
        inNavbar: true,
        href: '/groups',
    },
    {
        id: 4,
        title: 'Virtuele Tour',
        inNavbar: false,
        href: 'https://my.mpskin.com/nl/tour/vitanova',
    },
    {
        id: 5,
        title: 'Praktische info',
        inNavbar: false,
        href: '/info',
    },
    {
        id: 6,
        title: 'FAQs',
        inNavbar: true,
        href: '/faq',
    },
];
