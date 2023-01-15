const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.getAll);

router.put('/:id', contactsController.getAll);

router.delete('/:id', contactsController.getAll);


module.exports = router;