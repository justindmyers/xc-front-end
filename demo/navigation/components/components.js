import ComponentNavigation from './component-navigation';

import ButtonLinkBar from 'demo/pages/components/button-link-bar.vue';
import LeaderList from 'demo/pages/components/leader-list.vue';
import LeaderSnapshot from 'demo/pages/components/leader-snapshot-item.vue';

const ComponentPages = [
    {
        path: '/components',
        name: 'CLP',
        components: {
            default: {
                template: '<router-view></router-view>'
            },
            'sidebar-nav': ComponentNavigation
        },
        children: [
            {
                path: '',
                redirect: 'leader-list',
                excludeFromNav: true
            },
            {
                path: 'button-link-bar',
                name: 'Button Link Bar',
                component: ButtonLinkBar
            },
            {
                path: 'leader-list',
                name: 'Leader List',
                component: LeaderList
            },
            {
                path: 'leader-snapshot-item',
                name: 'Leader Snapshot Item',
                component: LeaderSnapshot
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
