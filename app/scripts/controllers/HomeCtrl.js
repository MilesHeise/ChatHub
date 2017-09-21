(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.roomList = Room.all;
      this.currentRoomId = '';
      this.userName = $cookies.get('blocChatCurrentUser');
      this.currentRoomName = "Welcome " + this.userName;
      var self = this;

      this.setRoom = function ({$id, room}) {
        self.currentRoomId = $id;
        self.currentRoomName = room;
        self.messageList = Message.getByRoomId($id);
        this.model = '';
        $('input').focus();
      }

      this.create = function (model) {
        var d = new Date();
        var message = {
          content: model,
          roomID: self.currentRoomId,
          username: self.userName,
          sentAt: d.toLocaleString(),
        };

        Message.send(message);
        this.model = '';
      }

      this.deleteMessage = Message.delete;
      this.deleteRoom = function(room) {
        Room.delete(room);
        Message.roomDelete(room);
        if (currentRoomId == room) {
          self.currentRoomName = "Welcome " + this.userName;
          self.currentRoomId = '';
        }
      }


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
