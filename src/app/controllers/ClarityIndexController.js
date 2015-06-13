angular.module('capapp.clarity.module')

.controller("clarityIndexContoller", function($log, $scope, config, clarityService){
	$log.debug("init clarityIndexContoller");

	$scope.timesheets = null;

	clarityService.getTimeSheets().then(function(data){
		$log.debug("Load timesheets tst fab " + data);
		$scope.timesheets = data;
		//$scope.timesheets.startDate = Date.parse($scope.timesheets.startDate);
	});

});