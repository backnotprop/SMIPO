angular.module('welcome', [])

    .controller('WelcomeCtrl', ['$scope','$state','DataApiFactory', 'StockFactory',
        function($scope, $state, DataApiFactory, StockFactory){


        //-----------------------------------------------
        // Get Stock Quotes
        //-----------------------------------------------

       /* StockFactory.grabStocks().then(function(data) {
                $scope.quotes = data.query.results;



            }
        );*/

        $scope.movingBar = function () {
            $(function () {

                var $c = $('#carousel'),
                    $w = $(window);

                $c.carouFredSel({
                    align: false,
                    items: 10,
                    scroll: {
                        items: 1,
                        duration: 2000,
                        timeoutDuration: 0,
                        easing: 'linear',
                        pauseOnHover: 'immediate'
                    }
                });


                $w.bind('resize.example', function () {
                    var nw = $w.width();
                    if (nw < 990) {
                        nw = 990;
                    }

                    $c.width(nw * 3);
                    $c.parent().width(nw);

                }).trigger('resize.example');

            });
        };

        $scope.movingBar();



        // submit member
        $scope.memSub = function(member) {
            var newMem = angular.copy(member);
            DataApiFactory.sendData(newMem, '/member').then(
                function (response) {

                    //alert response back (Should be success or failure)
                    alert(response);

                    // reload state
                    $state.go($state.current, {}, {reload: true});

                });
        };




    }]);

