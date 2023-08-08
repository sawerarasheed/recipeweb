import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './loader/Loader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




export default function Meal() {
    const [loader, setLoader] = useState(true)
    const [Categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(json => {
            setCategories(json.data.categories)
            setLoader(false)
        })
    }, [])



    return (
        <>
            <div className="container">
                <div className="my-5 text-center">
                    <h1>Categories</h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
                </div>
                {
                    loader
                        ?
                        <Loader />
                        :
                        <div className="row">
                            {
                                Categories.map((val, key) => <div className="col-md-4 my-3" key={key}>
                                    <Link className='text-decoration-none' to={`/meal/${val.strCategory}`} >
                                        <Card>
                                            <Card.Img variant="top" src={val.strCategoryThumb} />
                                            <Card.Body>
                                                <Card.Title>{val.strCategory}</Card.Title>
                                                <Card.Text>
                                                    {val.strCategoryDescription.length > 50 ? val.strCategoryDescription.slice(0, 50) + "..." : val.strCategoryDescription}
                                                </Card.Text>
                                                <Button variant="primary">Add To Favorite</Button>
                                            </Card.Body>
                                        </Card>
                                    </Link>

                                </div>)

                            }


                        </div>
                }


            </div>

        </>
    )
}
