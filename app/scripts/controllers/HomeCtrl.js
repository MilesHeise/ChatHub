(function() {
    function HomeCtrl(Room, Message) {
      this.roomList = Room.all;
      this.messageList = Message.current;
      this.setRoom = function (roomID) {
        //incomplete I need to query room by id then get name
        //or wait maybe I don't need any id for this, just set name
        //and all id stuff happens directly to messages?
        this.currentRoom = roomID;
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
