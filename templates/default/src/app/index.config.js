/* global angular */
/*
   Config: <%= mainComponentName %>
*/

(function () {
	'use strict';

	angular
		.module('<%= mainComponentName %>')
		.config(config)
		.constant(
			'CONSTANT_KEY', {}
		);

	function config($httpProvider) {
		'ngInject';
	}
})();
