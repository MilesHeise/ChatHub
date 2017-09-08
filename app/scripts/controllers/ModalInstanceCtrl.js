(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.dismiss('dismiss')
        }
        this.addNew = function(model) {
            $uibModalInstance.close(model);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()
