import angular from 'angular';

export default function memberRenewalInit(vendor = angular) {
    var memberRenewal = vendor.module('memberRenewal', []);

    memberRenewal.controller('MemberRenewalController', function($scope) {
        $scope.test = 'This actually works! :-)';
    });

    console.log('why tho');
}
