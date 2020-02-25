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
    `SELECT orders.lngt, orders.id, orders.height, orders.weight, orders.publish_date, orders.limit_date, orders.price,
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

Orders.findOrdersByUser = (userId, result) => {
  db.query(
    `SELECT orders.lngt, orders.id, orders.height, orders.weight, orders.publish_date, orders.limit_date, orders.price, status.name AS status_name,
              orders.start_address_id, start.name AS start_address_name, start.lat AS start_address_lat, start.lng AS start_address_lng,
              orders.end_address_id, end.name AS end_address_name, end.lat AS end_address_lat, end.lng AS end_address_lng
              FROM orders
              JOIN status as status ON status.id = orders.status_id
              JOIN address AS start ON orders.start_address_id = start.id
              JOIN address AS end ON orders.end_address_id = end.id
              WHERE orders.user_id = ?`,
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

Orders.updateOrder = (userId, orders, result) => {
  db.query(
    `UPDATE orders SET delivery_man_id = ? WHERE id = ?`,
    [userId, orders],
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      if (dbResult.affectedRows) {
        return result(null, { orders });
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Orders;
