app.directive("timeline", function () {
  return {
    restrict: "E",
    scope: {
      jobs: "=",
    },
    templateUrl: "js/angular/directives/timeline.html",
  };
});
