import angular from 'angular';

import controller from './leader-list.controller.js';

let memberRenewalModule = angular.module('leader-list', [])

    .directive('leaderList', () => {
        'ngInject';

        return {
            retrict: 'EA',
            controller: controller,
            controllerAs: '$ctrl',
            scope: {},
            bindToController: true,
            transclude: true,
            link: (scope, element, attrs, ctrlr, transclude) => {
                transclude(scope, (clone, scope) => {
                    element.append(clone);
                });
            }
        };
    })

    .name;

export default memberRenewalModule;
