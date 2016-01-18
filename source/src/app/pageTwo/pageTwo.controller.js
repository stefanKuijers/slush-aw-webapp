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
		 * Calling our own property indirectly
		 */
		vm.foo = function () {
			vm.reduce();
		};

		/**
		* Create an array of all the right files in the source dir
		* @param {{value: Int}} options The value to return
		* @param {{multiplication: Int}} options Multiplies the return
		* @param 		{Object} params An object. Possble options:
		*				````value:Int```` - the value to return
		*               ````multiplecation:Int```` - multiplies the return value on return
		*
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

