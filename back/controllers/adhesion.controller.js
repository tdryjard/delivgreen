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
    last_name: request.body.last_name ? request.body.last_name : null,
    first_name: request.body.first_name ? request.body.first_name : null,
    mail: request.body.mail ? request.body.mail : null,
    phone: request.body.phone ? request.body.phone : null,
    city: request.body.city ? request.body.city : null,
    BIC: request.body.BIC ? request.body.BIC : null,
    perimeter: request.body.perimeter ? request.body.perimeter : null,
    siret: request.body.siret ? request.body.siret : null,
    VAT: request.body.VAT ? request.body.VAT : null,
    kbis: request.body.kbis ? request.body.kbis : null,
    identity_document: request.body.identity_document
      ? request.body.identity_document
      : null
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
