import angular from 'angular';

import controller from './member-renewal.controller.js';

let memberRenewalModule = angular.module('member-renewal', [])

    .directive('memberRenewal', () => {
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
