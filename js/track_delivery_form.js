
angular.module('MainApp.controllers.month', [])

.controller('TrackRequestController',
	function($scope, $rootScope, $document) {

	$scope.deliveryService = new DeliveryServiceForm();

	$scope.requestList = [
		{ 
		  dRequestID : '1',
		  dFromLocation : '13 Hai Ba Trung, Ha Noi',
		  dToLocation : '26 Nguyen Chi Thanh, Ha Noi',
		  dTypeOfCargo: 'Food',
		  dDeliveryManNum: 0,
		  dMinMoney: '0' . 'VND',
		  dStatus: 'unserved'
		}, {
		  dRequestID : '2',
		  dFromLocation : '13 Hai Ba Trung, Ha Noi',
		  dToLocation : '26 Nguyen Chi Thanh, Ha Noi',
		  dTypeOfCargo: 'Food',
		  dDeliveryManNum: 5,
		  dMinMoney: '500.000' . 'VND',
		  dStatus: 'served'
		}
	];

	$scope.viewRequestDetails = function(requestID){
		$scope.deliveryService.viewRequestDetails(requestID);
	}
})