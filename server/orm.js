var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', ''); //use chat databse, root
                                             // userid, password

//create schema.
var User = orm.define('User', {
  username: Sequelize.STRING
  //no id required.
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

//define relationships. should bi-directional.
User.hasMany(Message);
Message.belongTo(User);

//sync database with schema.
User.sync();
Message.sync();

//export object as module.
exports.User = User;
exports.Message = Message;


//in another file.
///basic pattern - in model.js.
module.exports = {
  messages: {
    get: function(req, res){
      Message.findAll({include: [User]}) //'include' by default LEFT OUTER JOIN
                                         // with User
        .complete(function(err, result){
          res.json(result);
        });
    },
    post: function(req, res){
      User.findOrCreate({username: req.body[username]}).complete(function(err, result){
        result.id;
        var message = {
          text: req.body.text,
          username: req.body.username,
          roomname: req.body.roomname
        };
        Message.create(message).complete(function(err, result){
          res.sendStatus(201);
        });
      })
    }
  },

  users: {
    get: function(req, res){
      User.findAll().complete(function(err, result){
        res.json(results);
      });
    },
    post: function(req, res){
      User.create({username: req.body[username]}).complete(function(err, user){
        res.sendStatus(201);
      });
    }
  }
};
