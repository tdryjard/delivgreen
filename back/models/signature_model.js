const db = require('./database');

const Signature = function(signature) {
  this.name = signature.name;
};

Signature.create = (newSignature, result) => {
  db.query('INSERT INTO order SET ?', newSignature, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newSignature });
  });
};

Signature.findAll = result => {
  db.query('SELECT * FROM order', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

Signature.update = (id, signature, result) => {
  db.query(
    'UPDATE order SET name = ? WHERE id = ?',
    [signature.name, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }
      if (response.affectedRows === 0) {
        //  Not found signature with the id
        return result({ kind: 'not_found' }, null);
      }
      return result(null, { id: Number(id), ...signature });
    }
  );
};

// Delete product with ID

Signature.delete = (id, result) => {
  db.query('DELETE FROM order WHERE id = ?', id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    if (dbResult.affectedRows === 0) {
      //  not found the signature with the id
      return result({ kind: 'not found' }, null);
    }

    return result(null, dbResult);
  });
};

module.exports = Signature;
