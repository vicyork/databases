var db = require('../db');
// var controller = require('../controllers');

// sets up the query between the DB and the module methods
var queryDB = function(query, callback){
  // establishes a connection
  //db.connection.connect();
  // checks the DB for the query
  db.connection.query(query, function(err, queryData, fields){
    // if it's here...
    if(!err){
      // let it bubble up by way of jthe callback
      callback(queryData);
    } else {
      // if not, log error
      throw err;
    }
  });
  // end connection for the session
  //db.connection.end();
};

// the communication methods that are called on the DB
module.exports = {
  // messages communication G/P
  messages: {
    get: function(callback){
      //working but need to change it to get right data they we need.
      //id, text, username, roomname
      // var query = 'SELECT messages.message, users.username FROM messages INNER JOIN users ON messages.user_id = users.id'
      var query = 'SELECT * FROM messages';
      queryDB(query, function(queryData){
        callback(queryData);
      });
    }, // a function which produces all the messages
    post: function(message, callback){ // a function which can be used to insert a message into the database
      //message = message, room_id, user_id
      var query = 'INSERT INTO messages SET ?';
      //db.connection.connect();
      db.connection.query(query, message, function(err, result){
        if(!err){
          callback(result);
        } else {
          throw err;
        }
      });
    }
  },
  users: {
    // Ditto as above.
    get: function(callback){
      queryDB("SELECT * FROM users", function(queryData){
        // console.log(queryData); //[{username: 'peter'},{...}]
        callback(queryData);
      });
    },
    post: function(username, callback){
      var query = 'INSERT into users (username) VALUES ("' + username + '")';
      queryDB(query, function(result){
        callback("user is added");
      })
    }
  }
};
//---------- test
// module.exports.messages.get(function(result){
//   console.log(result);
// });

//var message = {
//    message: "In mercy's name, three days is all I need.",
//    username: 'Valjean',
//    roomname: 'Hello'
//};

//module.exports.messages.post(message, function(result){
//  console.log(result);
//});

// module.exports.users.get(function(result){
//   console.log(result);
// });

// module.exports.users.post('Vic park', function(result){
//   console.log(result);
// });




