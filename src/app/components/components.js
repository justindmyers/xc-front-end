import angular from 'angular';

import memberRenewal from './member-renewal/member-renewal.js';

let ComponentsModule = angular.module('components', [
    memberRenewal
])

    .name;

export default ComponentsModule;
