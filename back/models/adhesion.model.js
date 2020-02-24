const db = require('./database');

const Adhesion = function adhesionObject(adhesion) {
  this.last_name_id = adhesion.last_name_id;
  this.first_name_id = adhesion.first_name_id;
  this.mail = adhesion.mail_id;
  this.phone = adhesion.phone_id;
  this.city = adhesion.city_id;
  this.BIC = adhesion.BIC_id;
  this.perimeter = adhesion.perimeter_id;
  this.siret = adhesion.siret_id;
  this.VAT = adhesion.VAT_id;
  this.kbis = adhesion.kbi_id;
  this.identity_document = adhesion.identity_document_id;
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
