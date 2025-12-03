import React from 'react'
import img3 from '../assets/img3.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (<>
  
   
        <div className="d-flex mt-5">
            <div><h2 className="rounded" style={{backgroundColor:'#B9FF66'}} >Contact Us</h2></div>
            <div>
                <p className='ps-3'>Connect with Us , Lets discuss your Digitak Marketing Needs</p>
            </div>
        </div>
    
<div style={{height:'480px', width:"1350px", backgroundColor:'#f3f3f3',padding:'20px'}} className="container rounded-5 d-flex justify-content-between mt-5">
    <div style={{paddingLeft:'200px', paddingTop:'10px'}}>
    <input className='ms-4' id='hi' type="radio" />
    <label className='ms-4' for="hi">Say Hi</label>

    <input form-control className='ms-4' id='quote' type="radio" />
    <label className='ms-4' for="quote">get a Quote</label> <br />
    <label htmlFor="name">name</label> <br />
    <FloatingLabel
      style={{width:'600px'}}
        controlId="name"
        label="name "
        className="mb-3 "
      >
        <Form.Control type="text" placeholder="name" />
      </FloatingLabel>
    <label htmlFor="email">email</label><br />
    <FloatingLabel
        controlId="name"
        label="Email "
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name" />
      </FloatingLabel>
    <label htmlFor="message">messsage</label><br />
    
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    <button className='btn btn-dark w-100 mt-3 text-light'>Send Message</button>
    </div>
    <div>
        <img style={{height:'400px'}} className='img-fluid' src={img3} alt="" />
    </div>
</div>

    </>
  )
}

export default Contact