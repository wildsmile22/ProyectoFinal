angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http,$ionicLoading, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/singUp.html', {
      scope: $scope
    }).then(function (modal2) {
      $scope.modal2 = modal2;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Triggered in the login modal to close it
    $scope.closeSingUp = function () {
      $scope.modal2.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };
    // Open the login modal
    $scope.singUp = function () {
      $scope.modal2.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
    $scope.data = {};
    $scope.SingUpData = function () {
      var link = 'http://localHost/phptiendapc/singUp.php';
      if (($scope.data.email != null && $scope.data.email != "") && ($scope.data.username != null && $scope.data.username != "") &&
        ($scope.data.password != null && $scope.data.password != "") && ($scope.data.password2 != null && $scope.data.password2 != "")) {
        if ($scope.data.password == $scope.data.password2) {

          $http.post(link, { "username": $scope.data.username, "password": $scope.data.password, "email": $scope.data.email }).then(function (res) {
            $scope.response = res.data;
           $scope.closeSingUp();
          });
 
        }
      }
    }
    $scope.data = {}
    $scope.logInData = function () {
      var link2 = 'http://localHost/phptiendapc/logIn.php';
      $http.post(link2, {"email": $scope.data.email, "password": $scope.data.password}).then(function(res){
                $scope.response2 = res.data;
      });
     

       
                 
                  if($scope.response2 != 1){
                  alert("mal");
                }else{
                  $scope.closeLogin();
                }
            
    };






  })



  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('carroCtrl', function ($scope, $stateParams) {
  })

  .controller('categoriasCtrl', function ($state, $scope) {
    $scope.irAPortatiles = function () { $state.go('app.portatiles'); }
    $scope.irAPerifericos = function () { $state.go('app.perifericos'); }
    $scope.irASobremesa = function () { $state.go('app.sobremesa'); }
    $scope.irATodoEnUno = function () { $state.go('app.todoEnUno'); }


  })
  .controller('inicioCtrl', function ($http, $scope, $state) {

    $scope.irANuevo = function () { $state.go('app.nuevo'); }

    $scope.irADestacados = function () { $state.go('app.destacados'); }

    $http.get('http://localhost/phptiendapc/mostrarProductos.php')


      .success(function (response) { $scope.names = response.records; });

  })
  .controller('portatilesCtrl', function ($http, $scope) {

    $http.get('http://localhost/phptiendapc/mostrarPortatiles.php')
      .success(function (response) { $scope.names = response.records; });
  })

  .controller('nuevoCtrl', function ($http, $scope) {

    $http.get('http://localhost/phptiendapc/mostrarNuevo.php')
      .success(function (response) { $scope.names = response.records; });
  })

  .controller('destacadosCtrl', function ($http, $scope) {

    $http.get('http://localhost/phptiendapc/mostrarDestacados.php')
      .success(function (response) { $scope.names = response.records; });
  })

  .controller('perifericosCtrl', function ($http, $scope) {

    $http.get('http://localhost/phptiendapc/mostrarPerifericos.php')
      .success(function (response) { $scope.names = response.records; });
  })

  .controller('sobremesaCtrl', function ($http, $scope) {

    $http.get('http://localhost/phptiendapc/mostrarSobremesa.php')
      .success(function (response) { $scope.names = response.records; });
  })

  .controller('todoEnUnoCtrl', function ($http, $scope) {

    $http.get('http://localhost/phptiendapc/mostrarTodoEnUno.php')
      .success(function (response) { $scope.names = response.records; });
  })

  .controller('searchCtrl', function ($scope, $stateParams, $http) {


    $scope.data = {}
    $scope.buscarResultado = function () {

      var link = 'http://localhost/phptiendapc/enviarBusqueda.php';



      $http.post(link, { "search": $scope.data.search }).then(function (res) {
        $scope.response2 = res.data;



        $http.get('http://localhost/phptiendapc/enviarBusqueda.php')
          .success(function (response) {
          $scope.names = response.records;
          });

      });





    };


    //funcion para mostrar filtros de busqueda
    $scope.MostrarFiltroPersona = function () {
      if ($scope.showSearchFilters != true) {
        $scope.showSearchFilters = true;
      } else {
        $scope.showSearchFilters = false;
      }
    }


  })


