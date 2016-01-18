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
		 * Generates a person information string based on input.
		 *
		 * @param {string | {name: string, age: number | date}} name Name or person object
		 * @param {{separator: string} =} options An options object
		 * @return {string} The constructed information string
		*/
		vm.foo = function () {
			vm.reduce();
		};

		/**
		* Create an array of all the right files in the source dir
		* @param {{value: Int}} params The value to return
		* @param {{multiplication: Int}} params Multiplies the return
		* @return 		{Int}	returns a value which is an int.
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

