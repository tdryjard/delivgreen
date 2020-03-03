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

Admin.deliveryManFindAll = result => {
  db.query(
    `SELECT u.id AS user_id, u.*, pro.*, pro.id AS professional_id, dm.*
    FROM users AS u 
    JOIN delivery_man AS dm ON u.delivery_man_id=dm.id
    LEFT JOIN professional AS pro ON u.professional_id=pro.id`,
    (err, dbResult) => {
      if (err) return result({ message: err.message, status: 500 });

      if (!dbResult.length)
        return result({ message: 'Aucune adhésion', status: 404 }, null);

      return result(null, { data: dbResult });
    }
  );
};

Admin.professionalFindAll = result => {
  db.query(
    `SELECT pro.*, pro.id AS professional_id
    FROM users AS u 
    JOIN delivery_man AS dm ON u.delivery_man_id=dm.id 
    JOIN professional AS pro ON u.professional_id=pro.id WHERE dm.is_pro=1`,
    (err, dbResult) => {
      return result(null, dbResult);
    }
  );
};

module.exports = Admin;
