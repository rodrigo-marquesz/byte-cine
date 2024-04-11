const express = require('express');
const MovieController = require('../controllers/movie.controller');

const router = express.Router();

router.post('/', MovieController.createMovie);
router.get('/', MovieController.getMovies);
router.get('/:id', MovieController.getMoviesById);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;
