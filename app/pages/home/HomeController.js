// var app = angular.module("myApp", []);
app.controller('HomeController', function($scope, demo, $location) {
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
    } else {
      demo.toogleComputer();
      document.getElementById("settingsButton").removeAttribute('disabled', '');
      document.getElementById("settingsButton").classList.add('action-buttons__settings--no-disabled');
    }
  }
});