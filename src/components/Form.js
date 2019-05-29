import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}
