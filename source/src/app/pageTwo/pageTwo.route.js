/*
    Route: aw.webapp.pageTwo
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.pageTwo')
        .config(routerConfig);

    function routerConfig( $stateProvider ) {
        'ngInject';
        
        $stateProvider
            .state( 'pageTwo', {
                url: '/duo',
                templateUrl: 'app/pageTwo/pageTwo.html',
                controller: 'PageTwoController as PageTwoCtrl'
            } );
    }
})();