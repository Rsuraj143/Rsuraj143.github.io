import "./OtherPage.css"

import React, { Component } from 'react'

class OtherPage extends Component{
    render(){
        return (
            <div className="otherpage">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
        }
    }

export default OtherPage