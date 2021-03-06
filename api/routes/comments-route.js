const express = require('express');
const { getAllComments, getComment, createComment, updateComment, deleteComment, checkCommentId, findMoviesCommented, findAdminCommented, approveComment, findUserCommented } = require('../controllers/comments-controller');
let router = express.Router();

router.get('/api/moviecomments/:id',findMoviesCommented);
router.get('/api/admincomments/',findAdminCommented);
router.get('/api/usercomments/:id',findUserCommented);
router.get('/api/comments/', getAllComments)
      .post('/api/comments/', createComment);
router.get('/api/comments/:id', checkCommentId , getComment)
      .put('/api/comments/:id', checkCommentId ,updateComment)
      .delete('/api/comments/:id',checkCommentId, deleteComment);
router.put('/api/approvecomments/:id', checkCommentId ,approveComment)

module.exports = router;