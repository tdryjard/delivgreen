const db = require('./database');

const Adhesion = function adhesionObject(adhesion) {
  this.lastname = adhesion.lastname;
  this.firstname = adhesion.firstname;
  this.email = adhesion.email_id;
  this.phone = adhesion.phone_id;
  this.city = adhesion.city_id;
  this.rib = adhesion.rib_id;
  this.perimeter = adhesion.perimeter_id;
  this.siret = adhesion.siret_id;
  this.tva = adhesion.tva_id;
  this.kbis = adhesion.kbi_id;
};

Adhesion.createNewAdhesion = (newAdhesion, result) => {
  db.query('INSERT INTO adhesion SET ?', newAdhesion, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, { id: dbResult.insertId, ...newAdhesion });
  });
};

module.exports = Adhesion;
