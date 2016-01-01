/*
    Route: aw.webapp.pageTwo
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.pageTwo')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig( $stateProvider ) {
        $stateProvider
            .state( 'pageTwo', {
                url: '/duo',
                templateUrl: 'app/pageTwo/pageTwo.html',
                controller: 'PageTwoController as PageTwoCtrl'
            } );
    }
})();