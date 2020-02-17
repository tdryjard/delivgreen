const Orders = require('../models/orders.model');

exports.findOrders = function findAllOrders(request, response) {
  Orders.findOrders((error, dbResult) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'error controller orders'
      });
    }
    return response.send(dbResult);
  });
  return 0;
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
    return response.send(data);
  });
};
