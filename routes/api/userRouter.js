const express = require('express');

const router = express.Router();
const {createUser} = require('../../controllers/api/userController');

router.post('/createUser', createUser);

module.exports = router;
