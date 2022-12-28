import { IRoutes } from '../types';

export const routes: IRoutes[] = [
    {
        id: 0,
        title: 'common:menu.rooms',
        inNavbar: true,
        href: '/rooms',
    },
    {
        id: 1,
        title: 'common:menu.ship',
        inNavbar: true,
        href: '/ship',
    },
    {
        id: 2,
        title: 'common:menu.hold',
        inNavbar: true,
        href: '/hold',
    },
    {
        id: 3,
        title: 'common:menu.groups',
        inNavbar: true,
        href: '/groups',
    },
    {
        id: 4,
        title: 'common:menu.tour',
        inNavbar: false,
        href: 'https://my.mpskin.com/nl/tour/vitanova',
    },
    {
        id: 5,
        title: 'common:menu.faq',
        inNavbar: true,
        href: '/faq',
    },
];
