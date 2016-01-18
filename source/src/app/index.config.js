/* global angular */
/*
   Config: aw.webapp
*/

(function () {
	'use strict';

	angular
		.module('aw.webapp')
		.config(config)
		.constant(
			'CONSTANT_KEY', {}
		);

	function config($httpProvider) {
		'ngInject';
	}
})();
