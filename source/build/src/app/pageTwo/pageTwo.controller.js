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

        console.log('pageTwo CTRL');
        vm.reduce = CommonService.reduce;
    }
})();