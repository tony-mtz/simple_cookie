// const express = require('express');
// const router = express.Router();

// const userController = require('./controller/userController');

// /**
//  * 1) create new user in db
//  * 2) create a new cookie and set data
//  * 3) redirect to restricted
//  */
// router.post('/signup', userController.signup,
//   (req, res) => {
//     res.status(200).redirect('../restricted.html')
// });

// router.post('/login', 
//   userController.login,
//   userController.setUidCookie,
//   (req, res) => {
//     res.status(200).redirect('../restricted.html')
// });

// router.post('logout', 
//   userController.logout,
//   (req, res) => {
//     res.status(200).redirect('/login')
// });


//   module.exports = router;