app.controller('SettingsController', function($scope, demo, serviceRequest, $location, serviceCatalog) {
  $scope.defaultProcessorView = serviceCatalog.defaultProcessorView;
  $scope.defaultHddView = serviceCatalog.defaultHddView;
  $scope.defaultRamView = serviceCatalog.defaultRamView;
  $scope.defaultGcView = serviceCatalog.defaultGcView;
  $scope.newProcessorView = serviceCatalog.newProcessorView;
  $scope.newHddView = serviceCatalog.newHddView;
  $scope.newRamView = serviceCatalog.newRamView;
  $scope.newGcView = serviceCatalog.newGcView;
  $scope.defaultProcessor = serviceCatalog.defaultComponents.processor;
  $scope.defaultHdd = serviceCatalog.defaultComponents.hdd;
  $scope.defaultRam = serviceCatalog.defaultComponents.ram;
  $scope.defaultGc = serviceCatalog.defaultComponents.gc;
  $scope.newProcessor = serviceCatalog.newProcessor;
  $scope.newHdd = serviceCatalog.newHdd;
  $scope.newRam = serviceCatalog.newRam;
  $scope.newGc = serviceCatalog.newGc;
  $scope.powerReview = serviceCatalog.powerReview;
  $scope.settingsReview = serviceCatalog.settingsReview;
  
  $scope.goBack = function() {
    $location.path('/');
    serviceCatalog.settingsReview = false;
    serviceCatalog.powerReview = false;
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
  $scope.processorAction = function($event) {
    serviceCatalog.selectedProcessor = $scope.selectedProcessor;
    if ($scope.selectedProcessor) {
      serviceCatalog.defaultProcessorView = false;
      $scope.defaultProcessorView = serviceCatalog.defaultProcessorView;
      $scope.defaultProcessor = serviceCatalog.defaultComponents.processor;
      serviceCatalog.newProcessor = $scope.selectedProcessor;
      $scope.newProcessor = serviceCatalog.newProcessor;
      serviceCatalog.newProcessorView = true;
      $scope.newProcessorView = serviceCatalog.newProcessorView;
    }
  }
  $scope.hddAction = function() {
    serviceCatalog.selectedHdd = $scope.selectedHdd;
    if ($scope.selectedHdd) {
      serviceCatalog.defaultHddView = false;
      $scope.defaultHddView = serviceCatalog.defaultHddView;
      $scope.defaultHdd = serviceCatalog.defaultComponents.hdd;
      serviceCatalog.newHdd = $scope.selectedHdd;
      $scope.newHdd = serviceCatalog.newHdd;
      serviceCatalog.newHddView = true;
      $scope.newhddView = serviceCatalog.newHddView;
    }
  }
  $scope.ramAction = function() {
    serviceCatalog.selectedRam = $scope.selectedRam
    if ($scope.selectedRam) {
      serviceCatalog.defaultRamView = false;
      $scope.defaultRamView = serviceCatalog.defaultRamView;
      $scope.defaultRam = serviceCatalog.defaultComponents.ram;
      serviceCatalog.newRam = $scope.selectedRam;
      $scope.newRam = serviceCatalog.newRam;
      serviceCatalog.newRamView = true;
      $scope.newRamView = serviceCatalog.newRamView;
    }
  }
  $scope.gcAction = function() {
    serviceCatalog.selectedGc = $scope.selectedGc;
    if ($scope.selectedGc) {
      serviceCatalog.defaultGcView = false;
      $scope.defaultGcView = serviceCatalog.defaultGcView;
      $scope.defaultGc = serviceCatalog.defaultComponents.gc;
      serviceCatalog.newGc = $scope.selectedGc;
      $scope.newGc = serviceCatalog.newGc;
      serviceCatalog.newGcView = true;
      $scope.newGcView = serviceCatalog.newGcView;
    }
  }
});