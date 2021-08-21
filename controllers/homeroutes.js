const router = require("express").Router();
const RegisterUser = require('../models/devInfo')

router.get('/', async (req, res) => {
  try {
    const projectData = await RegisterUser.findAll()
    const updatedUserData = projectData.map(RegisterUser => RegisterUser.get({
      plain: true
    }))
    console.log(updatedUserData);

    res.render('projects', { updatedUserData })
  } catch (error) {
    console.log(error);
    res.status(500).send("there was an error")

  }
<<<<<<< HEAD
  router.get('/homepage/:id', (req, res) => {
    res.render('homepage');
=======
  
  router.get('/homepage/:id',async (req, res) => {
    try {
      const dbInfo = await RegisterUser.findByPk(req.params.id )
       const User = dbInfo.get({ plain: true });
       res.render('homepage',{User})
      console.log(dbInfo);   
    } catch (err) {
      console.log(err);
      res.status(500).json(err);  
    }
>>>>>>> 0d115bb57bdcfc7ea8f2b3c0e25cb85e8679c604
  })

  router.get('/login', (req, res) => {
    res.render('login');
  })
})
router.get('/',(req,res) =>{
  res.render('login');
})



module.exports = router;