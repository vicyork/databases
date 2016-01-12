var models = require('../models');
var bluebird = require('bluebird');
var request = require("request");

module.exports = {
  messages: {
    get: function(req, res){
      models.messages.get(function(data){
        res.json(data);
        console.log('this is a log')
      });
    }, // a function which handles a get request for all messages
    post: function(req, res){
      //req.on('data', function(message){
      //  models.messages.post(message, function(result){
      //    res.writeHead(201, {"Content-Type": "application/json"});
      //    res.end("post request ok");
      //  })
      //});
      var message = [{
        text: req.body.text,
        roomname: req.body.roomname,
        username: req.body.username
      }];
      models.messages.post(message, function(result){
        res.end("cool got it.")
      })
    } // a function which handles posting a message to the database
  },

  users: {
    get: function(req, res){
      models.users.get(function(users){
        res.json(users);
      });
    },
    post: function(req, res){
      //req.on('data', function(user){
      //  models.users.post(user, function(result){
      //    res.writeHead(201, {"Content-Type": "application/json"});
      //    res.end("post request ok");
      //  });
      //});
      var message = [{
        username: req.body.username
      }];
      models.users.post(message, function(result){
        res.end("cool got it.")
      })
    }
  }
};

// module.exports.messages.get(req,res);


// request({
//   method: "POST",
//   uri: "http://127.0.0.1:3000/classes/users",
//   json: { username: "Valjean" }
// });

// request.post('http://127.0.0.1:3000/classes/users',
// {form:{username:'Valjean'}})
