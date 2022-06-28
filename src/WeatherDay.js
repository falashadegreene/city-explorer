import React from 'react';

class WeatherDay extends React.Component {
  render() {
    let forecast = `${this.props.datetime}: ${this.props.weather.description}`;
    return <li>{forecast}</li>
  }
}

export default WeatherDay;