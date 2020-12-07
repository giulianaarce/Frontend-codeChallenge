//import { Component } from 'react';
import React from 'react';
import './App.css';
import ResultItem from './Components/ResultItem';
import SearchBox from './Components/SearchBox';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: []
    }
  }
  search = (value)=>{
    const VALOR = value;
    fetch("https://api.tvmaze.com/singlesearch/shows?q=" + encodeURI(VALOR))
    .then( (res) => { return res.json(); })
    .then( (json) =>{
      if(json !== undefined){
        console.log(json);
        this.setState({ show: json});
      }
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1>Challenge</h1>
        <SearchBox search={this.search}/>
        <ResultItem 
          image={this.state.show.image}
          name={this.state.show.name}
          summary={this.state.show.summary}
          site={this.state.show.officialSite}
        />
      </div>
    );
  }
}
