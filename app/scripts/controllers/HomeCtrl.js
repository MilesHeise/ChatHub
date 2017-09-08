(function() {
    function HomeCtrl(Room) {
      this.roomList = Room.all;
      console.log(this.roomList);
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
