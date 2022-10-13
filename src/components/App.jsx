import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Section } from './Section/Section';
import movies from '../data/movies.json';
import { MoviesGallery } from './Section/MoviesGallery/MoviesGallery';
import { mapper } from './utils/Mapper';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    movies: mapper(movies),
    currentImage: null,
  };

  componentDidUpdate(_, prevState) {
    if (this.state.movies !== prevState.movies) {
      localStorage.setItem('movies', JSON.stringify(this.state.movies));
    }
  }
  componentDidMount() {
    const movies = localStorage.getItem('movies');
    if (movies) {
      this.setState({ movies: JSON.parse(movies) });
    }
  }

  deleteMovie = idMovie => {
    const updateMovies = this.state.movies.filter(({ id }) => id !== idMovie);
    this.setState({ movies: updateMovies });
  };

  changeCurrentImage = data => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { movies, currentImage } = this.state;
    return (
      <>
        <MoviesGallery
          movies={movies}
          deleteMovie={this.deleteMovie}
          openModal={this.changeCurrentImage}
        />
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
