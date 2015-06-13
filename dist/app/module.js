angular.module('capapp.clarity.module', [
	'ngRoute'
])

//routing
.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/clarity/index', {
            templateUrl: 'views/clarity/index.html',
            controller: 'indexClarityContoller'
        })
        .when('/clarity/form/:weekIndex', {
            templateUrl: 'views/clarity/form.html',
            controller: 'formClarityContoller'
        })
        .when('/clarity/select-tasks/:weekIndex', {
            templateUrl: 'views/clarity/selecttasks.html',
            controller: 'formClarityContoller'
        })
        .when('/clarity/testfab', {
            templateUrl: 'views/clarity/testfab.html',
            controller: 'testFabContoller'
        })
		;
	}]
);
angular.module('capapp.clarity.module')

.controller("clarityIndexContoller", ['$log', '$scope', 'config', 'clarityService', function($log, $scope, config, clarityService){
	$log.debug("init clarityIndexContoller");

	$scope.timesheets = null;

	clarityService.getTimeSheets().then(function(data){
		$log.debug("Load timesheets tst fab " + data);
		$scope.timesheets = data;
		//$scope.timesheets.startDate = Date.parse($scope.timesheets.startDate);
	});

}]);
angular.module('capapp.clarity.module')

.controller("formClarityContoller", ['$log', '$scope', '$location', '$routeParams', 'config', 'clarityService', '$modal', function($log, $scope, $location, $routeParams, config, clarityService, $modal){
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
ModalInstanceCtrl.$inject = ['$scope', '$modalInstance', 'items'];
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
  
	
	

}]);
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


angular.module('capapp.clarity.module')

.controller("testFabContoller", ['$log', '$scope', '$location', '$routeParams', 'config', 'clarityService', function($log, $scope, $location, $routeParams, config, clarityService){
	$log.debug("init testFabContoller");
	

}]);
angular.module('directivesClarityApp',[])

.directive('numbersOnly', function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {
           // this next if is necessary for when using ng-required on your input. 
           // In such cases, when a letter is typed first, this parser will be called
           // again, and the 2nd time, the value will be undefined
           if (inputValue === undefined) return '';
           var transformedInput = inputValue.replace(/[^0-9]/g, ''); 
           if (transformedInput !== inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }         

           return transformedInput;         
       });
     }
   };
})


  .directive('starRating',
	function() {
		return {
			restrict : 'A',
			template : '<ul class="rating">	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)"> \u2605 </li></ul>',
			scope : {
				ratingValue : '=',
				max : '=',
				onRatingSelected : '&'
			},
			link : function(scope, elem, attrs) {
				var updateStars = function() {
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++) {
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};
				
				scope.toggle = function(index) {
					scope.ratingValue = index + 1;
					scope.onRatingSelected({
						rating : index + 1
					});
				};
				
				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				);
			}
		};
	}
);
angular.module('mobile-angular-ui.directives.overlay', []).directive('overlay', [
  "$compile", function($compile) {
    return {
        compile: function(tElem, tAttrs) {
            var rawContent = tElem.html();
            return function postLink(scope, elem, attrs) {
                var active = "";
                var body = rawContent;
                var id = attrs.overlay;

                if (attrs["default"] !== null) {
                   active = "default='" + attrs["default"] + "'";
                }

                var html = "<div class=\"overlay\" id=\"" + id + "\" toggleable " + active + " parent-active-class=\"overlay-in\" active-class=\"overlay-show\">\n  <div class=\"overlay-inner\">\n    <div class=\"overlay-background\"></div>\n    <a href=\"#" + id + "\" toggle=\"off\" class=\"overlay-dismiss\">\n      <i class=\"fa fa-times-circle-o\"></i>\n    </a>\n    <div class=\"overlay-content\">\n      <div class=\"overlay-body\">\n        " + body + "\n      </div>\n    </div>\n  </div>\n</div>";
                elem.remove();

                var sameId = angular.element(document.getElementById(id));

                if (sameId.length > 0 && sameId.hasClass('overlay')) {
                  sameId.remove();
                }

                body = angular.element(document.body);
                body.prepend($compile(html)(scope));

                if (attrs["default"] === "active") {
                   body.addClass('overlay-in');
                }
            };
        }
    };
  }
]);
angular.module('capapp.clarity.module')

.service("clarityService", ['$q', '$http', 'config', function($q, $http, config){

    this.getTimeSheets = function(){
        		
       	var deferred = $q.defer();

		$http.get(config.clarity.url + "/timesheets")
		.success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject();
		});

		return deferred.promise;

    };

}]);
