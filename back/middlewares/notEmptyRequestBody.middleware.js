// "Middleware" crée par Alexis pour tester si le BODY de la requête n'est pas vide avec un message personnalisé
exports.requestBodyNotEmpty = (request, response, next) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  return next();
};
