var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
});

// module.exports.connection.connect();

// module.exports.connection.query('SELECT * FROM messages', function(err, data, fields){
//   if(!err){
//     console.log(data);
//   } else {
//     console.log("An error happened!")
//   }
// });

// module.exports.connection.end();
