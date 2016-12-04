/**
 * Created by Buddhi on 12/4/2016.
 */

(function () {
    'use strict';

    angular
        .module('care.controllers', [])
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        vm.name = 'Buddhi Vikasitha';

        console.log('Home Controller');
    }
})();




