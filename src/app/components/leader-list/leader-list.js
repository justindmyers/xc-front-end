import angular from 'angular';

var leaderList = angular.module('leaderList', []);

leaderList.controller('LeaderListController', function($scope) {
    $scope.name = 'Mr. Michael Podemski';
});
