(function() {
    function HomeCtrl(Room) {
      this.roomList = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
