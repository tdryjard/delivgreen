const router = require('express').Router();
const admin = require('../controllers/admin.controller');

router.get('/announces', admin.announceFindAll);

router.delete('/announces/:announceId', admin.deleteAnnounce);

module.exports = router;
