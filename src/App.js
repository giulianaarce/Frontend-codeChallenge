//import { Component } from 'react';
import React from 'react';
import './App.css';
import ResultItem from './Components/ResultItem';
import SearchBox from './Components/SearchBox';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: ""
    }
  }
  search = (value)=>{
    const VALOR = value;
    fetch("https://api.tvmaze.com/singlesearch/shows?q=" + encodeURI(VALOR))
    .then( (res) => { return res.json(); })
    .then( (json) =>{
      if(json !== undefined){
        this.setState({ show: json});
        console.log(this.state.show);
      }
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1>Challenge</h1>
        <SearchBox search={this.search}/>
        <ResultItem show={this.state.show || []}/>
      </div>
    );
  }
}
