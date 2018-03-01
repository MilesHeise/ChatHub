(function() {
  function HomeCtrl(Room, Message, $cookies, $window, $timeout) {
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

      // improvement: add scrollDown to setRoom function as well, so it will go
      // to the bottom of a room with lots of messages. currently still thinks
      // bottomMessage is null until you click a second time, even with the
      // $timeout call . . .

      // $timeout(Message.scrollDown(), 500);

      // improvement: using the JQlite that comes with Angular to set focus on room
      // change is technically valid but not ideal. Should do it in a more Angular
      // way, but every fully Angular solution I've researched for this is complex
      // and hacky, better to have this for now and remain clear and readable.
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
      // wait for render and scroll to show new message if room is full
      $timeout(Message.scrollDown(), 100);
    }

    this.deleteMessage = Message.delete;

    this.deleteRoom = function(room) {
      if (confirm("Are you sure you want to delete this room?\nIt cannot be undone.") == true) {

        // reset to home screen if deleting the room you are currently in
        if (self.currentRoomId == room) {
          self.currentRoomName = "Welcome " + this.userName;
          self.currentRoomId = '';
          self.messageList = null;
        }

        // delete all messages associated with room before deleting room for clean database
        Message.roomDelete(room);
        Room.delete(room);
      }
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$window', '$timeout', HomeCtrl]);
})();
