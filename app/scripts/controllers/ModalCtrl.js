(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            modalInstance.result.then(function(results) {
              Room.add(results);
            })
        }
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})()
