const router = require('express').Router();
const admin = require('../controllers/admin.controller');

router.get('/announces', admin.announceFindAll);

router.delete('/announces/:announceId', admin.deleteAnnounce);

// router.get('/adhesions', admin.adhesionFindAll);

// router.get('/delivery-man', admin.deliveryManfindAll),
module.exports = router;
