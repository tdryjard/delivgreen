const bcrypt = require('bcrypt');
const Login = require('../models/login.model');
const regexValidity = require('../middlewares/formValidity/regexValidity');
const clearNullProperty = require('../utils/clearNullObjectProperty');

exports.connect = function userConnectToTheWebsite(request, response) {
  const { email, password } = request.body;
  // Verification que des entrées n'ont que des lettres
  const emailRegex = new RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );
  const emailCharactersErrorHandler = regexValidity({ email }, emailRegex);
  if (emailCharactersErrorHandler) {
    return response.status(400).send(emailCharactersErrorHandler);
  }

  // Fonction créant une erreur avec status et infos variables
  const sendResponse = function responseSchemeForSending(
    status,
    { text = null, errorTarget = null, alertType, data = null, inputs = null }
  ) {
    return response.status(status).send(
      clearNullProperty({
        alert: {
          type: alertType,
          text
        },
        status,
        type: errorTarget,
        data,
        inputs
      })
    );
  };

  return Login.connect(email, (err, data) => {
    // Schéma d'erreur
    const errorScheme = {
      text: 'Email ou mot de passe incorrect',
      errorTarget: 'INPUT',
      alertType: 'error',
      inputs: ['email', 'password']
    };

    // Decryptage du mot de passe en base de données et verification d'une correspondance avec celui que l'utilisateur a rentrer
    const samePassword = bcrypt.compareSync(password, data.password);
    if (!samePassword) return sendResponse(400, errorScheme);

    if (err) {
      const { status } = err.status;
      return sendResponse(status, errorScheme);
    }

    return sendResponse(200, {
      text: 'Vous êtes connecté.',
      data,
      alertType: 'success'
    });
  });
};
