// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
         controller: 'searchCtrl'
      }
    }
  })

   


  .state('app.categorias', {
      url: '/categorias',
      views: {
        'menuContent': {
          templateUrl: 'templates/categorias.html',
           controller: 'categoriasCtrl'
        }
      }
    })
    .state('app.inicio', {
      url: '/inicio',
      views: {
        'menuContent': {
          templateUrl: 'templates/inicio.html',
           controller: 'inicioCtrl'
        }
      }
    })
    .state('app.carro', {
      url: '/carro',
      views: {
        'menuContent': {
          templateUrl: 'templates/carro.html',
          controller: 'carroCtrl'
        }
      }
    })
      .state('app.portatiles', {
      url: '/portatiles',
      views: {
        'menuContent': {
          templateUrl: 'templates/portatiles.html',
          controller: 'portatilesCtrl'
        }
      }
    })
    .state('app.perifericos', {
      url: '/perifericos',
      views: {
        'menuContent': {
          templateUrl: 'templates/perifericos.html',
          controller: 'perifericosCtrl'
        }
      }
    })
    .state('app.sobremesa', {
      url: '/sobremesa',
      views: {
        'menuContent': {
          templateUrl: 'templates/sobremesa.html',
          controller: 'sobremesaCtrl'
        }
      }
    })
    .state('app.todoEnUno', {
      url: '/todoEnUno',
      views: {
        'menuContent': {
          templateUrl: 'templates/todoEnUno.html',
          controller: 'todoEnUnoCtrl'
        }
      }
    })

     .state('app.nuevo', {
      url: '/nuevo',
      views: {
        'menuContent': {
          templateUrl: 'templates/nuevo.html',
          controller: 'nuevoCtrl'
        }
      }
    })

       .state('app.destacados', {
      url: '/destacados',
      views: {
        'menuContent': {
          templateUrl: 'templates/destacados.html',
          controller: 'destacadosCtrl'
        }
      }
    })


  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
