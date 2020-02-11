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
