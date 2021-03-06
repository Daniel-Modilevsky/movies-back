const express = require('express');
const { getAllmovies, getMovie, createMovie, updateMovie, deleteMovie, checkMovietId, getByCategory ,IMDB , getSmartMovie, getTopRated} = require('../controllers/movies-controller');
let router = express.Router();
const upload = require('../../lib/images');

router.post('/api/movies/smart/', getSmartMovie);
router.get('/api/categories/:categoryName', getByCategory); 
router.get('/api/toprated', getTopRated); 

router.post('/api/movies/IMDB/', IMDB);
router.get('/api/movies/', getAllmovies)
      .post('/api/movies/', upload.single('image') ,createMovie);
router.get('/api/movies/:id', checkMovietId, getMovie)
      .put('/api/movies/:id', checkMovietId, updateMovie)
      .delete('/api/movies/:id',checkMovietId, deleteMovie);

module.exports = router;