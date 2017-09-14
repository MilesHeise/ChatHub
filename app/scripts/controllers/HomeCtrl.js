(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.roomList = Room.all;
      this.currentRoomId = '';
      this.userName = $cookies.get('blocChatCurrentUser');
      this.currentRoomName = "Welcome " + this.userName;
      var self = this;

//use destructuring here?
      this.setRoom = function (thing) {
        self.currentRoomId = thing.$id;
        self.currentRoomName = thing.room;
        self.messageList = Message.getByRoomId(self.currentRoomId);
        console.log(self.messageList);
      }

      this.create = function (model) {
        var d = new Date();
        var message = {
          content: model,
          roomID: self.currentRoomId,
          username: self.userName,
          sentAt: d.toUTCString(),
        };
        Message.send(message);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
