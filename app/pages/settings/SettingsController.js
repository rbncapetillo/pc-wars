app.controller('SettingsController', function($scope, demo, serviceRequest, $location, serviceCatalog) {
  $scope.selectedData = serviceCatalog.selectedProcessor
  $scope.goBack = function() {
    $location.path('/');
  }
  $scope.processorClick = function(){
    serviceRequest[0].success(function(data) {
      $scope.processor = data.results;
    });
  }
  $scope.hddClick = function(){
    serviceRequest[1].success(function(data) {
      $scope.hdd = data.results;
    });
  }
  $scope.ramClick = function(){
    serviceRequest[2].success(function(data) {
      $scope.ram = data.results;
    });
  }
  $scope.gcClick = function(){
    serviceRequest[3].success(function(data) {
      $scope.gc = data.results;
    });
  }
  $scope.myFunction = function() {
    serviceCatalog.selectedProcessor = $scope.selectedProcessor;
  }
});