const movieModel = require('../schemas/movies.schema');

class MovieService {
  // Cria um Novo Filme
  async createMovie(movie) {
    const maxSeats = 40;
    const newMovie = new movieModel(movie);
    if (newMovie.session.capacity > maxSeats) {
      throw new Error(`Exceed the max seats capacity ${maxSeats}`);
    }
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

  /*
  Compra ticket, buscando filme pelo title e shift da sessão.
  Se encontrar filme, continua a lógica. 
  Valida sempre se os tickets excedem a capacidade dos assentos do filme 
  Se assento estiver disponível, marca o mesmo para false.
  Caso contrário exibe erro.
  Se assento não existir, criará o mesmo.
  */
  async buyTicket(title, shift, seat) {
    try {
      const validShifts = ['Morning', 'Afternoon', 'Evening'];
      if (!validShifts.includes(shift)) {
        throw new Error(
          `Unknow shift. Valid shifts are only: ${validShifts.join(', ')}`
        );
      }

      const movie = await movieModel.findOne({ title, 'session.shift': shift });
      if (!movie) {
        throw new Error('Movie not found');
      }

      const tickets = movie.session.tickets;
      if (tickets.length >= movie.session.capacity) {
        throw new Error('Exceed the max seats capacity');
      }

      const seatTicket = movie.session.tickets.find(
        (tickets) => tickets.seat === seat
      );
      if (seatTicket) {
        if (!seatTicket.isAvailable) {
          throw new Error('This seat is already booked');
        } else {
          seatTicket.isAvailable = false;
        }
      } else {
        tickets.push({
          isAvailable: false,
          seat: seat,
          price: 12.5,
        });
      }

      await movie.save();
      return { message: 'Ticket successfully booked', movie };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new MovieService();