/*
    Directive: aw.webapp.directive
*/

(function() {
    'use strict';

    angular
        .module('aw.webapp.directive')
        .directive('directive', directive);

    function directive() {
        'ngInject';
        
        return {
            restrict: 'E',
            templateUrl: 'app/component/directive/directive.html',
            replace: true,
            controller: 'DirectiveController as DirectiveCtrl'
        };
    }
})();
