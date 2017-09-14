(function() {
    function HomeCtrl(Room, Message) {
      this.roomList = Room.all;
      this.currentRoomId = '';
      this.userName = '';
      this.currentRoomName = "Welcome "+this.userName;
      var self = this;

      //add a result function to set username

//use destructuring here?
      this.setRoom = function (thing) {
        var currentRoomId = thing.$id;
        self.currentRoomName = thing.room;
        self.messageList = Message.getByRoomId(currentRoomId);
        console.log(self.messageList);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
