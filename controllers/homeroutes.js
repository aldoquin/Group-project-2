const router = require("express").Router();
const RegisterUser = require('../models/devInfo')
const createUser = require('../models/createUser')
const checkAuth = async(req,res,next) => {
  if(req.session.logged_in){
    const user = await createUser.findByPk(req.session.user_id,{
      attributes:{
        exclude :['password']
      }
    });
    req.user = user.get({plain:true});

    return next();
    
  }
  req.createUser =null;
  return next()
}
  

router.get('/',checkAuth, async (req, res) => {
  try {
    const projectData = await RegisterUser.findAll()
    const updatedUserData = projectData.map(RegisterUser => RegisterUser.get({
      plain: true
    }))
    console.log('user',req.user);
    console.log(updatedUserData);

    res.render('projects', { updatedUserData })
  } catch (error) {
    console.log(error);
    res.status(500).send("there was an error")

  }

  router.get('/homepage/:id', async (req, res) => {
    try {
      const dbInfo = await RegisterUser.findByPk(req.params.id )
       const User = dbInfo.get({ plain: true });
       res.render('homepage',{User})
      console.log(dbInfo);   
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

  router.get('/login', (req, res) => {
    res.render('login');
  })
})
router.post('/homepage/comments/:id',(req,res) =>{

})



module.exports = router;