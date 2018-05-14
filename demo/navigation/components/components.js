import ComponentNavigation from './component-navigation';

import ButtonLinkBar from 'demo/pages/components/button-link-bar.vue';
import DocumentRepository from 'demo/pages/components/document-repository.vue';
import ChapterStats from 'demo/pages/components/chapter-stats.vue';
import MemberBreakdown from 'demo/pages/components/member-breakdown.vue';
import MembeRenewal from 'demo/pages/components/member-renewal.vue';
import LeaderList from 'demo/pages/components/leader-list.vue';
import LeaderSnapshot from 'demo/pages/components/leader-snapshot-item.vue';
import Updates from 'demo/pages/components/updates.vue';

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
                redirect: 'button-link-bar',
                excludeFromNav: true
            },
            {
                path: 'button-link-bar',
                name: 'Button Link Bar',
                component: ButtonLinkBar
            },
            {
                path: 'updates',
                name: 'Updates',
                component: Updates
            },
            {
                path: 'document-repository',
                name: 'Document Repository',
                component: DocumentRepository
            },
            {
                path: 'chapter-stats',
                name: 'Chapter Stats',
                component: ChapterStats
            },
            {
                path: 'member-breakdown',
                name: 'Member Breakdown',
                component: MemberBreakdown
            },
            {
                path: 'member-renewal',
                name: 'Member Renewal',
                component: MembeRenewal
            },
            {
                path: 'leader-snapshot-item',
                name: 'Leader Snapshot Item',
                component: LeaderSnapshot
            },
            {
                path: 'leader-list',
                name: 'Leader List',
                component: LeaderList
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
