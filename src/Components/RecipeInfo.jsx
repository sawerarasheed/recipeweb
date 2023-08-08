import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function RecipeInfo() {
  const {MealId}= useParams();
  const [info,setInfo]=useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
    .then(json=>setInfo(json.data.meals[0]))

  },[MealId])
  return (
    <>
<div className="content mx-5">
  <img src={info.strMealThumb} alt="" />
  <div className="inner-content">
    <h1 className='text-center'>{info.strMeal}</h1>
    <h2 className='text-center'>{info.strArea}  Food</h2> 
    <h3 className='text-center'> Category {info.strCategory}  </h3> 

  </div>
</div>
<div className=" row my-5 recipe-details">
  <div className="col-md-6 ingredients">
<h2>Ingredients</h2>
<h4>{info.strIngredient1}:{info.strMeasure1}</h4>
<h4>{info.strIngredient2}:{info.strMeasure2}</h4>
<h4>{info.strIngredient3}:{info.strMeasure3}</h4>
<h4>{info.strIngredient4}:{info.strMeasure4}</h4>
<h4>{info.strIngredient5}:{info.strMeasure5}</h4>
<h4>{info.strIngredient6}:{info.strMeasure6}</h4>
<h4>{info.strIngredient7}:{info.strMeasure7}</h4>
<h4>{info.strIngredient8}:{info.strMeasure8}</h4>
<h4>{info.strIngredient9}:{info.strMeasure9}</h4>
<h4>{info.strIngredient10}:{info.strMeasure10}</h4>
<h4>{info.strIngredient11}:{info.strMeasure11}</h4>
<h4>{info.strIngredient12}:{info.strMeasure12}</h4>
<h4>{info.strIngredient13}:{info.strMeasure13}</h4>
<h4>{info.strIngredient14}:{info.strMeasure14}</h4>
<h4>{info.strIngredient15}:{info.strMeasure15}</h4>
<h4>{info.strIngredient16}:{info.strMeasure16}</h4>
<h4>{info.strIngredient17}:{info.strMeasure17}</h4>
<h4>{info.strIngredient18}:{info.strMeasure18}</h4>
<h4>{info.strIngredient19}:{info.strMeasure19}</h4>
<h4>{info.strIngredient20}:{info.strMeasure20}</h4>
  </div>
  <div className="col-md-6 instructions">
    <h2>Instructions</h2>
    <h4>{info.strInstructions}</h4>
  </div>
</div>

    </>
  )
}

export default RecipeInfo