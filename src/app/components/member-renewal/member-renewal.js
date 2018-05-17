import angular from 'angular';

import controller from './member-renewal.controller.js';

// var memberRenewal = angular.module('app', []);

// memberRenewal.controller('MemberRenewalController', function($scope) {
//     $scope.test = '83.26%';
// });

let memberRenewalModule = angular.module('member-renewal', [])

    .directive('member-renewal', () => {
        'ngInject';

        return {
            retrict: 'EA',
            controller: controller,
            controllerAs: 'member-renewal',
            scope: {},
            bindToController: {
                test: '='
            }
        };
    })

    .name;

export default memberRenewalModule;
