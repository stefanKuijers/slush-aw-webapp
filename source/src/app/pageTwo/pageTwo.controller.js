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
		 * @param {string | {name: string, age: number | date}} name - Name or person object
		 * @param {{separator: string} =} options - An options object
		 * @return {string} The constructed information string
		*/
		vm.foo = function () {
			vm.reduce();
		};

		/**
		 * Assign the project to an employee.
		 * @param {Object} employee - The employee who is responsible for the project.
		 * @param {string} employee.name - The name of the employee.
		 * @param {string} employee.department - The employee's department.
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

