const bcrypt = require('bcrypt');
const User = require('../models/users.model.js');

// Creer un nouvel utilisateur
exports.create = function createUser(request, response) {
  // Creer un utilisateur
  const user = new User({
    lastname: request.body.lastname || null,
    firstname: request.body.firstname || null,
    email: request.body.email || null,
    password: request.body.password || null,
    phone: request.body.phone || null
  });

  const emptyProperties = [];

  Object.entries(user).forEach(element => {
    const [key, value] = element;
    if (!value) emptyProperties.push(key);
  });

  if (emptyProperties.length) {
    return response.status(500).send({
      type: 'INPUT',
      inputs: emptyProperties
    });
  }

  // Encryptage du mot de passe
  user.password = bcrypt.hashSync(user.password, 10);

  // Enregistre un utilisateur
  User.create(user, (error, data) => {
    if (error) {
      return response.status(500).send({
        message: error.message || 'Some error occurred while creating the user.'
      });
    }
    return response.send(data);
  });

  return 0;
};

// Récuperez tout les utilisateurs
exports.findAll = (request, response) => {
  User.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving users.'
      });
    } else {
      response.send(data);
    }
  });
};

// Récuperer un utilisateur par son ID
exports.findById = (request, response) => {
  User.findById(request.params.userId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found user with id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `Error retrieving user with id ${request.params.userId}`
        });
      }
    } else {
      response.send(dbResult);
    }
  });
};

// Modifie un utilisateur
exports.update = (request, response) => {
  User.update(request.params.userId, new User(request.body), (error, data) => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found user with id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `Error updating user with id ${request.params.userId}`
        });
      }
    } else {
      response.send(data);
    }
  });
};

// Supprime un utilisateur
exports.delete = (request, response) => {
  User.delete(request.params.userId, error => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found user with id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `Could not delete user with id ${request.params.userId}`
        });
      }
    } else {
      response.send({ message: `user was deleted successfully!` });
    }
  });
};
