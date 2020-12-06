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
                <div>
                    {   this.props.show.map((item) => {
                            return(
                                <div className="card mb-3" style={{maxWidth: '700px'}}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={item.image.medium} className="card-img" alt="imagen" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">
                                                    {item.summary}<br/>
                                                    {item.officialSite}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}