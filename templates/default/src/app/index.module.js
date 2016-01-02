/*
    module: <%= mainComponentName %>
*/

(function() {
    'use strict';

    // templates modules to hold all template cache later
    angular.module('templates', []);

    angular
        .module(
            '<%= mainComponentName %>', 
            [
                'templates',

                
            ]
        );

})();