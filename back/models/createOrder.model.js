const db = require('./database');

const Address = function createAddress(address) {
  (this.name = address.name)((this.lat = address.lat))(
    (this.lng = address.lng)
  );
};

const Orders = function orderObject(orders) {
  (this.lngt = orders.lngt)((this.weight = orders.weight))(
    (this.limit_date = orders.limit_date)
  )((this.publish_date = orders.publish_date))((this.price = orders.price))(
    (this.user_id = orders.user_id)
  )((this.status_id = orders.status_id));
};

db.beginTransaction(function transaction(err) {
  if (err) {
    throw err;
  }

  let startId = 0;
  let endId = 0;

  Address.createAddressStart = (AddressStart, result) => {
    db.query('INSERT INTO address SET ?', AddressStart, (error, dbResult) => {
      if (error) {
        return db.rollback(function rollback() {
          throw error;
        });
      }
      startId = dbResult.insertId;
      return result(null, { id: dbResult.insertId, ...Address });
    });
  };

  Address.createAddressEnd = (AddressEnd, result) => {
    db.query('INSERT INTO address SET ?', AddressEnd, (error, dbResult) => {
      if (error) {
        return db.rollback(function rollback() {
          throw error;
        });
      }
      endId = dbResult.insertId;
      return result(null, { id: dbResult.insertId, ...Address });
    });
  };

  Orders.createOrders = (orders, result) => {
    db.query(
      `INSERT INTO orders SET start_address_id = ${startId}, end_address_id = ${endId}, ?`,
      orders,
      (error, dbResult) => {
        if (error) {
          return db.rollback(function rollback() {
            throw error;
          });
        }
        return result(null, { id: dbResult.insertId, ...orders });
      }
    );
  };

  db.commit(function commit(error) {
    if (err) {
      return db.rollback(function rollback() {
        throw error;
      });
    }
    return console.log('success!');
  });
});

module.exports = { Address, Orders };
