/* global angular */
/**
*	##Controller: aw.webapp.pageTwo
*	Controller of the pageTwo component. Used to expose funtions
*   of commonService.
*/

(function () {
	'use strict';

	angular
		.module('aw.webapp.pageTwo')
		.controller('PageTwoController', PageTwoController);

	function PageTwoController(CommonService) {
		'ngInject';
		var vm = this;

		/**
		 * Exposing the *reduce* function to the vm
		 */
		vm.reduce = CommonService.reduce;

		/**
		 * Holds a referrence to ````commonService.reduce````
		 */
		vm.foo = function () {
			vm.reduce();
		};

		/**
		 * Return 2 unless we pass in other params.
		 * @param {Object} params - The params who is responsible for the project.
		 * @param {int} params.value - The name of the params.
		 * @param {int} params.multiplecation - some multiplecation.
		 */
		vm.return2 = function (params) {
			var _params = {
				value: params.value || 2,
				multplication: params.multiplecation || 1
			};

			return _params.value * _params.multiplecation;
		};
	}
})();

