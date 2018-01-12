(function() {
  function HomeCtrl(Room, Message, $cookies, $window) {
    this.roomList = Room.all;
    this.currentRoomId = '';
    this.userName = $cookies.get('blocChatCurrentUser');
    this.currentRoomName = "Welcome " + this.userName;
    var self = this;

    this.logOut = function() {
      $cookies.put('blocChatCurrentUser', '');
      $window.location.reload();
    }

    this.setRoom = function({$id, room}) {
      self.currentRoomId = $id;
      self.currentRoomName = room;
      self.messageList = Message.getByRoomId($id);
      this.model = '';
      $('input').focus();
    }

    this.create = function(model) {
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
    // improvement: when there are a lot of messages it should scroll to show new message
    // rather than you having to scroll down to see what you just posted. perhaps add
    // a jquery scroll animate, or a focus command for last child?

    this.deleteMessage = Message.delete;

    this.deleteRoom = function(room) {
      if (confirm("Are you sure you want to delete this room?\nIt cannot be undone.") == true) {
        if (self.currentRoomId == room) {
          self.currentRoomName = "Welcome " + this.userName;
          self.currentRoomId = '';
          self.messageList = null;
        }
        Message.roomDelete(room);
        Room.delete(room);
      }
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$window', HomeCtrl]);
})();
