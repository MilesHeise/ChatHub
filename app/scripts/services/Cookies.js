(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/userModal.html',
          controller: 'UserCtrl as UserInstance',
          backdrop: 'static',
          keyboard: false
        }).result
        .then(function(results) {
          $cookies.put('blocChatCurrentUser', results);
        })
        .catch(function(reason) {
          console.log("Promise was reject because " + reason);
        })
      currentUser = $cookies.get('blocChatCurrentUser');
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();