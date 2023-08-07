import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Mealitem from './MealItem';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {BsSearch} from 'react-icons/bs'


function SearchFood() {
    const [show, setShow] = useState(false);
    // const[recipe,serRecipe]=useState("");
    const [search, setSearch] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [food, setFood] = useState([]);
    const SearchFoodData = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(json => {
            setFood(json.data.meals)
            setShow(true);
        }
        )
    }
   
    return (
        <>
            <Form className="d-flex">
                <Form.Control
                    onChange={(e) => setSearch(e.target.value)} value={search}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <>
                    <Button variant="primary" onClick={SearchFoodData}>
                        <BsSearch/>
                    </Button>

                    <Modal  show={show} fullscreen={true} onHide={handleClose} closeButton>
                        <Modal.Header closeButton>
                            <Modal.Title>heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            {
                                
                              food.map((val,key)=><Mealitem key={key} data={val}/>)  
                            }
                        </Modal.Body>

                    </Modal>
                </>
            </Form>
        </>
    )
}

export default SearchFood