import Vue from 'vue';

// Demo components
import Alert from './general/alert.vue';

// Article
import LargeArticle from './article/article-large.vue';
import MediumArticle from './article/article-medium.vue';
import SmallArticle from './article/article-small.vue';
import XSmallArticle from './article/article-x-small.vue';
import ListingArticle from './article/article-listing.vue';
import ArticleToc from './article/article-toc.vue';

// Card
import Card from './card/card-default.vue';

// Demo components
Vue.component('aha-alert', Alert);
Vue.component('aha-article-large', LargeArticle);
Vue.component('aha-article-medium', MediumArticle);
Vue.component('aha-article-small', SmallArticle);
Vue.component('aha-article-xsmall', XSmallArticle);
Vue.component('aha-article-listing', ListingArticle);
Vue.component('aha-article-toc', ArticleToc);
Vue.component('aha-card', Card);
