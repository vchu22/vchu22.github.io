app.directive("timeline", function () {
  return {
    restrict: "E",
    scope: {
      experience: "=",
    },
    templateUrl: "js/angular/directives/timeline.html",
    controller: function ($scope) {
      $scope.getDate = function (dateStr, type) {
        if (dateStr) {
          let date = new Date(dateStr);
          return date.toUTCString().slice(8, 16);
        }
        if (type == "end") return "Present";
        if (type == "start") return "";
      };
    },
  };
});
