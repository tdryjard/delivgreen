const db = require('./database');

const Orders = function(orders) {
  this.start_address_id = orders.address_start;
  this.end_address_id = orders.arrival_point;
  this.lngt = orders.lngt;
  this.height = orders.height;
  this.weight = orders.weight;
  this.limit_date = orders.limit_date;
  this.price = orders.price;
  this.publish_date = orders.publish_date;
  this.delivery_man_id = orders.delivery_man_id;
};

Orders.findOrders = result => {
  db.query(
    `SELECT orders.length, orders.id, orders.height, orders.weight, orders.publish_date, orders.limit_date, orders.price,
              orders.start_address_id, start.name AS start_address_name, start.lat AS start_address_lat, start.lng AS start_address_lng,
              orders.end_address_id, end.name AS end_address_name, end.lat AS end_address_lat, end.lng AS end_address_lng
              FROM orders
              JOIN address AS start ON orders.start_address_id = start.id
              JOIN address AS end ON orders.end_address_id = end.id`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      return result(null, dbResult);
    }
  );
};

Orders.updateOrder = (userId, orders, result) => {
  db.query(
    `UPDATE orders SET delivery_man_id = ? WHERE id = ?`,
    [userId, orders],
    (error, response) => {
      if (error) {
        return result(error, null);
      }

      if (response.affectedRows === 0) {
        return result({ kind: 'not_found' }, null);
      }

      return result(null, { id: Number(userId), ...orders });
    }
  );
};

module.exports = Orders;
