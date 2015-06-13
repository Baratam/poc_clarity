angular.module('capapp.clarity.module')

.service("clarityService", function($q, $http, config){

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

});
