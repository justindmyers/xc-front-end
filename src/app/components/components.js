import angular from 'angular';

import memberRenewal from './member-renewal/member-renewal.js';

let ComponentsModule = angular.module('components', [
    memberRenewal
])

    .run(function() {
        console.log('watup');
    })

    .name;

export default ComponentsModule;
