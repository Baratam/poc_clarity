angular.module('capapp.clarity.module', [
	'ngRoute'
])

//routing
.config(function($routeProvider) {
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
	}
);