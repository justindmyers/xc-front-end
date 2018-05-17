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

router.afterEach((to, from) => {
    setTimeout(() => {
        var body = angular.element(document);
        var $rootScope = body.scope().$root;
        angular.element(document).injector().invoke(function($compile) {
            var $rootEl = $('#ngApp');
            var html = $compile(angular.copy($rootEl[0]))($rootScope);
            $rootScope.$digest();
            if($rootEl.length) {
                $rootEl[0].outerHTML = html[0].outerHTML;
            }
        });
        toggleCollapse();
    }, 500);
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});

// Import production application components
require('@/index.js');
