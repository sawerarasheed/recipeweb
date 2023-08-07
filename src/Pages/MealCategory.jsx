import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MealCategory() {
    const { CategoryName } = useParams()
    const { dish, setDish } = useState([])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CategoryName}`).then(json =>  setDish(json.data.meals))
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
                        dish.map((val, key) =>
                            <div className="col-md-6" key={key}>
                                <Card >
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    )
}
