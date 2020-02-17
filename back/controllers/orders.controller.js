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
};
