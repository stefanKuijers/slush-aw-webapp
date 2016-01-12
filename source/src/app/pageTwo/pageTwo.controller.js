/*
    Controller: aw.webapp.pageTwo
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.pageTwo')
        .controller('PageTwoController', PageTwoController);

    /** @ngInject */
    function PageTwoController( CommonService ) {
        var vm = this;
        
        vm.reduce = CommonService.reduce;

        vm.foo = function() {
            vm.reduce();
        };
        
        vm.return2 = function() {
            return 2;
        };
    }
})();