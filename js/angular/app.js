var app = angular.module("app", []);

app.controller("linksController", function ($scope, $http) {
  $http.get("/js/angular/json/links.json").then(function (data) {
    $scope.links = data.data;
  });
});

app.controller("skillsTab", function ($scope, $http) {
  $http.get("/js/angular/json/skills.json").then(function (data) {
    $scope.skills = data.data;
  });
});

app.controller("expTab", function ($scope, $http) {
  $http.get("/js/angular/json/experience.json").then(function (data) {
    $scope.experience = data.data;
  });
});

app.controller("portfolioTab", function ($scope, $http) {
  $scope.show = false;
  $scope.toggle = (project) => {
    $scope.show = !$scope.show;
    $scope.item = project;
  };
  $http.get("/js/angular/json/portfolio.json").then(function (data) {
    $scope.portfolio = data.data;
  });
});
