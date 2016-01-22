/*
    Controller: aw.webapp.directive
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.directive')
        .controller('DirectiveController', DirectiveController);

    function DirectiveController( CommonService ) {
        'ngInject';
        
        var vm = this;

        vm.service = CommonService;
    }
})();