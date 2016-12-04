(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('care', ['ngRoute', 'care.controllers', 'ui.bootstrap'])

        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/care/home', {
                    templateUrl: 'client/care-home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .when('/care/login', {
                    templateUrl: 'client/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .when('/care/map', {
                    templateUrl: 'client/map.html',
                    controller: 'MapController',
                    controllerAs: 'vm'
                })
                .when('/care/donor/home', {
                    templateUrl: 'client/donor-home.html',
                    controller: 'DonorController',
                    controllerAs: 'vm'
                });

            $routeProvider.otherwise({redirectTo: '/'});
        }]);
})();
