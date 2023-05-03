const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        { 
          model: User,
          // attributes: ['username', 'id'],
        },
        ],
    });
    

    const post = dbPostData.get({ plain: true });


    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      where: {
        post_id: req.params.id
      }
    })

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('post', { 
      post,
      comments,
     loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})





// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post}],
    });

    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    const user = userData.get({ plain: true });

    const posts = postData.map((post) => post.get({ plain: true }));

    


    res.render('dashboard', { 
      layout: 'dashboardHeader' ,
      user,
      posts,
      loggedIn: req.session.loggedIn, 
    });
  } catch (err) {
    res.status(500).json(err);
  }

});



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup')
})



module.exports = router;
