import angular from 'angular';

export default function memberRenewalInit() {
    var memberRenewal = angular.module('memberRenewal', []);

    memberRenewal.controller('MemberRenewalController', function($scope) {
        $scope.test = '83.26%';
    });
}
