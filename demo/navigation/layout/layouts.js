import LayoutNavigation from './layout-navigation';

import CLPDashboard from 'demo/pages/layouts/clp-dashboard.vue';

const LayoutPages = [
    {
        path: '/pages',
        name: 'Pages',
        // You could also have named views at the top
        components: {
            default: {
                template: '<router-view></router-view>'
            },
            'sidebar-nav': LayoutNavigation
        },
        children: [
            {
                path: '',
                excludeFromNav: true,
                redirect: 'clp-dashboard'
            },
            {
                path: 'clp-dashboard',
                name: 'CLP Dashboard',
                component: CLPDashboard
            }
        ]
    }
];

export default LayoutPages;
