var express = require('express');
var router = express.Router();
const imageCtrl = require('../controllers/image');

router.get('/', imageCtrl.getImages);
router.get('/:imageId', imageCtrl.getImageById);
router.post('/', imageCtrl.createImage);
router.patch('/:imageId', imageCtrl.updateImage);
router.post('/:imageId/like', imageCtrl.likeImage);
router.post('/:imageId/unlike', imageCtrl.unlikeImage);
router.delete('/:imageId', imageCtrl.deleteImage);

module.exports = router;
