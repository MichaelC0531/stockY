var express = require('express');
var router = express.Router();
const sneakersCtrl = require('../controllers/sneakers')

router.get('/', sneakersCtrl.index)
router.get('/new', sneakersCtrl.new)
router.get('/:id', sneakersCtrl.show)
router.post('/', sneakersCtrl.create)
router.put('/:id', sneakersCtrl.update)


module.exports = router;
