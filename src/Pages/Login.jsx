
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import Swal from 'sweetalert2'


function Login() {
  const [password,setPassword]= useState(" ")
  const [email,setEmail]= useState(" ")
  const userLogin=(e)=>{
    e.preventDefault();
    const payLoad={email,password}
    console.log(payLoad)

    Swal.fire({
      title: 'Successfully Login!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'ok'
    })


  }
    return (
    
        <>
        
    
        <div  style ={{width:"100%", height:"85vh"}} className='d-flex align-items-center justify-content-center' >
        <Form className=' w-50 p-5 border rounded shadow-lg' onSubmit={userLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
           {email}
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
        
        
        </>
      );
    }

export default Login