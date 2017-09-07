(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened')
            modalInstance.result.then(Room.add(modalInstance.result))
        }
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})()
