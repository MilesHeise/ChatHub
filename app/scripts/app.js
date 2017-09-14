(function() {
  function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }

     angular
         .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config);
 })();

 (function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/userModal.html',
          controller: 'UserInstanceCtrl as UserInstance'
      }).result.then(function (results) {
        $cookies.put('blocChatCurrentUser', results);
        console.log(results);
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
