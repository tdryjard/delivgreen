const bcrypt = require('bcrypt');
const Login = require('../models/login.model');
const regexValidity = require('../middlewares/formValidity/regexValidity');

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

  return Login.connect(email, (err, data) => {
    if (err) {
      return response.status(err.status).send({
        alert: {
          type: 'error',
          text: 'Email ou mot de passe invalide'
        },
        status: err.status,
        type: 'LOGIN'
      });
    }
    const good = bcrypt.compareSync(password, data.password);
    console.log(good);
    return response.status(200).send({
      alert: {
        type: 'success',
        text: 'Connecté'
      },
      status: 200,
      user: data
    });
  });
};
