'use strict';

var itsMyApp = angular.module('ItsMyApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/signin', {
                templateUrl: 'views/signin.html',
                controller: signInController
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: signInController
            })
            .otherwise({ redirectTo: '/signin' });

    }
]);

var signInController = function ($scope, $rootScope, $location) {
    $scope.btnSignUpClick = function() {
        $location.path("/signup");
        $location.replace();
    }
};

var signUpController = function($scope, $rootScope) {
    $scope.hello = 'Hello';
};
