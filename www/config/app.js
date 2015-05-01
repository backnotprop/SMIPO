angular.module('appMain', ['ngMaterial', 'ui.router', 'members', 'stocks', 'welcome', 'stock.services', 'data.api'])


.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])

.config(
    function($stateProvider, $urlRouterProvider) {

    // AngularUI Router which uses the concept of states
    // https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


        // stock page
        .state('stocks', {
            url: '/stocks',
            templateUrl: 'components/stocks/stocks.html',
            controller: 'StockCtrl'
        })

        // member page
        .state('members', {
            url: '/members',
            templateUrl: 'components/members/members.html',
            controller: 'MemberCtrl'
        })

        // welcome page
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'components/welcome/welcome.html',
            controller: 'WelcomeCtrl'
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/welcome');
});

