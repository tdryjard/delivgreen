const bcrypt = require('bcrypt');
const User = require('../models/users.model.js');
const verifyPassword = require('../middlewares/formValidity/verifyPassword');
const noEmptyInputs = require('../middlewares/formValidity/noEmptyInputs');
const verifyPhoneNumber = require('../middlewares/formValidity/verifyPhoneNumber');
const regexValidity = require('../middlewares/formValidity/regexValidity');

// Creer un nouvel utilisateur
exports.create = function createUser(request, response) {
  const {
    lastname,
    firstname,
    email,
    password,
    passwordVerification,
    phone,
    role
  } = request.body;

  // Creer un utilisateur
  const user = new User({
    lastname: lastname || null,
    firstname: firstname || null,
    email: email || null,
    password: password || null,
    phone: phone || null,
    role: role || null
  });

  // Verification qu'aucune entrée obligatoire n'est vide
  const emptyInputsErrorHandler = noEmptyInputs(user);
  if (emptyInputsErrorHandler) {
    return response.status(400).send(emptyInputsErrorHandler);
  }

  // Verification que des entrées n'ont que des lettres
  const onlyLetters = new RegExp('^[A-Za-z]+$');
  const invalidCharactersErrorHandler = regexValidity(
    { lastname, firstname },
    onlyLetters
  );
  if (invalidCharactersErrorHandler) {
    return response.status(400).send(invalidCharactersErrorHandler);
  }

  // Verification que des entrées n'ont que des lettres
  const emailRegex = new RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );
  const emailCharactersErrorHandler = regexValidity({ email }, emailRegex);
  if (emailCharactersErrorHandler) {
    return response.status(400).send(emailCharactersErrorHandler);
  }

  // Verification que le numéro de téléphone soit correctement écrit
  const phoneErrorHandler = verifyPhoneNumber(phone, 9);
  if (phoneErrorHandler) {
    return response.status(400).send(phoneErrorHandler);
  }

  // Verification mot de passe
  const passwordErrorHandler = verifyPassword(password, 8, 12);
  if (passwordErrorHandler) {
    return response.status(400).send(passwordErrorHandler);
  }

  // Entrée de vérification du mot de passe
  if (passwordVerification !== password) {
    return response.status(400).send({
      type: 'INPUT',
      inputs: ['password_verification'],
      alert: {
        type: 'error',
        text: 'Mot de passe non identique'
      }
    });
  }

  // Encryptage du mot de passe
  user.password = bcrypt.hashSync(user.password, 10);

  // Enregistre un utilisateur
  return User.create(user, (error, data) => {
    if (error) {
      return response.status(500).send({
        message: error.message || 'Some error occurred while creating the user.'
      });
    }
    // Envoi de la réponse en status 201 soit (Created)
    return response.status(201).send({
      alert: {
        type: 'success',
        text: 'Vous êtes inscrit.'
      },
      data
    });
  });
};

// Récuperez tout les utilisateurs
exports.findAll = (request, response) => {
  User.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving users.'
      });
    }
    // Envoi de la réponse
    return response.status(200).send(data);
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
    }
    // Envoi de la réponse
    return response.status(200).send(dbResult);
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
    }

    return response.status(200).send(data);
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
    }

    return response.send({ message: `user was deleted successfully!` });
  });
};

exports.findPartInfo = (request, response) => {
  User.findPartInfo(request.params.userId, (error, dbResult) => {
    if (error) {
      console.log(error);
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Pas d'info user id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `pas trouvé url user id ${request.params.userId}`
        });
      }
    } else {
      response.send(dbResult);
    }
  });
};

exports.findDeliverInfo = (request, response) => {
  User.findDeliverInfo(request.params.userId, (error, dbResult) => {
    if (error) {
      console.log(error);
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Pas d'info user id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `pas trouvé url user id ${request.params.userId}`
        });
      }
    } else {
      response.send(dbResult);
    }
  });
};

exports.findProfessionalInfo = (request, response) => {
  User.findProfessionalInfo(request.params.userId, (error, dbResult) => {
    if (error) {
      console.log(error);
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Pas d'info user id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `pas trouvé url user id ${request.params.userId}`
        });
      }
    } else {
      response.send(dbResult);
    }
  });
};
