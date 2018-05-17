import angular from 'angular';

import Components from './components/components.js';

import toggleCollapse from './non-angular/toggle-collapse.js';
toggleCollapse();

angular.module('app', [
    Components
])

    .run(function() {
        console.log('watup');
    });

angular.bootstrap(document, ['app']);
