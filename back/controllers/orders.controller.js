const fs = require('fs');
const Orders = require('../models/orders.model');

const filepath = './signatures/';

exports.findOrders = (request, response) => {
  const { query } = request;
  if (query.userId) {
    return Orders.findOrdersByUser(query.userId, (error, dbResult) => {
      if (error) {
        if (error.kind === 'not_found') {
          response.status(404).send({
            message: `Not found order with id ${query.userId}.`
          });
        } else {
          response.status(500).send({
            message: `Error retrieving order with id ${query.userId}`
          });
        }
      } else {
        response.send(dbResult);
      }
    });
  }
  return Orders.findOrders((error, dbResult) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'error controller orders'
      });
    }
    return response.send(dbResult);
  });
};

// Create a new order
exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  // Create an order
  const orders = new Orders({
    address_start: request.body.address_start
      ? request.body.address_start
      : null,
    arrival_point: request.body.arrival_point
      ? request.body.arrival_point
      : null,
    lngt: request.body.lngt ? request.body.lngt : null,
    height: request.body.height || null,
    weight: request.body.weight ? request.body.weight : null,
    limit_date: request.body.limit_date ? request.body.limit_date : null,
    price: request.body.price ? request.body.price : null,
    publish_date: request.body.publish_date ? request.body.publish_date : null
  });

  // Save Order in the database
  return Orders.create(orders, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Order.'
      });
    }
    return response.status(201).send(data);
  });
};

exports.updateOrder = (request, response) => {
  const { orderId } = request.params;

  if (!request.body) {
    response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  if (Object.keys(request.body).includes('signature')) {
    const signatureFileName = `${filepath}signature_${orderId}.png`;
    const base64Data = request.body.signature.split(
      'data:image/png;base64,'
    )[1];
    fs.writeFile(signatureFileName, base64Data, 'base64', err => {
      if (err) {
        return response.status(500).send({
          message: `Impossible d'enregistrer la signature n° ${orderId}`
        });
      }
      return 0;
    });

    request.body.signature = signatureFileName;
  }

  return Orders.updateOrder(orderId, request.body, (error, data) => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `pas d'ordre à numéro ${orderId}.`
        });
      }
      return response.status(500).send({
        message: `nous ne pouvons pas vous attribuer l'ordre n° ${orderId}`
      });
    }
    return response.status(200).send(data);
  });
};
