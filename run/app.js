angular.module('capapp.clarity.app', [
  'capapp.clarity.module',
  'capapp.clarity.mock',
  'ui.bootstrap',
  'mobile-angular-ui',
  'directivesClarityApp'
  
  
])

//routing
.config(function($routeProvider) {
	$routeProvider
	.otherwise({
    	redirectTo: '/clarity/index'
  	});
})

.constant("config", {
	clarity : {
		url : "/clarity"
	}
});