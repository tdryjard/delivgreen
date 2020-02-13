const fs = require('fs');
const Signature = require('../models/signature_model.js');

const filepath = './images/signatures';

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  console.log(request.body);
  const base64Data = request.body.image.split('data:image/png;base64,')[1];
  fs.writeFile(`${filepath}/signatureClient.png`, base64Data, 'base64', err =>
    console.log(err)
  );

  // Create a product
  const signature = new Signature({
    name: request.body.name || null
  });

  // Save signature in database
  return Signature.create(signature, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Signature.'
      });
    }
    return response.send(data);
  });
};

// Get all products
exports.findAll = (request, response) => {
  Signature.findAll((error, dbResult) => {
    if (error) {
      response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving signatures.'
      });
    } else {
      response.send(dbResult);
    }
  });
};
