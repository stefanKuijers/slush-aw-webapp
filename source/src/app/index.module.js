/*
    module: aw.webapp
*/

(function() {
    'use strict';

    // templates modules to hold all template cache later
    angular.module('templates', []);

    angular
        .module(
            'aw.webapp', 
            [
                'templates',
                'ui.router',

                'aw.webapp.directive',
                'aw.webapp.pageOne',
                'aw.webapp.pageTwo'
            ]
        );

})();