(function(){
var stars = angular.module('stars', ['ionic'])

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

//Start the Config

stars.factory('stars',['$http', function($http){
    var stars = {};
    var baseUrl = 'http://swapi.co/api/people/';
    var page2 = '?page=2';
    var page3 = '?page=3';
    var page4 = '?page=4';
    var page5 = '?page=5';
    var page6 = '?page=6';
    var page7 = '?page=7';
    var page8 = '?page=8';
    var page9 = '?page=9';

      stars.getStars = function(){
      return $http.get(baseUrl).then(function(response){
        characters = response.data.results;
      });
    };
    return stars;
  }]);

stars.controller('starsController',['$scope','stars',function($scope,stars){
  //getStars();
  //console.log($scope.pages);

  $scope.getStars = function(){
    stars.getStars().success(function(data){
      $scope.characters = data.results;
    });
  }

}]);

stars.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
  url: '/',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('nextStars', {
  url: '/11_20Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('20Stars', {
  url: '/21_30Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('30Stars', {
  url: '/31_40Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('40Stars', {
  url: '/41_50Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('50Stars', {
  url: '/51_60Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('60Stars', {
  url: '/61_70Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('70Stars', {
  url: '/71_80Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  $stateProvider.state('80Stars', {
  url: '/81_87Stars',
  views: {
    home: {
      templateUrl: 'views/stars.html',
      controller: 'starsController'
    }
  }
})

  //Star other pages than STARS

$stateProvider.state('films', {
  url: '/films',
  views: {
    films: {
      templateUrl: 'views/films.html',
      controller: 'filmsController'
    }
  }
})

$stateProvider.state('film', {
  url: '/films/:filmId',
  views: {
    films: {
      templateUrl: 'views/filmDetails.html',
      controller: 'filmDetailController'
    }
  }
})

$stateProvider.state('planets', {
  url: '/planets',
  views: {
    planets: {
      templateUrl: 'views/planets.html',
      controller: 'planetsController'
    }
  }
})

$stateProvider.state('species', {
  url: '/species',
  views: {
    species: {
      templateUrl: 'views/species.html',
      controller: 'speciesController'
    }
  }
})

$stateProvider.state('starships', {
  url: '/starships',
  views: {
    starships: {
      templateUrl: 'views/starships.html',
      controller: 'starshipsController'
    }
  }
})

$stateProvider.state('vehicles', {
  url: '/vehicles',
  views: {
    vehicles: {
      templateUrl: 'views/vehicles.html',
      controller: 'vehiclesController'
    }
  }
})
})

//End Config

//Characters!!!

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

//End Controllers

})();