import LayoutNavigation from './layout-navigation';

import Header from 'demo/pages/layouts/header.vue';
import Footer from 'demo/pages/layouts/footer.vue';
import Article from 'demo/pages/layouts/article.vue';
import LatestNews from 'demo/pages/layouts/latest-news.vue';
import NewsListing from 'demo/pages/layouts/news-listing.vue';
import Recipe from 'demo/pages/layouts/recipe.vue';
import Search from 'demo/pages/layouts/search.vue';
import RecipeBox from 'demo/pages/layouts/recipe-box.vue';
import SurvivorStory from 'demo/pages/layouts/survivor-story.vue';

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
                redirect: 'header'
            },
            {
                path: 'header',
                name: 'Header',
                component: Header
            },
            {
                path: 'footer',
                name: 'Footer',
                component: Footer
            },
            {
                path: 'article',
                name: 'Article',
                component: Article
            },
            {
                path: 'latest-news',
                name: 'Latest News',
                component: LatestNews
            },
            {
                path: 'news-listing',
                name: 'News Listing',
                component: NewsListing
            },
            {
                path: 'recipe',
                name: 'Recipe',
                component: Recipe
            },
            {
                path: 'search',
                name: 'Search',
                component: Search
            },
            {
                path: 'recipe-box',
                name: 'Recipe Box',
                component: RecipeBox
            },
            {
                path: 'survivor-story',
                name: 'Survivor Story',
                component: SurvivorStory
            }
        ]
    }
];

export default LayoutPages;
