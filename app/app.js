var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "app/pages/home/home.html"
    })
    .when('/settings', {
      controller: "SettingsController",
      templateUrl: "app/pages/settings/settings.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});