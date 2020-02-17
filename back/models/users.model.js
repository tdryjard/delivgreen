const db = require('./database');

const Users = function(users) {
  this.firstname = users.firstname;
  this.lastname = users.lastname;
  this.phone = users.phone;
  this.email = users.email;
};

Users.findUserInfo = (userId, result) => {
  db.query(
    'SELECT users.lastname, users.firstname, users.phone, users.email from users where id = ?',
    userId,
    (error, dbResult) => {
      if (dbResult.length) {
        return result(null, dbResult);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Users;
