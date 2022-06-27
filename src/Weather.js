import React from 'react';
import Table from 'react-bootstrap/Table'


class Weather extends React.Component{
  render(){
    return(
      <Table>
        <thead>
          
        </thead>
        <tbody>
          {this.props.weather.map((theDate, idx) => (
            <tr key={idx}>
              <td>{theDate.datetime}</td>
              <td>{theDate.weather.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  };
};

export default Weather;