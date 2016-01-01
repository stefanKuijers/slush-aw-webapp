/*
    Controller: aw.webapp.directive
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.directive')
        .controller('DirectiveController', DirectiveController);

    /** @ngInject */
    function DirectiveController( CommonService ) {
        var vm = this;

        vm.service = CommonService;
    }
})();