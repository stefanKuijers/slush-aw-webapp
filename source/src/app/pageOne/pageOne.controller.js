/*
    Controller: aw.webapp.pageOne
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.pageOne')
        .controller('PageOneController', PageOneController);

    /** @ngInject */
    function PageOneController( CommonService ) {
        var vm = this;

        vm.add = CommonService.add;
    }
})();