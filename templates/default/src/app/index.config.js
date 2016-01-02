/*
   Config: <%= mainComponentName %>
*/

(function() {
    'use strict';

    angular
        .module( '<%= mainComponentName %>' )
        .config( config )
        .constant( 
            'CONSTANT_KEY', {
                
            }
        )
    ;

    /** @ngInject */
    function config() {

    }
    
})();