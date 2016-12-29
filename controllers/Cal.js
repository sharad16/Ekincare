angular.module("MyApp").controller("calendarCntrl", function($scope) {
    $scope.day = moment();
    console.log("Calling calandar........");
});
