/*
    Directive: aw.webapp.directive
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.directive')
        .directive('directive', directive);

    /** @ngInject */
    function directive() {
        return {
            restrict: 'E',
            templateUrl: 'app/component/directive/directive.html',
            replace: true,
            controller: 'DirectiveController as DirectiveCtrl',
            compile: function() {
                return {
                    pre: function( scope, element ) {
                        

                    },
                    post: function( scope, element ) {
                        
                    }
                };
            }
        };
    }
})();
