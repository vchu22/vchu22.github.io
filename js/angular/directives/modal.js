app.directive('modal', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=',
    },
    templateUrl: 'js/angular/directives/modal.html',
    controller: function($scope) {
      $scope.open = function(url) {
        console.log(typeof url);
        window.open(url, '_blank');
      };
      $scope.close = function() {
        $scope.$parent.show = false;
      };
    },
  };
});
