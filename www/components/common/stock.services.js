angular.module('stock.services', [])

    .factory('StockFactory', function($q, $http) {


        return {

            grabStocks: function () {
                var deferred = $q.defer();

                var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo" +
                    ".finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2" +
                    "C%22MSFT%22%2C%20%22TWX%22%2C%20%22HSP%22%2C%22GD%22%2C%22CMI%22%2C%22CAT%22%2C%22" +
                    "AMGN%22%2C%22ALXN%22%2C%20%22EMN%22%2C%20%22DOW%22)&format=json&env=store%3A%2F%2F" +
                    "datatables.org%2Falltableswithkeys&callback=";

                $http.get(url)
                    .success(function (data) {
                        console.log(data);
                        deferred.resolve(data);
                    });

                return deferred.promise;
            }
        }
    });
