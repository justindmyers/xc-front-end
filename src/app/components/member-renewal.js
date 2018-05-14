import angular from 'angular';

var memberRenewal = angular.module('memberRenewal', []);

memberRenewal.controller('MemberRenewalController', function($scope) {
    $scope.test = 'This actually works! :-)';
});
