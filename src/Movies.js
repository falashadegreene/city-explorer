import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component{
  render(){
    return(
      <ListGroup>
        <ListGroupItem>{this.props.title}</ListGroupItem>
        <ListGroupItem>{this.props.overview}
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default Movie;