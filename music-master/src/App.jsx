import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: ''
    };
  }

  authorize() {
    const BASE_URL = 'https://accounts.spotify.com/authorize?';
    const FETCH_URL = `${BASE_URL}client_id=289d4d71a2804beba4766f1772c5c277&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F`;
    fetch(FETCH_URL, {
      method: 'GET',
      mode: 'no-cors'
    })
    .then(response => console.log('response', response));
  }

  requestToken() {
    /*const URL = 'https://accounts.spotify.com/api/token';
    fetch(URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: "Basic Mjg5ZDRkNzFhMjgwNGJlYmE0NzY2ZjE3NzJjNWMyNzc6ODhjODhmODY1MjNiNDA2MWI3OTQwNzdkYjg1ZmQ4YmM="
      }),
      params: {
        'grant_type': 'authorization_code',
        'code': 'AQC7wtF60TWNb-XN6MvWmlGVkaUC5WGiY6dAsriheuRL02UFJGcn1UhDG5a8kNdWMmJUbpDJli-DYh8FxXduC3sNRny02eGzXtj9iR68HfUYQmMKq8mpVhl8-vNI9ixUv5azEltVlMNjNSBCtdoEqBcvbZsQLJTJFcYH9-EdIHpEDQWqTGw6vG5Xkis',
        'redirect_uri': 'http%3A%2F%2Flocalhost%3A3000%2F',
        //'client_id': '289d4d71a2804beba4766f1772c5c277',
        //'client_secret': '88c88f86523b4061b794077db85fd8bc'
      },
    })
    .then(response => console.log('response', response));*/
    HTTP.post("https://accounts.spotify.com/api/token", {
      params: {
        grant_type : "authorization_code",
        code: 'AQC7wtF60TWNb-XN6MvWmlGVkaUC5WGiY6dAsriheuRL02UFJGcn1UhDG5a8kNdWMmJUbpDJli-DYh8FxXduC3sNRny02eGzXtj9iR68HfUYQmMKq8mpVhl8-vNI9ixUv5azEltVlMNjNSBCtdoEqBcvbZsQLJTJFcYH9-EdIHpEDQWqTGw6vG5Xkis',
        redirect_uri: 'http%3A%2F%2Flocalhost%3A3000%2F',
      },
      headers: {
        'Authorization' : "Basic Mjg5ZDRkNzFhMjgwNGJlYmE0NzY2ZjE3NzJjNWMyNzc6ODhjODhmODY1MjNiNDA2MWI3OTQwNzdkYjg1ZmQ4YmM=",
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }, function(error, result) {
      console.log('error: ', error);
      console.log('result: ', result);
    });
  }

  search() {
    //this.authorize();
    this.requestToken();
    /*const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    fetch(FETCH_URL, {
      method: 'GET',
      mode: 'no-cors',
    })
    .then(response => response.json());

    console.log('FETCH_URL', FETCH_URL);*/
  }



  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter'){
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
