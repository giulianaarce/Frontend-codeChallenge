//import { Component } from 'react';
import React from 'react';
import './App.css';
import ResultItem from './Components/ResultItem';
import SearchBox from './Components/SearchBox';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: '',
      IP: ''
    }
  }
  search = (value)=>{
    const VALOR = value;
    fetch("http://localhost:4200/search/shows/" + (VALOR))
    .then( (res) => { return res.json(); })
    .then( (json) =>{
      if(json !== undefined){
        console.log(json);
        this.setState({ show: json});
      }
    })
    
    // ip
    fetch('https://cors-anywhere.herokuapp.com/http://api.ipify.org/?format=json')
    .then((res) => { return res.json(); })
    .then((json) => {
      this.setState({ IP: json})
    

    //Peticion de un show
    console.log(this.state.IP.ip);
    const formatYmd = date => date.toISOString().slice(0, 10);
    const requestLogs = {
      fecha: formatYmd(new Date()),
      textoBusqueda: VALOR,
      ip: this.state.IP.ip
    }
    fetch('http://localhost:4200/peticion',{
      method: 'POST',
      body: JSON.stringify(requestLogs),// datos a enviar
      headers: {'Content-Type':'application/json'}
    })
    .then((res) => { return res.json(); })
    .then((json) => { return console.log(json); })})
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
