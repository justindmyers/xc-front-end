import HomeNavigation from 'demo/navigation/home/home-navigation';
import Home from 'demo/pages/home.vue';

const HomePages = [
    {
        path: '/',
        components: {
            default: {
                template: '<router-view></router-view>'
            },
            'sidebar-nav': HomeNavigation
        },
        children: [
            {
                path: '',
                component: Home
            }
        ]
    }
];

export default HomePages;
