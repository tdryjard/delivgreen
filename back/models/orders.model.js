const db = require('./database');

const Orders = function orderObject(orders) {
  this.lngt = orders.lngt;
  this.weight = orders.weight;
  this.limit_date = orders.limit_date;
  this.publish_date = orders.publish_date;
  this.price = orders.price;
};

Orders.findOrders = result => {
  db.query(
    `SELECT orders.lngt, orders.id, orders.weight, orders.publish_date, orders.limit_date, orders.price,
              orders.start_address_id, start.name AS start_address_name, start.lat AS start_address_lat, start.lng AS start_address_lng,
              orders.end_address_id, end.name AS end_address_name, end.lat AS end_address_lat, end.lng AS end_address_lng
              FROM orders
              JOIN address AS start ON orders.start_address_id = start.id
              JOIN address AS end ON orders.end_address_id = end.id
              WHERE orders.status_id = 1`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      return result(null, dbResult);
    }
  );
};

Orders.findOrdersByUser = (userId, result) => {
  db.query(
    `SELECT orders.lngt, orders.id, orders.weight, orders.publish_date, orders.limit_date, orders.price,
              orders.start_address_id, start.name AS start_address_name, start.lat AS start_address_lat, start.lng AS start_address_lng,
              orders.end_address_id, end.name AS end_address_name, end.lat AS end_address_lat, end.lng AS end_address_lng
              FROM orders
              JOIN address AS start ON orders.start_address_id = start.id
              JOIN address AS end ON orders.end_address_id = end.id
              WHERE orders.user_id = ? AND status_id = 4`,
    userId,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

Orders.updateOrder = (orderId, order, result) => {
  db.query(
    `UPDATE orders SET ? WHERE id = ?`,
    [order, orderId],
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      if (dbResult.affectedRows) {
        return result(null, { order });
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Orders;
