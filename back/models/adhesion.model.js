const db = require('./database');

const Adhesion = function adhesionObject(adhesion) {
  this.nom = adhesion.nom_id;
  this.prenom = adhesion.prenom_id;
  this.email = adhesion.email_id;
  this.telephone = adhesion.telephone_id;
  this.ville = adhesion.ville_id;
  this.RIB = adhesion.RIB_id;
  this.perimetre = adhesion.perimetre_id;
  this.siret = adhesion.siret_id;
  this.TVA = adhesion.TVA_id;
  this.kbis = adhesion.kbi_id;
  this.pieceID = adhesion.piece_id;
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
