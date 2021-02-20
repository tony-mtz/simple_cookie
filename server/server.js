const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
// const userRouter = require('./router/userRouter')
const userController = require('./controller/userController');
const app = express();

/**
 * parse request body
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

/**
 * handle static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

app.post('/login', 
  userController.login,
  userController.setUidCookie,
  (req, res) => {
    res.status(200).redirect('../restricted.html')
  });

app.post('/signup', 
  userController.signup,
  (req, res) => {
    res.status(200).redirect('../restricted.html')
});

app.post('/logout', (req, res)=>{
  res.clearCookie('uid')
  return res.status(200).redirect('../index.html')
});

app.post('/getName',
  userController.getName,
  (req, res) => {
    console.log('in getName')
    const {name}  = res.locals
    console.log('in getName', name)
    return res.send({'name':name});
  })


const PORT = 3000;
app.listen(PORT, console.log("listening on port: ", PORT));