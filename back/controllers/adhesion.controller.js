const { DeliveryMan, Professional, User } = require('../models/adhesion.model');

// Create a new adhesion
exports.createNewDeliveryMan = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  // Create a adhesion
  const deliveryMan = new DeliveryMan({
    is_pro: request.body.is_pro,
    rib: request.body.rib ? request.body.rib : null,
    accepted: request.body.accepted
  });

  return DeliveryMan.createNewDeliveryMan(deliveryMan, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the adhesion.'
      });
    }
    return response.status(201).send(data);
  });
};

exports.createNewProfessional = (request, response) => {
  const professional = new Professional({
    kbis: request.body.kbis || null,
    siret: request.body.siret ? request.body.siret : null,
    tva: request.body.tva ? request.body.tva : null
  });

  return professional.createNewProfessional(professional, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the adhesion.'
      });
    }

    return response.status(201).send(data);
  });
};

exports.updateUserAdhesion = (request, response) => {
  User.updateUserAdhesion(request.params.userId, (error, data) => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found user with id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `Error updating user with id ${request.params.userId}`
        });
      }
    }
    return response.status(201).send(data);
  });
};
