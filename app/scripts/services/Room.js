(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(newRoom) {
      newRoom = {
        room: newRoom
      };
      rooms.$add(newRoom);
    }
    // improvement: room add should check to make sure room name isn't a duplicate before adding

    Room.delete = function(room) {
      deletedRoom = ref.child(room);
      deletedRoom.remove();
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();