/*
    Controller: aw.webapp.pageOne
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.pageOne')
        .controller('PageOneController', PageOneController);

    function PageOneController( CommonService ) {
        'ngInject';
        var vm = this;

        vm.add = CommonService.add;
    }
})();