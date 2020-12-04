import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        search: '',
    }

    render() {
        return (

            <input placeholder='Search'></input>

        )
    }
}
