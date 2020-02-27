const db = require('./database');

const Professional = function professionalObject(professional) {
  this.kbis = professional.kbis;
  this.siret = professional.siret;
  this.tva = professional.tva;
};

const DeliveryMan = function deliveryManObject(deliveryMan) {
  this.is_pro = deliveryMan.is_pro;
  this.rib = deliveryMan.rib;
  this.accepted = deliveryMan.accepted;
};

const User = function takeUser(user) {
  this.delivery_man_id = user.delivery_man_id;
  this.professional_id = user.professional_id;
};

db.beginTransaction(function transaction(err) {
  if (err) {
    throw err;
  }

  let deliveryManId = 0;
  let professionalId = null;

  DeliveryMan.createNewDeliveryMan = (DeliveryManInfo, result) => {
    db.query(
      'INSERT INTO delivery_man SET ?',
      DeliveryManInfo,
      (error, dbResult) => {
        if (error) {
          return db.rollback(function rollback() {
            throw error;
          });
        }
        deliveryManId = dbResult.insertId;
        return result(null, { id: dbResult.insertId, ...DeliveryManInfo });
      }
    );
  };

  Professional.createNewProfessional = (ProfessionalInfo, result) => {
    db.query(
      'INSERT INTO professional SET ?',
      ProfessionalInfo,
      (error, dbResult) => {
        if (error) {
          return db.rollback(function rollback() {
            throw error;
          });
        }
        professionalId = dbResult.insertId;
        return result(null, { id: dbResult.insertId, ...ProfessionalInfo });
      }
    );
  };

  User.updateUserAdhesion = (userId, result) => {
    db.query(
      `UPDATE users set delivery_man_id = ${deliveryManId}, professional_id = ${professionalId} where id = ?`,
      [userId],
      (error, dbResult) => {
        if (error) {
          return result(error, null);
        }
        if (dbResult.affectedRows) {
          return result(null, { userId });
        }
        return result({ kind: 'not_found' }, null);
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
