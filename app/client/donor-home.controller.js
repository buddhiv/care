/**
 * Created by Buddhi on 12/4/2016.
 */

(function () {
    'use strict';

    angular
        .module('care.controllers', [])
        .controller('DonorController', DonorController);

    DonorController.$inject = [];

    function DonorController() {
        var vm = this;

        vm.name = 'Buddhi Vikasitha';

        console.log('Donor Controller');
    }
})();



