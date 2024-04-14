const MovieService = require('../services/movie.service');

class MovieController {
  async createMovie(req, res) {
    try {
      const movie = await MovieService.createMovie(req.body);
      res.status(201).json(movie);
    } catch (err) {
      if (err.message.startsWith('Exceed the max seats capacity')) {
        res.status(403).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }
  async getMovies(req, res) {
    try {
      const movies = await MovieService.getMovies();
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getMoviesById(req, res) {
    try {
      const movie = await MovieService.getMovieById(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async updateMovie(req, res) {
    try {
      const movie = await MovieService.updateMovie(req.params.id, req.body);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async deleteMovie(req, res) {
    try {
      const movie = await MovieService.deleteMovie(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async buyTicket(req, res) {
    try {
      const movie = await MovieService.buyTicket(
        req.params.title,
        req.params.shift,
        req.params.seat
      );
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new MovieController();
