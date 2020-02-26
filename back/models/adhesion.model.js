const db = require('./database');

const Professional = function professionalObject(professional) {
  this.id = professional.id;
  this.kbis = professional.kbis_id;
  this.siret = professional.siret_id;
  this.tva = professional.tva_id;
};

const DeliveryMan = function deliveryManObject(deliveryMan) {
  this.id = deliveryMan.id;
  this.is_pro = deliveryMan.is_pro_id;
  this.rib = deliveryMan.rib_id;
  this.accepted = deliveryMan.accepted_id;
};

const User = function takeUser(user) {
  this.delivery_man_id = user.delivery_man_id;
  this.professionnal_id = user.professionnal_id;
};

db.beginTransaction(function transaction(err) {
  if (err) {
    throw err;
  }

  let deliveryManId = 0;
  let professionnalId = null;

  DeliveryMan.createNewDeliveryMan = (deliveryMan, result) => {
    db.query(
      'INSERT INTO delivery_man SET ?',
      deliveryMan,
      (error, dbResult) => {
        if (error) {
          return db.rollback(function rollback() {
            throw error;
          });
        }
        deliveryManId = dbResult.insertId;
        return result(null, { id: dbResult.insertId, ...deliveryMan });
      }
    );
  };

  Professional.createNewProfessionnal = (professionnal, result) => {
    db.query(
      'INSERT INTO professionnal SET ?',
      professionnal,
      (error, dbResult) => {
        if (error) {
          return db.rollback(function rollback() {
            throw error;
          });
        }
        professionnalId = dbResult.insertId;
        return result(null, { id: dbResult.insertId, ...professionnal });
      }
    );
  };

  User.updateUserAdhesion = (userId, user, result) => {
    db.query(
      `UPDATE users set delivery_man_id = ${deliveryManId}, professionnal_id = ${professionnalId} where id = ?`,
      userId,
      (error, dbResult) => {
        if (error) {
          return db.rollback(function rollback() {
            throw error;
          });
        }
        return result(null, { id: dbResult.insertId, ...user });
      }
    );
  };

  db.commit(function commit(error) {
    if (err) {
      return db.rollback(function rollback() {
        throw error;
      });
    }
    return console.log('success');
  });
});

module.exports = {
  DeliveryMan,
  Professional,
  User
};
