/*
    Controller: aw.webapp.pageTwo
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.pageTwo')
        .controller('PageTwoController', PageTwoController);

    /**
     * CommonService is one of our dependencies
     */
    /** @ngInject */
    function PageTwoController( CommonService ) {
        var vm = this;
        
         /**
         * Exposing the *reduce* function to the vm
         */
        vm.reduce = CommonService.reduce;

         /**
         * Calling our own property indirectly
         */
        vm.foo = function() {
            vm.reduce();
        };
        
         /**
         * Create an array of all the right files in the source dir
         * @return     {Interture} 
         */
        vm.return2 = function() {
            return 2;
        };
    }
})();

