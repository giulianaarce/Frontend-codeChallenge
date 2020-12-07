import React from "react";

export default class ResultItem extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <div>
                    <h3>Show</h3>
                </div>
                { 
                <div>
                    <div className="card mb-3" style={{maxWidth: '700px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={`${this.props.image ? this.props.image.medium : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"}`} className="card-img" alt="imagen" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.name}</h5>
                                    <div>
                                        <div dangerouslySetInnerHTML={{__html: this.props.summary}}></div>
                                        Sitio: {`${this.props.site ? this.props.site : "No se encuentra en un sitio oficial."}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}