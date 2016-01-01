/*
    Route: aw.webapp
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig( $urlRouterProvider ) {
        $urlRouterProvider.otherwise('/');
    }

})();