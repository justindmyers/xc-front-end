import ComponentNavigation from './component-navigation';

import Alert from 'demo/pages/components/alert.vue';
import Card from 'demo/pages/components/card.vue';

const ComponentPages = [
    {
        path: '/components',
        name: 'Components',
        components: {
            default: {
                template: '<router-view></router-view>'
            },
            'sidebar-nav': ComponentNavigation
        },
        children: [
            {
                path: '',
                redirect: 'alert',
                excludeFromNav: true
            },
            {
                path: 'alert',
                name: 'Alert',
                component: Alert
            },
            {
                path: 'card',
                name: 'Card',
                component: Card
            }
            /*
            {
                path: 'article',
                name: 'Article',
                components: {
                    default: {
                        template: '<router-view></router-view>'
                    },
                    'sidebar-nav': ComponentNavigation
                },
                children: [
                    {
                        path: 'article-large',
                        name: 'Main Nav',
                        component: MainNav
                    },
                    {
                        path: 'top-nav',
                        name: 'Top Nav',
                        component: TopNav
                    },
                    {
                        path: 'affiliate-nav',
                        name: 'Affiliate Nav',
                        component: AffiliateNav
                    }
                ]
            }
            */
        ]
    }
];

export default ComponentPages;
