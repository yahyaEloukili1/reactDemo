import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     counter :1,
        //     imageList: [0],

        // }

    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <strong>
                     {this.props.title} : {this.props.counter}
                    </strong>
                   
                </div>
               
                <div className="card-body">
                    <img width={100}  src={this.props.image}/>
                </div>
            </div>
        )
    }
}
