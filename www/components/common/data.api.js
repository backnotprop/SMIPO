angular.module('data.api', [])

.factory('DataApiFactory', function($http, $state, $q) {


    return {
        sendData: function (dataTo, url) {

            var deferred = $q.defer();

            $http.post(url, dataTo).
                then(function (response) {

                    //resolve response from server
                    deferred.resolve(response.data);

                });

            // end callback looping in ctrl
            return deferred.promise;
        }
    }
});