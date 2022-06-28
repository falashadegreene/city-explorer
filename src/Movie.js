import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    let movies = this.props.movies.map(movie => <Movie key={movie.title} movie={movie}/>);
    return <ul>{movies}</ul>

  }
}

export default Movies;