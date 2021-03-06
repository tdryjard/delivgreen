const Admin = require('../models/admin.model');

exports.announceFindAll = (request, response) => {
  Admin.announceFindAll((err, result) => {
    if (err.message) {
      return response.status(err.status).send(err);
    }
    return response.status(200).send(result);
  });
};

exports.deleteAnnounce = (request, response) => {
  const { announceId } = request.params;
  Admin.deleteAnnounce(announceId, (err, result) => {
    if (err.message) {
      return response.status(err.status).send(err);
    }
    return response.status(200).send(result);
  });
};
