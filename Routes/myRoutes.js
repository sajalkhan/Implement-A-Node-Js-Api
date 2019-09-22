const express = require('express');
const myController = require('../Controller/myController');

const router = express.Router(); // here i add a middleware

router
.route('/')
.get(myController.readAllObject)
.post(myController.checkString, myController.createObject); 


module.exports = router; // export the router and we will import it from our main app