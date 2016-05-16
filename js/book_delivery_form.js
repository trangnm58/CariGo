
angular.module('MainApp.controllers.book', [])

.controller('BookDeliveryController',
	function($scope, $rootScope, $document) {

	$scope.deliveryService = new DeliveryServiceForm();

	$scope.bookDeliveryService = function(){
		$scope.deliveryService.confirmBook();
	};
})