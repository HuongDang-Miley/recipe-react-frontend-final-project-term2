import './App.css';
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    id: '',
  }

  componentDidMount = async () => {
    try {
      let result = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php',
        {
          headers: { Accept: "application/json, text/plain, */*" }
        }
      )

      console.log('result', result)
      console.log('config', result.config)
      console.log('meals', result.data.meals[0])
      let meal = result.data.meals[0]
      // let ingredients = meal.map({item} => if (item.))
      this.setState({
        id: meal.idMeal,
        area: meal.strArea,
        category: meal.strCategory,
        instructions: meal.strInstructions,
        name: meal.strMeal,
        img: meal.strMealThumb,
        tags: meal.strTags,
        video: meal.strYoutube,
        ingredients: [
          meal.strIngredient1,
          meal.strIngredient2,
          meal.strIngredient3,
          meal.strIngredient4,
          meal.strIngredient5,
          meal.strIngredient6,
          meal.strIngredient7,
          meal.strIngredient8,
          meal.strIngredient9,
          meal.strIngredient10,
          meal.strIngredient11,
          meal.strIngredient12,
          meal.strIngredient13,
          meal.strIngredient14,
          meal.strIngredient15,
          meal.strIngredient16,
          meal.strIngredient17,
          meal.strIngredient18,
          meal.strIngredient19,
          meal.strIngredient20,
        ]
      })


      this.state.ingredients.map(item => { if (item !== '') { console.log(item) } })

    }
    catch (e) {
      console.log(e)
    }
  }



  render() {
    const { id, area, category, ingredients, instructions, name, img, tags, video } = this.state
    console.log(ingredients)
    return (
      // <div className='recipe-div '>
      //   <h1>{name}</h1>
      //   <iframe
      //     width="560" height="315"
      //     src="https://www.youtube.com/embed/WUpaOGghOdo"
      //     frameborder="0"
      //     poster={img}
      //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      //   </iframe>
      //   <div className='info-ul'>
      //     <ul>
      //       <button className="add-to-favorites-button">Add To Favorites</button>
      //       <li>Tags: {tags}</li>
      //       <li>Country: {area}</li>
      //       <li>Catergory: {category}</li>
      //     </ul>
      //   </div>
      //   <h2>Ingredients</h2>
      //   {/* <div>
      //     {ingredients.map(item => 
      //       <li>{item}</li>
      //       )}
      //     </div> */}

      //   <h2>Instrucstion</h2>
      //   <div>{instructions}</div>



      //   <img src={img} />




      // </div>
      <div id="recipe-div">
        <div id='video-hero'>
          {/* <h1>{name}</h1> */}
          <iframe
            // width="560" height="315"
            src="https://www.youtube.com/embed/WUpaOGghOdo"
            frameborder="0"
            poster={img}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            <h1>name test ting something in here</h1>
          </iframe>
        </div>


        <div id='info'>
          <h1>{name}</h1>
          <ul>
            <button className="add-to-favorites-button">Add To Favorites</button>
            <li>Tags: {tags}</li>
            <li>Country: {area}</li>
            <li>Catergory: {category}</li>
          </ul>
        </div>


        <div id='ingredients'>
          <h2>Ingredients</h2>
          <div className='ingredient-and-instruction-wrapper'>
          {ingredients}
          </div>
        </div>


        <div id='instruction'>
          <h2>Instruction</h2>
          <div className='ingredient-and-instruction-wrapper'>
            <p className='instruction-paragraph'>{instructions}</p>
          </div>
        </div>
      </div>
    )
  }
}

