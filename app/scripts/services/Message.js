(function() {
  function Message($firebaseArray) {
    var Message = {};
    //what is this for?
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        Message.current = messages.orderByChild('roomID').equalTo(roomId)
    };

    return Message;
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
