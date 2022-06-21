import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
        starWarsChars: [],
        cityData: {},
        error: false,
        errorMessage: ''
      };
    }
  
   handleSubmit = async (event) => {
     event.preventDefault();

      try {
     
     let starWarsCharacters = await axios.get('https://swapi.dev/api/people/?page=1');
      
     this.setState({
       starWarsChars: starWarsCharacters.data.results,
       error: false
     });
  
    } catch (error) {
      console.log('error: ', error)
      console.log('error.message:', error.message);
      this.setState({
        error: true,
        errorMessage: `An Error Occured: ${error.response.status}`

      });
    }
   
   };

    handleCityInput = async (e) => {
      e.preventDefault();

      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityInfo = await axios.get(url);
      console.log(cityInfo.data[0]);
    }
  
  
  render() {


    let starWarList = this.starWarsChars.map((character, idx) => {
      return <li key={idx}>{character.name}</li>;
    })

    return (
     <>
        <h1>Data from an API</h1>
        <form onSubmit ={this.handleSubmit}>
          <button type="submit">Explore!</button>
        </form>
        {/* WTF */}
        {this.state.error
          ? <p>{this.state.errorMessage}</p>

          : <ul>
            {starWarList}
          </ul>
        
        }
        
        <form onSubmit={this.handleCitySubmit}>
              <label>Pick a City:
                <input type="text" onInput={this.handleCityInput} />
              </label>
              <button type="submit">Get City Data</button>
            </form>
      </>
  );
 }
}

  
export default App;