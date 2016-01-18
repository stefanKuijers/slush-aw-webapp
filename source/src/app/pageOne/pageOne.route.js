/*
    Route: aw.webapp.pageOne
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.pageOne')
        .config(routerConfig);

    function routerConfig( $stateProvider ) {
        'ngInject';
        
        $stateProvider
            .state( 'pageOne', {
                url: '/uno',
                templateUrl: 'app/pageOne/pageOne.html',
                controller: 'PageOneController as PageOneCtrl'
            } );
    }
})();