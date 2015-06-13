angular.module('capapp.clarity.module')

.controller("formClarityContoller", function($log, $scope, $location, $routeParams, config, clarityService, $modal){
	$log.debug("init formClarityContoller");
	
	$scope.weekIndex = $routeParams.weekIndex;

	$log.debug("de weekindex is : " + $routeParams.weekIndex);
	

	$scope.days = [
		'Ma',
		'Di',
		'Wo',
		'Do',
		'Vr',
		'Za',
		'Zo'
	];

	clarityService.getTimeSheets().then(function(data){
		$log.debug("Load timesheets" + data);
		$scope.timesheets = data;
		
		var i;
		for(i=0; i<$scope.timesheets.length; i++){
			$scope.timesheets[i].startDate = Date.parse($scope.timesheets[i].startDate);
			$scope.timesheets[i].endDate = Date.parse($scope.timesheets[i].endDate);
		}
	});

	
	$scope.goToMain = function(){
		$log.debug("fab clicked goto main");
		$location.path('/clarity/index');
	};
	
	
	
	
	$scope.items = [
					{pDesc:'LISA Sep Dec 2014',
					 pCode:'1'
					 }, 
					{pDesc:'Holiday',
					 pCode:'2'
					 },
					 {pDesc:'Annual Leave',
					 pCode:'3'
					 },
					 {pDesc:'Shadow Billing',
					 pCode:'4'
					 },
					 {pDesc:'Com Off',
					 pCode:'5'
					 }
					];
	 $scope.openTasks = function (size) {
	$log.debug("openTasks" );
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
	
	
	
	
	// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
  
	
    $modalInstance.close($scope.selection);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
  
  //check box handlings
	
	$scope.selection = [];
	 $scope.toggleSelection = function (item) {
	
     var idx = $scope.selection.indexOf(item);
     // is currently selected
     if (idx > -1) {
       $scope.selection.splice(idx, 1);
     }
     // is newly selected
     else {
       $scope.selection.push(item);
     }
   };
  
  
};
	//Below is separated outside for angular - mobile ui

	$scope.selection = [];
	 $scope.toggleSelection = function (item) {
	
     var idx = $scope.selection.indexOf(item);
     // is currently selected
     if (idx > -1) {
       $scope.selection.splice(idx, 1);
     }
     // is newly selected
     else {
       $scope.selection.push(item);
     }
   };

   //for project radio button click
   $scope.selPrjData = [];
    $scope.selTimeSheet = [];
    $scope.onSelectProject = function (pitem, tms) {
		$log.debug("-->"+tms.startDate);
		$log.debug("S-->"+tms.status);
		$scope.selPrjData.length=0;
		$scope.selectedTasks.length=0;
		
	var idx = $scope.selPrjData.indexOf(pitem);
	  if (idx > -1) {
       $scope.selPrjData.splice(idx, 1);
     } else {
       $scope.selPrjData.push(pitem);
     }
	 
	 
	 var idt = $scope.selTimeSheet.indexOf(tms);
	  if (idt > -1) {
       $scope.selTimeSheet.splice(idt, 1);
     } else {
       $scope.selTimeSheet.push(tms);
     }
   };
   
   //on selection of tasks
   $scope.selectedTasks = [];
	 $scope.toggleTasksSelection = function (item) {
	
     var idx = $scope.selectedTasks.indexOf(item);
     // is currently selected
     if (idx > -1) {
       $scope.selectedTasks.splice(idx, 1);
     }
     // is newly selected
     else {
       $scope.selectedTasks.push(item);
     }
   };
   
  
    $scope.showSelectedTasks = function () {
	$log.debug("Project Desc: 1[] "+$scope.selPrjData[0].projectdesc);
	$log.debug("Project Code: 1[] "+$scope.selPrjData[0].projectcode);
	
	
	$log.debug("selTimeSheet: 1[] "+$scope.selTimeSheet[0].status);
	$scope.selTimeSheet[0].status = 'Submitted';
	$log.debug("selTimeSheet: 2[] "+$scope.selTimeSheet[0].status);
	
	var j;
	
		for(j=0; j<$scope.selectedTasks.length; j++){
		
		var a = $scope.selectedTasks[j].taskdesc;
		$log.debug("Tdesc:   "+a);
		}
	//call the api here	  

	
	//navigate to how page
	alert("Time Sheets Submitted");
	
   };
	
	//Agenda Function
	
	  $scope.navigateToAgenda = function () {

		$log.debug(" navigateToAgenda ");
		$location.path('/agenda/agendaHome');
	
   };
	
	
	
  
    $scope.enteredHours = function () {

			
		var j;
	for(j=0; j<$scope.selectedTasks.length; j++){
			
		var total;
		var mon = $scope.selectedTasks[j].weekdays[0].MonHours;
		var tue = $scope.selectedTasks[j].weekdays[1].TueHours;
		var wed = $scope.selectedTasks[j].weekdays[2].WedHours;
		var thu = $scope.selectedTasks[j].weekdays[3].ThrHours;
		var fri = $scope.selectedTasks[j].weekdays[4].FriHours;
		var sat = $scope.selectedTasks[j].weekdays[5].SatHours;
		var sun = $scope.selectedTasks[j].weekdays[6].SunHours;
		
	
		$scope.selectedTasks[j].totalhours = mon+tue+wed+thu+fri+sat+sun;

		}    
   };
  
	
	

});