// var app = angular.module("myApp", []);
app.controller('HomeController', function($scope, demo, $location, serviceCatalog) {
  $scope.settingsReview = serviceCatalog.settingsReview;
  if (demo.getComputerStatus() == false) {
    document.getElementById("settingsButton").removeAttribute('disabled', '');
    document.getElementById("settingsButton").classList.add('action-buttons__settings--no-disabled');
  } else {
    document.getElementById("settingsButton").setAttribute('disabled', '');
    document.getElementById("settingsButton").classList.remove('action-buttons__settings--no-disabled');
  }
  $scope.power = function() {
    if (demo.getComputerStatus() == false) {
      demo.toogleComputer();
      $location.path('/settings');
      serviceCatalog.powerReview = true;
    } else {
      demo.toogleComputer();
      $scope.powerReview = false;
      document.getElementById("settingsButton").removeAttribute('disabled', '');
      document.getElementById("settingsButton").classList.add('action-buttons__settings--no-disabled');
    }
  }
  $scope.settings = function() {
    if (demo.getComputerStatus() == false) {
      serviceCatalog.settingsReview = true;
      $scope.settingsReview = serviceCatalog.settingsReview;
      serviceCatalog.powerReview = false;
      $location.path('/settings');
    }
  }
});