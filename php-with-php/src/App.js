import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    text: ''
  }
  handleAdd = async e => {
    await this.setState({
      text: e.target.value
    })
  }
  handleSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("text", this.state.text);
    const url = 'http://localhost:80/react-backend/';
    axios.post(url, formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App-header">
        <input type="text" id="text" placeholder="Enter text here!"
                onChange={this.handleAdd}
                value={this.state.text}
        />
        <br />
        <button id="submit" onClick={this.handleSubmit}>Send data</button>
      </div>
    );
  }
}
