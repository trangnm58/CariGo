
angular.module('MainApp.controllers.month', [])

.controller('BookDeliveryController',
	function($scope, $rootScope, $document) {

	$scope.uName = '';
	$scope.uPhone = '';
	$scope.dFromLocation = '';
	$scope.dToLocation = '';
	$scope.dDate = '';
	$scope.dTime = '';
	$scope.dTypeOfCargo = '';
	$scope.dSpecialRequirement = '';

	$scope.dDeliveryService = new DeliveryServiceForm();

	var validate = function(){};

	$scope.bookDeliveryService = function(){
		validate();

		dDeliveryService.submit();
	};
})