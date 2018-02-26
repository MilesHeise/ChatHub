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

      // first check if room name already exists
      ref.once('value').then(snap => {
        let keys = Object.values(snap.val());
        for (let i in keys) {
          for (let j in keys[i]) {
            if (keys[i][j] == newRoom.room) {
              return alert("This room already exists");
            }
          }
        }
      });

      rooms.$add(newRoom);
    }

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
