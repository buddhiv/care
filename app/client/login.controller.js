/**
 * Created by Buddhi on 11/26/2016.
 */

(function () {
    'use strict';

    angular
        .module('care.controllers', [])
        .controller('LoginController', LoginController);

    LoginController.$inject = [];

    function LoginController() {
        var vm = this;

        vm.singleModel = 1;

        vm.name = 'Buddhi Vikasitha';

        console.log('Login Controller');
    }
})();
