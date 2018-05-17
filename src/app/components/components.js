import angular from 'angular';

import memberRenewal from './member-renewal/member-renewal.js';
import leaderList from './leader-list/leader-list.js';

let ComponentsModule = angular.module('components', [
    memberRenewal,
    leaderList
])
    .name;

export default ComponentsModule;
