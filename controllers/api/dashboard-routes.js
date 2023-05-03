const router = require('express').Router();
const { User, Post} = require('../../models');

router.get('/createPost',  async (req, res) => {
  try {
    // // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });


    const user = userData.get({ plain: true });


    res.render('createPost', { 
      layout: 'dashboardHeader' ,
      user,
      loggedIn: req.session.loggedIn, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
 
    
});

router.post('/createPost', async (req, res) => {

    try {
      const postData = await Post.create({ ...req.body, user_id: req.session.user_id });
  
      req.session.save(() => {
        res.status(200).json(postData);
        
      });
    } catch (err) {
      res.status(400).json(err);
      console.log(req.body)
    }
  
  });

  router.get('/updatePost/:id',  async (req, res) => {
    try {
      // // Find the logged in user based on the session ID
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          { 
            model: User,
            // attributes: ['username', 'id'],
          },
          ],
      });
      
  
  
      const post = dbPostData.get({ plain: true });
  
  
      res.render('updatePost', { 
        layout: 'dashboardHeader' ,
        post,
        loggedIn: req.session.loggedIn, 
      });
    } catch (err) {
      res.status(500).json(err);
    }
   
      
  });

  router.put('/updatePost/:id', async (req, res) => {

    try {
      const PostData = await Post.update({ ...req.body }, { where: { id: req.params.id } });
  
      req.session.save(() => {
        res.status(200).json(PostData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  
  });


  
  module.exports = router;