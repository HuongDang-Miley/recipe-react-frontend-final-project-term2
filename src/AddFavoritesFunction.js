addToFavorites = async (meal) => {
    const { idMeal, strMeal, strDrinkAlternate, strCategory, strArea, strMealThumb, strTags, strYoutube, strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
      strMeasure1,
      strMeasure3,
      strMeasure5,
      strMeasure6,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strMeasure16,
      strMeasure17,
      strMeasure18,
      strMeasure19,
      strMeasure20,
      strSource,
      dateModified,
    } = meal
    // if meal like = false, make it true, push to data
    if (meal.like === false) {
      meal.like = true
      let addMeal = await axios.post('http://localhost:3001/api/recipes/like-recipe',
        {
          _id: this.props.state.user._id,
          idMeal: idMeal,
          strMeal: strMeal,
          like: true,
          strDrinkAlternate: strDrinkAlternate,
          strCategory: strCategory,
          strArea: strArea,
          strMealThumb: strMealThumb,
          strTags: strTags,
          strYoutube: strYoutube,
          strIngredient1: strIngredient1,
          strIngredient2: strIngredient2,
          strIngredient3: strIngredient3,
          strIngredient4: strIngredient4,
          strIngredient5: strIngredient5,
          strIngredient6: strIngredient6,
          strIngredient7: strIngredient7,
          strIngredient8: strIngredient8,
          strIngredient9: strIngredient9,
          strIngredient10: strIngredient10,
          strIngredient11: strIngredient11,
          strIngredient12: strIngredient12,
          strIngredient13: strIngredient13,
          strIngredient14: strIngredient14,
          strIngredient15: strIngredient15,
          strIngredient16: strIngredient16,
          strIngredient17: strIngredient17,
          strIngredient18: strIngredient18,
          strIngredient19: strIngredient19,
          strIngredient20: strIngredient20,
          strMeasure1: strMeasure1,
          strMeasure3: strMeasure3,
          strMeasure5: strMeasure5,
          strMeasure6: strMeasure6,
          strMeasure8: strMeasure8,
          strMeasure9: strMeasure9,
          strMeasure10: strMeasure10,
          strMeasure11: strMeasure11,
          strMeasure12: strMeasure12,
          strMeasure13: strMeasure13,
          strMeasure14: strMeasure14,
          strMeasure15: strMeasure15,
          strMeasure16: strMeasure16,
          strMeasure17: strMeasure17,
          strMeasure18: strMeasure18,
          strMeasure19: strMeasure19,
          strMeasure20: strMeasure20,
          strSource: strSource,
          dateModified: dateModified,
        }
      )
      console.log(addMeal)

    }

    // if meal like = true, make it false, delete from data, send data back to App.js
    else {
      meal.like = false
      try {
        let result = await axios.delete('', {
          _id: this.props.state.user._id,
          idMeal: idMeal
        })

        console.log('result delete a meal', result)
      }
      catch (e) {
        console.log(e)
      }


    }
  }