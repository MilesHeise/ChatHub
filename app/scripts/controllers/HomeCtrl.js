(function() {
    function HomeCtrl(Room, Message) {
      this.roomList = Room.all;
      this.currentRoomId = 0;
      this.currentRoomName = "Welcome";

      this.setRoom = function (roomID, roomName) {
        this.currentRoomId = roomID;
        this.currentRoomName = roomName;
      }

      this.messageList = Message.getByRoomId(this.currentRoomId);

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
