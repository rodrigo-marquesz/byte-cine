const express = require('express');
const MovieController = require('../controllers/movie.controller');

const router = express.Router();

router.post('/create', MovieController.createMovie);
router.put('/buy-ticket/:title/:shift/:seat', MovieController.buyTicket);
router.get('/', MovieController.getMovies);
router.get('/:id', MovieController.getMoviesById);
router.put('/update/:id', MovieController.updateMovie);
router.delete('/delete/:id', MovieController.deleteMovie);

module.exports = router;
