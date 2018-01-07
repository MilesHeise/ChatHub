(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomID) {
      return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
    };

    Message.send = function(newMessage) {
      messages.$add(newMessage);
    };

    Message.delete = function(message) {
      deletedItem = ref.child(message);
      deletedItem.remove();
    }

    // not functioning yet:
    // Message.roomDelete = function(room) {
    //   deadLetters = ref.orderByChild('roomID').equalTo(room);
    //   deadLetters.remove();
    // }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();