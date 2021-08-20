const router = require ("express").Router();
const RegisterUser = require ('../models/RegisterUser')

router.get('/user',async (req,res)=>{
  try {
      const projectData = await RegisterUser.findAll()
      const updatedUserData = projectData.map(RegisterUser => RegisterUser.get({
  plain: true
}))
      console.log(updatedUserData);

    res.render('projects',{updatedUserData})
  } catch (error) {
    console.log(error);
    res.status(500).send("there was an error")
    
  }
  
})
router.get('/',(req,res) =>{
  res.render('login');
})

module.exports = router;