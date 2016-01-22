/* global angular */
/*
   Service: aac.test
*/

(function () {
	'use strict';

	angular
		.module('aac.test')
		.service('bla', bla);

	function bla() {
		'ngInject';

		var service = this;

		/*
			Init
		*/
		function init() {

		}

		/*
			Public Functions
		*/

		/*
			Private Functions
		*/

		init();
	}
})();
