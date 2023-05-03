const router = require('express').Router();
const {  Comment} = require('../../models');


  router.post('/:id', async (req, res) => {
    try {
      const commentData = await Comment.create({ 
         ...req.body,
         user_id: req.session.user_id,
         post_id: req.params.id
         });
  
      req.session.save(() => {
        res.status(200).json(commentData);
      });
    } catch (err) {
      res.status(400).json(err);
      console.log(req.body)
    }
  });


  module.exports = router;