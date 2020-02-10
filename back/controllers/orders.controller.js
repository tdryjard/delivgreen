const Orders = require('../models/orders.model');

exports.findOrders = (request, response) => {
  Orders.findOrders((error, dbResult) => {
    if (error) {
      console.log(error);
      response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving students.'
      });
    } else {
      response.send(dbResult);
    }
  });
};
