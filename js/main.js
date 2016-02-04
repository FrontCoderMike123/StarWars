(function(){
var stars = angular.module('stars', ['ionic','angularUtils.directives.dirPagination'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

stars.factory('characterPages', function($http){
  var baseUrl = 'http://swapi.co/api/people/';
  var people = [];
  return {
    tenStars: function(){
      return $http.get(baseUrl).then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    twentyStars: function(){
      return $http.get(baseUrl+'?page=2').then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    thirtyStars: function(){
      return $http.get(baseUrl+'?page=3').then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    fortyStars: function(){
      return $http.get(baseUrl+'?page=4').then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    fiftyStars: function(){
      return $http.get(baseUrl+'?page=5').then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    sixtyStars: function(){
      return $http.get(baseUrl+'?page=6').then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    seventyStars: function(){
      return $http.get(baseUrl+'?page=7').then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    eightyStars: function(){
      return $http.get(baseUrl+'?page=8').then(function(response){
        characters = response.data.results;
        return characters;
      });
    },
    ninetyStars: function(){
      return $http.get(baseUrl+'?page=9').then(function(response){
        characters = response.data.results;
        return characters;
      });
    }
  }
  });

stars.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('stars', {
  url: '/',
  views: {
    stars: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
});

$stateProvider.state('films', {
  url: '/films',
  views: {
    films: {
      templateUrl: 'views/films.html',
      controller: 'filmsController'
    }
  }
});

$stateProvider.state('film', {
  url: '/films/:filmId',
  views: {
    films: {
      templateUrl: 'views/filmDetails.html',
      controller: 'filmDetailController'
    }
  }
});

$stateProvider.state('planets', {
  url: '/planets',
  views: {
    planets: {
      templateUrl: 'views/planets.html',
      controller: 'planetsController'
    }
  }
});

$stateProvider.state('species', {
  url: '/species',
  views: {
    species: {
      templateUrl: 'views/species.html',
      controller: 'speciesController'
    }
  }
});

$stateProvider.state('starships', {
  url: '/starships',
  views: {
    starships: {
      templateUrl: 'views/starships.html',
      controller: 'starshipsController'
    }
  }
});

$stateProvider.state('vehicles', {
  url: '/vehicles',
  views: {
    vehicles: {
      templateUrl: 'views/vehicles.html',
      controller: 'vehiclesController'
    }
  }
});
});

stars.controller('starsController',['$scope','$http',function($scope,$http){
  $scope.currentPage = 1;
  //this scope is ONLY here because the pagination does not reset when clicked else where..... 
  //but i couldnt quite get this to work in time.

  $scope.tenStars = function() {
    $http.get('http://swapi.co/api/people/').success(function(data){
    $scope.characters = data.results;
  });
  };
  window.onload = $scope.tenStars;
  $scope.twentyStars = function() {
    $http.get('http://swapi.co/api/people/?page=2').success(function(data){
    $scope.characters = data.results;
  });
  };
  $scope.thirtyStars = function() {
    $http.get('http://swapi.co/api/people/?page=3').success(function(data){
    $scope.characters = data.results;
  });
  };
  $scope.fortyStars = function() {
    $http.get('http://swapi.co/api/people/?page=4').success(function(data){
    $scope.characters = data.results;
  });
  };
  $scope.fiftyStars = function() {
    $http.get('http://swapi.co/api/people/?page=5').success(function(data){
    $scope.characters = data.results;
  });
  };
  $scope.sixtyStars = function() {
    $http.get('http://swapi.co/api/people/?page=6').success(function(data){
    $scope.characters = data.results;
  });
  };
  $scope.seventyStars = function() {
    $http.get('http://swapi.co/api/people/?page=7').success(function(data){
    $scope.characters = data.results;
  });
  };
  $scope.eightyStars = function() {
    $http.get('http://swapi.co/api/people/?page=8').success(function(data){
    $scope.characters = data.results;
  });
  };
  $scope.ninetyStars = function() {
    $http.get('http://swapi.co/api/people/?page=9').success(function(data){
    $scope.characters = data.results;
  });
  };
}]);

stars.controller('filmsController', ['$scope','$http', function($scope,$http) {
  $http.get('http://swapi.co/api/films/?format=json').success(function(data) {
    $scope.films = data.results;
  });
}]);

stars.controller('filmDetailController', ['$scope','$http','$stateParams', function($scope,$http,$stateParams) {
  $http.get('http://swapi.co/api/films/?format=json').success(function(data) {
    $scope.title = data.results[$stateParams.filmId].title;
    $scope.release_date = data.results[$stateParams.filmId].release_date;
    $scope.director = data.results[$stateParams.filmId].director;
    $scope.producer = data.results[$stateParams.filmId].producer;
    $scope.opening_crawl = data.results[$stateParams.filmId].opening_crawl;
    $scope.episode_id = data.results[$stateParams.filmId].episode_id;
  });
}]);

stars.controller('planetsController', ['$scope','$http', function($scope,$http) {
  $http.get('http://swapi.co/api/planets/?format=json').success(function(data) {
    $scope.planets = data.results;
  });
}]);

stars.controller('speciesController', ['$scope','$http', function($scope,$http) {
  $http.get('http://swapi.co/api/species/?format=json').success(function(data) {
    $scope.species = data.results;
  });
}]);

stars.controller('starshipsController', ['$scope','$http', function($scope,$http) {
  $http.get('http://swapi.co/api/starships/?format=json').success(function(data) {
    $scope.starships = data.results;
  });
}]);

stars.controller('vehiclesController', ['$scope','$http', function($scope,$http) {
  $http.get('http://swapi.co/api/vehicles/?format=json').success(function(data) {
    $scope.vehicles = data.results;
  });
}]);

})();