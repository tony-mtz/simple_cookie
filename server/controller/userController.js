const db = require('../model/db');

userController = {};

userController.signup = (req, res, next) =>{
  console.log(req.body);
  const {email, lastName, pwd} = req.body;

  const queryStr = `insert into users (_id, lastName, email, psword) values 
                      (DEFAULT, $1, $2, $3 );`

  db.query(queryStr, [lastName, email, pwd])
    .then(queryResult =>{
      console.log(queryResult);
      next();
    })
    .catch(e=>{
      console.log('error during signup query: ', e)
    });
}

userController.login = (req, res, next)=>{
  const {email, pwd} = req.body;
  //also check password
  //this will look without even checking password
  const queryStr = `select * from users where email=$1`;

  db.query(queryStr, [email])
    .then(queryRes => {
      
      res.locals.uid = queryRes.rows[0]._id;
      next();
    })
    .catch(e=>{
      console.log('error during login query: ', e)
    });
}

userController.setUidCookie = (req, res, next) => {
  if(!res.locals.uid){
    console.log('not logged in!')
    return res.redirect('/login')
  }
  res.cookie('uid', res.locals.uid, { httpOnly: true })
  res.cookie('what', "what", { httpOnly: true })
  next();
}

userController.logout = (req, res, next) => {
  res.clearCookie('uid')
  return res.redirect('/login');
}

userController.getName = (req, res, next) => {
  console.log('in controller getName')
  const queryStr = `select * from users where _id = $1;`
  console.log('cookie uid', req.cookies.uid)
  db.query(queryStr, [req.cookies.uid])
    .then(queryRes => {
      // console.log('query res: ', queryRes)
      //results are all lowercase!!!!!!!!!!
      res.locals.name = queryRes.rows[0].lastname;

      console.log('res locs name: ', res.locals.name )
      next()
    })
    .catch(e=>{
    console.log('error during login query: ', e)
    });
}
module.exports = userController;