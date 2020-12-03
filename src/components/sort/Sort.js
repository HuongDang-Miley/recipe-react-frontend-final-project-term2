import Axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import './sort.css'

export default class Sort extends Component {

    componentDidMount= async () =>{
        let result = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        console.log(result)
    }
    
    render() {
        return (
            <div id="sort-button">
                Sort Recipes
            </div>
        )
    }
}
