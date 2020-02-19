const Users = require('../models/users.model');

exports.findProfessionalInfo = (request, response) => {
  Users.findProfessionalInfo(request.params.userId, (error, dbResult) => {
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
  Users.findDeliverInfo(request.params.userId, (error, dbResult) => {
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
  Users.findProfessionalInfo(request.params.userId, (error, dbResult) => {
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
