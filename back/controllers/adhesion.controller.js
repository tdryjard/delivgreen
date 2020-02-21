const Adhesion = require('../models/adhesion.model');

// Create a new adhesion
exports.createNewAdhesion = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  // Create a adhesion
  const adhesion = new Adhesion({
    nom: request.body.nom ? request.body.nom : null,
    prenom: request.body.prenom ? request.body.prenom : null,
    email: request.body.email ? request.body.email : null,
    telephone: request.body.telephone ? request.body.telephone : null,
    ville: request.body.ville ? request.body.ville : null,
    RIB: request.body.RIB ? request.body.RIB : null,
    perimetre: request.body.perimetre ? request.body.perimetre : null,
    siret: request.body.siret ? request.body.siret : null,
    TVA: request.body.TVA ? request.body.TVA : null,
    kbis: request.body.kbis ? request.body.kbis : null,
    piece_id: request.body.piece_id ? request.body.piece_id : null
  });

  return Adhesion.createNewAdhesion(adhesion, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the adhesion.'
      });
    }

    return response.status(201).send(data);
  });
};
