import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './components/recipePage/Recipe'
import './App.css'


export default class App extends Component {
  // state = {
  //   id: '',
  //   ingredients: []
  // }

  // componentDidMount = async () => {
  //   try {
  //     let result = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php',
  //       {
  //         headers: { Accept: "application/json, text/plain, */*" }
  //       }
  //     )

  //     let meal = result.data.meals[0]
  //     console.log('meal', meal)
  //     this.setState({
  //       id: meal.idMeal,
  //       area: meal.strArea,
  //       category: meal.strCategory,
  //       instructions: meal.strInstructions,
  //       name: meal.strMeal,
  //       img: meal.strMealThumb,
  //       tags: meal.strTags,
  //       video: meal.strYoutube,
  //       source: meal.strSource,
  //       ingredients: [
  //         meal.strIngredient1,
  //         meal.strIngredient2,
  //         meal.strIngredient3,
  //         meal.strIngredient4,
  //         meal.strIngredient5,
  //         meal.strIngredient6,
  //         meal.strIngredient7,
  //         meal.strIngredient8,
  //         meal.strIngredient9,
  //         meal.strIngredient10,
  //         meal.strIngredient11,
  //         meal.strIngredient12,
  //         meal.strIngredient13,
  //         meal.strIngredient14,
  //         meal.strIngredient15,
  //         meal.strIngredient16,
  //         meal.strIngredient17,
  //         meal.strIngredient18,
  //         meal.strIngredient19,
  //         meal.strIngredient20,
  //       ]
  //     }, () => {
  //       console.log('state in line 58', this.state)
  //     })

  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }



  render() {

    
    return (
        <Recipe />

    )
  }
}

