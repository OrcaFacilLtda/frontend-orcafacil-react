// sidebarLinks.js
import {
    faToolbox,
    faGears,
    faChartLine,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
const sidebarLinks = [
    {
        key: 'services',
        labelProvider: 'Services',
        labelClient: 'Services',
        toProvider: '/provider/services',
        toClient: '/client/services',
        icon: faToolbox,
        showFor: ['provider', 'client'],
    },
    {
        key: 'manage-services',
        labelProvider: 'Manage Services',
        labelClient: 'Manage Services',
        toProvider: '/provider/manage-services',
        toClient: '/client/manage-services',
        icon: faGears,
        showFor: ['provider', 'client'],
    },
    {
        key: 'performance',
        labelProvider: 'Performance',
        labelClient: null,
        toProvider: '/provider/performance',
        toClient: null,
        icon: faChartLine,
        showFor: ['provider'], // só provider
    },
    {
        key: 'profile',
        labelProvider: 'Profile',
        labelClient: 'Profile',
        toProvider: '/provider/profile',
        toClient: '/client/profile',
        icon: faUser,
        showFor: ['provider', 'client'],
    },
];
export default sidebarLinks;