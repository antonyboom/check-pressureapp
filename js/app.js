var app = angular.module("app", []);

app.controller("HomeCtrl", function($scope) {

    $scope.pressure = [
        {
            rate: 156
        },
        {
            rate: 164
        },
        {
            rate: 178
        },
        {
            rate: 161
        },
        {
            rate: 167
        }
    ];

    $scope.add = function(item) {
        $scope.pressure.push(
            {
                rate: item
            });
    };

});
// directive
app.directive('toolbarTip', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).toolbar(scope.$eval(attrs.toolbarTip));
    }
  };
});
