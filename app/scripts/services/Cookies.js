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
     }).result.then(function (results) {
       $cookies.put('blocChatCurrentUser', results);
       console.log(results);
     })
   }
   console.log(currentUser);
 }

 angular
   .module('blocChat')
   .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
