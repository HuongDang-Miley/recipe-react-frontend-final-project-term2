// // recipe component

// import React, { Component } from 'react'


// export default class Recipe extends Component {
//     state = {
//         id: this.props.id,
//         area: this.props.area,
//         category: '',
//         instructions: this.props.instructions,
//         name: this.props.name,
//         img: '',
//         tags: this.props.tag,
//         video: '',
//         source: '',
//         ingredients: []
//     }

//     componentDidUpdate = (preState, PreProps) => {
//         console.log('PreState', preState)
//         console.log('PreProps',PreProps)
        
//     }
//     // componentDidMount = () => {
//     //     const { id, area, category, ingredients, instructions, name, img, tags, video, source } = this.props

//     //     this.setState({
//     //         id: id,
//     //         area: area,
//     //         category: category,
//     //         instructions: instructions,
//     //         name: name,
//     //         img: img,
//     //         tags: tags,
//     //         video: video,
//     //         source: source,
//     //         ingredients: ingredients
//     //     })

//     // }
//     render() {
//         const { id, area, category, ingredients, instructions, name, img, tags, video, source } = this.state
//         console.log('props', this.props)
//         console.log('state', this.state)
//         return (
//             <div id="recipe-div">

//                 <div id='header'>
//                     <h1>{name}</h1>
//                     <div id='video-info-wrapper'>
//                         <iframe

//                             src="https://www.youtube.com/embed/WUpaOGghOdo"
//                             frameborder="0"
//                             poster={img}
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
//                         </iframe>
//                         <ul id="info">
//                             <button className="add-to-favorites-button">Add To Favorites</button>
//                             <li className="info-list">Tags: {tags}</li>
//                             <li className="info-list">Country: {area}</li>
//                             <li className="info-list">Catergory: {category}</li>
//                             <li className="info-list">Source: <a href={source}>Link</a>
//                             </li>
//                         </ul>

//                     </div>


//                 </div>
//                 <div id='ingredients'>
//                     <h2>Ingredients</h2>
//                     <div className='ingredient-and-instruction-wrapper'>
//                         <p className='instruction-paragraph'>
//                             {ingredients.length !== 0
//                                 ? (ingredients.map(item => { if (item !== '') { return (<li>{item}</li>) } }))
//                                 : ""}
//                         </p>
//                     </div>
//                 </div>
//                 <div id='instruction'>
//                     <h2>Instruction</h2>
//                     <div className='ingredient-and-instruction-wrapper'>
//                         <p className='instruction-paragraph'>{instructions}</p>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }



// // App component

// import './App.css';
// import React, { Component } from 'react'
// import axios from 'axios'
// import Recipe from './components/recipePage/Recipe'


// export default class App extends Component {
//   state = {
//     id: '',
//     ingredients: []
//   }

//   componentDidMount = async () => {
//     try {
//       let result = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php',
//         {
//           headers: { Accept: "application/json, text/plain, */*" }
//         }
//       )

//       let meal = result.data.meals[0]
//       console.log('meal', meal)
//       this.setState({
//         id: meal.idMeal,
//         area: meal.strArea,
//         category: meal.strCategory,
//         instructions: meal.strInstructions,
//         name: meal.strMeal,
//         img: meal.strMealThumb,
//         tags: meal.strTags,
//         video: meal.strYoutube,
//         source: meal.strSource,
//         ingredients: [
//           meal.strIngredient1,
//           meal.strIngredient2,
//           meal.strIngredient3,
//           meal.strIngredient4,
//           meal.strIngredient5,
//           meal.strIngredient6,
//           meal.strIngredient7,
//           meal.strIngredient8,
//           meal.strIngredient9,
//           meal.strIngredient10,
//           meal.strIngredient11,
//           meal.strIngredient12,
//           meal.strIngredient13,
//           meal.strIngredient14,
//           meal.strIngredient15,
//           meal.strIngredient16,
//           meal.strIngredient17,
//           meal.strIngredient18,
//           meal.strIngredient19,
//           meal.strIngredient20,
//         ]
//       }, () => {
//         console.log('state in line 58', this.state)
//       })

//     }
//     catch (e) {
//       console.log(e)
//     }
//   }



//   render() {

//     const { id, area, category, ingredients, instructions, name, img, tags, video, source } = this.state
//     return (
//       // <div id="recipe-div">
//         <Recipe {...this.state} />

//       //   <div id='header'>
//       //     <h1>{name}</h1>
//       //     <div id='video-info-wrapper'>
//       //       <iframe

//       //         src="https://www.youtube.com/embed/WUpaOGghOdo"
//       //         frameborder="0"
//       //         poster={img}
//       //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
//       //       </iframe>
//       //       <ul id="info">
//       //         <button className="add-to-favorites-button">Add To Favorites</button>
//       //         <li className="info-list">Tags: {tags}</li>
//       //         <li className="info-list">Country: {area}</li>
//       //         <li className="info-list">Catergory: {category}</li>
//       //         <li className="info-list">Source: <a href={source}>Link</a>
//       //         </li>
//       //       </ul>

//       //     </div>


//       //   </div>
//       //   <div id='ingredients'>
//       //     <h2>Ingredients</h2>
//       //     <div className='ingredient-and-instruction-wrapper'>
//       //       <p className='instruction-paragraph'>
//       //         {ingredients.length !== 0
//       //           ? (ingredients.map(item => { if (item !== '') { return (<li>{item}</li>) } }))
//       //           : ""}
//       //       </p>
//       //     </div>
//       //   </div>
//       //   <div id='instruction'>
//       //     <h2>Instruction</h2>
//       //     <div className='ingredient-and-instruction-wrapper'>
//       //       <p className='instruction-paragraph'>{instructions}</p>
//       //     </div>
//       //   </div>
//       // </div>
//     )
//   }
// }


//  link router in allMeal.js

{/* <Router>
                                <Route
                                    component={(props) => <Meal
                                        {...props}
                                        id={idMeal}
                                        name={strMeal}
                                        category={strCategory}
                                        img={strMealThumb}
                                        // Link 
                                    />}
                                >
                                </Route>
                            </Router> */}
                            {/* <Meal
                            component={(props) => <Login {...props} auth={this.auth} />}
                                {...props}
                                id={idMeal}
                                name={strMeal}
                                category={strCategory}
                                img={strMealThumb}
                            /> */}


                            // tets: loop through catergories:
                               {/* {categories.map(item => {
                    return (
                        <span className='category-span'>
                            <li onClick={() => this.filterCategory(item)} key={item.id} className='category-li'>{item}</li>
                        </span>
                    )
                })} */}