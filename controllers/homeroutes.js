const router = require("express").Router();
const Developer = require('../models/Developer')
const User = require('../models/User')
const Comment = require('../models/Comment')



const checkAuth = async(req,res,next) => {
  if(req.session.logged_in){
    const user = await User.findByPk(req.session.user_id,{
      attributes:{
        exclude :['password']
      }
    });
    req.user = user.get({plain:true});
    return next();   
  }
  req.user =null;
  return next()
}
  

router.get('/',checkAuth, async (req, res) => {
  try {
    const projectData = await Developer.findAll()
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
      const dbInfo = await Developer.findByPk(req.params.id,{
        include: [
          {
            model: Comment,
          },
        ],
      } )
       const dev = dbInfo.get({ plain: true });
       console.log(dev);
       res.render('homepage',{User:dev})
      // console.log(dbInfo.id); 
      // console.log(User);  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })
  router.get('/login', (req, res) => {
    res.render('login');
  })
})
router.post('/comment',async(req,res) =>{
  console.log(req.body);
  const newComment = await Comment.create({
    comment: req.body.comment,
    user_id: 1,
    Dev_id: 1
  })
res.send(newComment)
})



module.exports = router;