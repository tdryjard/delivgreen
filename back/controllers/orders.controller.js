const Orders = require('../models/orders.model');

exports.findOrders = (request, response) => {
  Orders.findOrders((error, dbResult) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'error controller orders'
      });
    } else {
      response.send(dbResult);
    }
  });
};

exports.findOrdersByUser = (request, response) => {
  Orders.findOrdersByUser(request.params.userId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found order with id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `Error retrieving order with id ${request.params.userId}`
        });
      }
    } else {
      response.send(dbResult);
    }
  });
  
exports.updateOrder = (request, response) => {
  if (!request.body) {
    response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  Orders.updateOrder(
    request.params.orderId,
    request.body.delivery_man_id,
    (error, data) => {
      if (error) {
        if (error.kind === 'not_found') {
          response.status(404).send({
            message: `pas d'ordre à numéro ${request.params.orderId}.`
          });
        } else {
          response.status(500).send({
            message: `nous ne pouvons pas vous attribuer l'ordre n° ${request.params.orderId}`
          });
        }
      } else {
        response.send(data);
      }
    }
  );
};
