angular.module('edutourApp', ['ngRoute']).config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/AddNewOrder', {
          templateUrl: 'templates/add_order.html',
          controller: function ($scope) {
              $scope.message = 'This is Add new order screen';
          }
      }).
      when('/ShowOrders', {
          templateUrl: 'templates/show_orders.html',
          controller: function ($scope) {
              $scope.message = 'This is Show orders screen';
          }
      }).
       when('/checkboxes', {
           templateUrl: 'templates/temp_checkboxes.html',
           controller: function ($scope) {
               $('.ui.checkbox')
                  .checkbox()
                ;
           }
       }).
        when('/radiobtns', {
            templateUrl: 'templates/temp_radiobtns.html',
            controller: function ($scope) {
                $scope.message = 'This is Show orders screen';
            }
        }).
      otherwise({
          redirectTo: '/AddNewOrder'
      });
  } ]);

