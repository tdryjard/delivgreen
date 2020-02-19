const db = require('./database');

const Users = function(users) {
  this.firstname = users.firstname;
  this.lastname = users.lastname;
  this.phone = users.phone;
  this.email = users.email;
};
/*
if(user is delivery)
  if(user.role=== deliverypart ou user.role===deliverypro
    deliveryman
    if user.role===deliverypro
else
    user.role === part



*/

Users.findPartInfo = (userId, result) => {
  db.query(
    `SELECT users.lastname, users.firstname, users.email, users.phone
      FROM users
      where users.id = ?`,
    userId,
    (error, dbResult) => {
      if (dbResult.length) {
        return result(null, dbResult);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

Users.findDeliverInfo = (userId, result) => {
  db.query(
    `SELECT users.lastname, users.firstname, users.email, users.phone, users.delivery_man_id,
      delivery_man.id, delivery_man.address, delivery_man.perimeter, delivery_man.is_pro, delivery_man.rib
      FROM users
      JOIN delivery_man ON delivery_man.id = users.delivery_man_id
      where users.id = ?`,
    userId,
    (error, dbResult) => {
      if (dbResult.length) {
        return result(null, dbResult);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

Users.findProfessionalInfo = (userId, result) => {
  db.query(
    `SELECT users.lastname, users.firstname, users.email, users.phone, users.professional_id, users.delivery_man_id,
      professional.id, professional.kbis, professional.siret, professional.tva,
      delivery_man.id, delivery_man.address, delivery_man.perimeter, delivery_man.is_pro, delivery_man.rib
      FROM users
      JOIN delivery_man ON delivery_man.id = users.delivery_man_id
      JOIN professional ON professional.id = users.professional_id
      where users.id = ?`,
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
