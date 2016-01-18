/*
    Route: aw.webapp
*/

(function () {
    'use strict';

    angular
        .module('aw.webapp')
        .config(routerConfig);

    function routerConfig($urlRouterProvider) {
 	  	'ngInject';

        $urlRouterProvider.otherwise('/');
    }

})();