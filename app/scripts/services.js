'use strict';

angular.module('confusionApp')
	.constant("baseUrl", "http://localhost:3000/")
	.service('menuFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {

		this.getDishes = function() {
			return $resource(baseUrl + "dishes/:id", null, {
				'update': {
					method: 'PUT'
				}
			});

		};

		this.getPromotion = function() {
			return $resource(baseUrl + "promotions/:id", null);
		};

	}])

.service('corporateFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {

	this.getLeaders = function() {
		return $resource(baseUrl + "leadership/:id", null);
	};

}])

.service('feedbackFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {

	this.getFeedback = function() {
		return $resource(baseUrl + "feedback/:id", null, {
			'update': {
				method: 'PUT'
			}
		});
	};

}]);
