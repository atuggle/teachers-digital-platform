import React, { Component } from 'react';
import './App.css';

import PrintData from "./js/components/PrintData";
import TextEdit from "./js/components/TextEdit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      textdata: "Hello World",
    };
  }

  changeText(textdata) {
    this.setState({textdata});
  }

  render() {
    return (
      <div className="App">
        <PrintData textdata={this.state.textdata}/>
        <TextEdit textdata={this.state.textdata} changeText={this.changeText.bind(this)} />
      </div>
    );
  }
}

export default App;
