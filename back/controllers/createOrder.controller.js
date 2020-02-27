const { Address, Orders } = require('../models/createOrder.model');

exports.createAddressStart = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const addressStart = new Address({
    name: request.body.nameStart,
    lat: request.body.latStart,
    lng: request.body.lngStart
  });

  return Address.createAddressStart(addressStart, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Order.'
      });
    }
    return response.status(201).send(data);
  });
};

exports.createAddressEnd = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  const addressEnd = new Address({
    name: request.body.nameEnd,
    lat: request.body.latEnd,
    lng: request.body.lngEnd
  });

  return Address.createAddressEnd(addressEnd, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Order.'
      });
    }
    return response.status(201).send(data);
  });
};

exports.createOrders = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const orders = new Orders({
    lngt: request.body.lngt ? request.body.lngt : null,
    height: request.body.height || null,
    weight: request.body.weight ? request.body.weight : null,
    limit_date: request.body.limit_date ? request.body.limit_date : null,
    price: request.body.price ? request.body.price : null,
    publish_date: request.body.publish_date ? request.body.publish_date : null,
    user_id: request.body.user_id ? request.body.user_id : null,
    status_id: request.body.status_id ? request.body.status_id : null
  });

  // Save Order in the database
  return Orders.createOrders(orders, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Order.'
      });
    }
    return response.status(201).send(data);
  });
};
