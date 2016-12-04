/**
 * Created by Buddhi on 11/26/2016.
 */

(function () {
    'use strict';

    angular
        .module('care.controllers', [])
        .controller('MapController', MapController);

    MapController.$inject = [];

    function MapController() {
        var vm = this;

        vm.name = 'Map';

        console.log('Map Controller');

        // NgMap.getMap().then(function (map) {
        //     vm.map = map;
        //
        //     console.log(map);
        // });

    }

})();
