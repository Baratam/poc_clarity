angular.module('capapp.clarity.module')

.controller("indexClarityContoller",['$log','$scope','$location','config','clarityService', function($log, $scope, $location, config, clarityService){
	$log.debug("init indexClarityContoller");

	$scope.timesheets = null;
	//$scope.weekIndex = null;

	clarityService.getTimeSheets().then(function(data){
		$log.debug("Load timesheets " + data);
		$scope.timesheets = data;

		var i;
		for(i=0; i<$scope.timesheets.length; i++){
			$scope.timesheets[i].startDate = Date.parse($scope.timesheets[i].startDate);
			$scope.timesheets[i].endDate = Date.parse($scope.timesheets[i].endDate);
		}
		
	});

	$scope.goToForm = function(selectedPeriodId){
		$log.debug("periodId goToForm fabian = " + selectedPeriodId);
		
		
		var selectedTimesheetIndex;
		var i;
		for(i=0; i<$scope.timesheets.length; i++){
			if ($scope.timesheets[i].periodId == selectedPeriodId) {
				selectedTimesheetIndex = i;
			}
		}

		$log.debug("selectedTimesheetIndex fabje = " + selectedTimesheetIndex);
		$location.path('/clarity/select-tasks/' + selectedTimesheetIndex);

		// $location.path('/clarity/form/' + currentWeekIndex);
	};
	
	
	
	

	
	
	

}]);

