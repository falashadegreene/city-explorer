
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {

  render() {

    let showMovies = this.props.movies.map((show, index) =>
      <Card key={index}>
        <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>{show.title}</ListGroup.Item>
            <ListGroup.Item>{show.overview}</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card>

    )

    return (
      <>
      {showMovies}
      </>
    )
  }
}


export default Movies;