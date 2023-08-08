import React from "react";
import  './Meal.css'
// import { useNavigate } from "react-router-dom";

const Mealitem=({data})=>{
    // console.log(data)
//     let navigate=useNavigate();
    return(

        <>
         <div className="card" >
                        <img src={data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <h2>{data.strMeal}</h2>
                        <p>{data.strArea} food</p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{data.strInstructions}</p>
                            <img src={data.strMealThumb}/>
                            <a href={data.strSource}>Watch video</a>
                        </div>
            </div>
            {/* {
                (!data)? "NOT FOUND" : data.map(item=>{
                    return(
                    <div className="card">
                    <img src={data.strMealThumb} alt="meal"/>
                    <div className ="info">
                    <h2>{data.strMeal}</h2>
                    <p>{data.strArea} food</p>
                    </div>
                    <div className ="recipe">
                        <h2>Recipe</h2>
                        <p>{data.strInstructions}</p>
                        <img src={data.strMealThumb}/>
                        <a href={data.strSource}>Watch video</a>
                    </div>
        </div>
                    )
                })
            }   */}
        </>
    )
}
export default Mealitem;