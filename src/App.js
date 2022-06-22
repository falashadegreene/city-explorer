import React from 'react';
import axios from 'axios';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      theCity: [],
      error: false,
      errorMessage: ''
    };
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let listOfCities =  await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      this.setState({
        theCity: listOfCities.data
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `Oops an error occurred! Status code: ${error.response.status}`
      });
    };
  };

  render(){
    let cityList = this.state.theCity.map((city, idx) => {
      return <div
      key={idx}
    >
      <div>
        <div>{city.display_name}</div>
        Latitude: {city.lat}  
        Longitude: {city.lon}
      </div>
      <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${city.lat},${city.lon}&zoom=18`} alt="map of city"/>
    </div>
    })
    return (
      <main>
        <h1>Search Your City!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onInput={this.handleCityInput}></input>
          <button type="submit">Explore!</button>
        </form>
        {this.state.error
          ? <p>{this.state.errorMessage}</p>
          : <ListGroup>
              {cityList}
            </ListGroup>
        }
      </main>
    );
  }
}


export default App;