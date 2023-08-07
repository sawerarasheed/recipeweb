import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

export default function Contact() {
    const [name,setName]= useState(" ")
    const [email,setEmail]= useState(" ")
    const [subject,setSubject]= useState(" ")
    const [message,setMessage]= useState(" ")
    const userLogin=(e)=>{
      e.preventDefault();
      const payLoad={email,name,subject,message}
      console.log(payLoad)
      Swal.fire({
        title: 'Successfully Send!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }  
  return (
    <div className='container'>
         <div className="section text-center my-4">
             <h2 className=''>Contact Us</h2>
    
               <h5  className=' text-secondary'>Do you have any questions? Please do not hesitate to contact us directly.
                Our team will come back to you within a matter of hours to help you.</h5>
           </div>
    
        <div className='row'>
            <div className="col-md-12 mb-md-0 mb-5 ">
                <Form onSubmit={userLogin}>
                  <div className="row px-2">
                    <div className="col-md-6">
          <Form.Group className="mb-3 col-" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="your email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
           {email}
            </Form.Text>
            
          </Form.Group>
                    </div>
                 
    <div className="col-md-6">
          <Form.Group className="mb-3 " controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="Text" placeholder="Your Name" value={name} onChange={(e) =>setName(e.target.value)}/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          </div>
          </div>
          <div className="row px-2">
            <div className="col-md-12">
            <Form.Group className="mb-3 " controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="Text" placeholder=" enter subject" value={subject} onChange={(e) =>setSubject(e.target.value)}/>
          </Form.Group>
            </div>
            <div className="col-md-12">
            <Form.Group className="mb-3 " controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control type="Text" placeholder=" enter message" value={message} onChange={(e) =>setMessage(e.target.value)}/>
          </Form.Group>
            </div>
          </div>
          <Button className='mx-3' variant="primary" type="submit">
            SEND
          </Button>
        </Form>
        </div>
        </div>
        
        
        </div>
    
  )
}
