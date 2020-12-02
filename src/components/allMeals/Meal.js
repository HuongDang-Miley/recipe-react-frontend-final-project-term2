import React, { Component } from 'react'

export default class Meal extends Component {

    render() {
        return (
            <div>
                {this.props.img}
                {this.props.name}
                {this.props.category}
            </div>
        )
    }
}
