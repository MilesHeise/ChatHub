(function() {
  function Message($firebaseArray, $window) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomID) {
      return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
    };

    Message.send = function(newMessage) {
      messages.$add(newMessage);
    };

    Message.scrollDown = function() {
      var bottomMessage = $window.document.querySelector('.scrollable').lastElementChild;
      bottomMessage.scrollIntoView();
    };

    Message.delete = function(message) {
      deletedItem = ref.child(message);
      deletedItem.remove();
    };

    // if a room is deleted, delete all messages within that room first
    Message.roomDelete = function(room) {
      deadLetters = ref.orderByChild('roomID').equalTo(room);
      deadLetters.once('value').then(snap => {
        let keys = snap.val();
        for (let i in keys) {
          this.delete(i);
        }
      });
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$window', Message]);
})();
