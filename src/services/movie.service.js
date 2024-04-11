const movieModel = require('../schemas/movies.schema');
/* Falta criar regras de negócio*/
class MovieService {
  // Cria um Novo Filme
  async createMovie(movie) {
    const newMovie = new movieModel(movie);
    await newMovie.save();
    return newMovie;
  }
  // Lista os filmes cadastrados
  async getMovies() {
    return movieModel.find();
  }
  // Busca um filme pelo id
  async getMovieById(id) {
    const movie = await movieModel.findById(id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  }
  // Atualiza um filme pelo id
  async updateMovie(id, movie) {
    const updatedMovie = await movieModel.findByIdAndUpdate(id, movie, {
      new: true,
    });
    if (!updatedMovie) {
      throw new Error('Movie not found');
    }
    return updatedMovie;
  }
  // Deleta um filme pelo id
  async deleteMovie(id) {
    const movie = await movieModel.findByIdAndDelete(id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  }
}

module.exports = new MovieService();
