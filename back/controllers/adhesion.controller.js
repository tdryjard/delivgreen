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
    lastname: request.body.lastname ? request.body.lastname : null,
    firstname: request.body.first_name ? request.body.firstname : null,
    email: request.body.mail ? request.body.email : null,
    phone: request.body.phone ? request.body.phone : null,
    city: request.body.city ? request.body.city : null,
    rib: request.body.rib ? request.body.rib : null,
    perimeter: request.body.perimeter ? request.body.perimeter : null,
    siret: request.body.siret ? request.body.siret : null,
    tva: request.body.tva ? request.body.tva : null,
    kbis: request.body.kbis ? request.body.kbis : null
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
