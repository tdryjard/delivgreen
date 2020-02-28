const db = require('./database');

const Admin = function AdminObject(admin) {
  this.username = admin.username;
  this.password = admin.password;
};

Admin.announceFindAll = result => {
  let resultObject = [];

  db.query('SELECT * FROM orders', (err, dbResult) => {
    if (err) {
      return result({ message: err.message, status: 500 }, null);
    }

    if (!dbResult.length) {
      return result({ message: 'Aucune annonce', status: 404 }, null);
    }

    resultObject = dbResult;
    return 0;
  });

  db.query(
    `SELECT u.* FROM users AS u JOIN orders ON u.id=orders.user_id`,
    (err, dbResult) => {
      if (err) return result({ message: err.message, status: 500 });

      if (!dbResult.length)
        return result({ message: 'Aucune annonce', status: 404 }, null);

      const userDataList = dbResult.map(user => {
        const userData = user;
        const userId = userData.id;
        delete userData.id;
        userData.client_id = userId;
        return userData;
      });

      resultObject = resultObject.map((order, index) => ({
        ...order,
        ...userDataList[index]
      }));

      return 0;
    }
  );

  db.query(
    'SELECT start.name AS startingPoint, end.name AS endingPoint FROM address AS start JOIN orders ON orders.start_address_id=start.id JOIN address AS end ON orders.end_address_id=end.id',
    (err, dbResult) => {
      if (err) return result({ message: err.message, status: 500 }, null);

      if (!dbResult.length)
        return result({ message: 'Aucune annonce', status: 404 }, null);

      resultObject = resultObject.map((order, index) => ({
        ...order,
        ...dbResult[index]
      }));
      return result(null, { data: resultObject });
    }
  );
};

Admin.deleteAnnounce = (announceId, result) => {
  db.query('DELETE FROM orders WHERE id = ?', announceId, err => {
    if (err) return result({ message: err.message, status: 500 }, null);

    return result(null, { message: 'Annonce supprimée' });
  });
};

module.exports = Admin;
