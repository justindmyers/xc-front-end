import 'core-js/shim';

// Frameworks/Libraries that already exist on live site
import 'jquery';
import angular from 'angular';

import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';

import toggleCollapse from 'src/app/non-angular/toggle-collapse.js';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import './app/sass/styles.scss';

import App from './app.vue';

// Demo-only components
import Component from './app/components/component.vue';
import SidebarNavigation from './app/navigation/sidebar-navigation';

import './components/index.js';

import routes from './navigation/index.js';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueScrollTo);

Vue.component('aha-component', Component);
Vue.component('sidebar-navigation', SidebarNavigation);

const router = new VueRouter({
    routes
});

let appInitialized = false;

router.afterEach((to, from) => {
    if(appInitialized) {
        setTimeout(() => {
            const body = angular.element(document);
            const $rootScope = body.scope().$root;

            angular.element(document).injector().invoke(($compile) => {
                const $rootEl = $('#ngApp');

                if($rootEl.length) {
                    var html = $compile(angular.copy($rootEl[0]))($rootScope);

                    $rootScope.$digest();
                    $rootEl.replaceWith(html[0]);
                }
            });

            toggleCollapse();
        }, 100);
    } else {
        appInitialized = true;
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});

// Import production application components
require('@/index.js');
