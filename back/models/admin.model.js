const db = require('./database');

const Admin = function AdminObject(admin) {
  this.username = admin.username;
  this.password = admin.password;
};

Admin.announceFindAll = result => {
  db.query(
    `SELECT u.id AS user_id, u.*, start.name AS startingPoint, end.name AS endingPoint, orders.id AS order_id, orders.* 
    FROM users AS u JOIN orders ON u.id=orders.user_id 
    JOIN address AS start ON orders.start_address_id=start.id 
    JOIN address AS end ON orders.end_address_id=end.id`,
    (err, dbResult) => {
      if (err) return result({ message: err.message, status: 500 });

      if (!dbResult.length)
        return result({ message: 'Aucune annonce', status: 404 }, null);

      return result(null, { data: dbResult });
    }
  );
};

Admin.deleteAnnounce = (announceId, result) => {
  db.query('DELETE FROM orders WHERE id = ?', announceId, err => {
    if (err) return result({ message: err.message, status: 500 }, null);

    return result(null, { message: `Annonce #${announceId} supprimée` });
  });
};

module.exports = Admin;
