import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MealCategory() {
    const { CategoryName } = useParams()
    const [item, setitem]= useState([])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CategoryName}`)
        .then(json =>  setitem(json.data.meals))
        .catch(error=>console.log(error))
    }, [CategoryName])




    return (
        <>
            <div className="container">
                <div className="my-5 text-center">
                    <h1>{CategoryName.toUpperCase()}</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo culpa beatae doloribus, ullam dolorum earum explicabo maxime, eaque cupiditate ex minima perferendis distinctio excepturi eius? Adipisci eveniet officia numquam expedita.</p>
                </div>
                <div className="row">
                    {
                        item?.map((val, key) =>
                            <div className="col-md-6 my-3" key={key}>
                                <Link className='text-decoration-none' to={`/info/${val.idMeal}`}>
                                <Card >
                                    <Card.Img variant="top" src={val.strMealThumb} />
                                    <Card.Body>
                                        <Card.Title>{val.strMeal}</Card.Title>
                                        
                                        
                                    </Card.Body>
                                </Card>
                                </Link>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    )
}
