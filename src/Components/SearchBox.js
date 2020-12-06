import React from "react";

export default class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      serie: ""
    }
  }
  handleChange = (e)=> {
    this.setState({serie: e.target.value});
  }
  handleClick = ()=>{
    const SERIESEARCH = this.state.serie;
    console.log(SERIESEARCH);
    return this.props.search(SERIESEARCH);
  }
 render(){
    return (
          <div >
              <div className="input-group mb-3" style={{maxWidth: '750px'}}>
                  <input type="text" className="form-control" placeholder="Ingrese un show" aria-label="Ingrese una búsqueda" aria-describedby="button-addon2" onChange={this.handleChange} />
                  <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Buscar</button>
                  </div>
              </div>
          </div>
          );
  }
}

