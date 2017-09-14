(function() {
    function UserCtrl($uibModalInstance) {
      this.addNew = function(model) {
            $uibModalInstance.close(model);
        }
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$uibModalInstance', UserCtrl])
})()
