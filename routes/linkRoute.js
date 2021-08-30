const express = require('express');
const router = express.Router()
const linkController = require('../controllers/linkController');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', linkController.allLinks);
router.get('/addlink', (req, res) => res.render('index', {error: false, body: {}}));
router.get('/:title', linkController.redirect);
router.get('/editlink/:id', linkController.loadLink);

router.post('/', express.urlencoded({extended: true}), linkController.addLink);
router.post('/edit/:id', express.urlencoded({extended: true}), linkController.editLink);


router.delete('/:id', linkController.deleteLink);
router.delete('/', express.urlencoded({extended: true}), linkController.deleteLink);


// router.get('/api/links', linkController.getAllLinks);
// router.get('/api/links/:id', linkController.getOneLink);
// router.post('/api/links', linkController.saveLink);
// router.put('/api/links/:id', linkController.updateLink);
// router.delete('/api/links/:id', linkController.deleteLink);


module.exports = router


