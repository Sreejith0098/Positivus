import React from 'react'
import './Testimonials.css'
const Testimonials = () => {
  return (
    <div className="testimonials mt-5 ">

    <div className="testimonial-box">
      <p>
        “We have been working with Positivus for the past year and have seen a significant
        increase in website traffic and leads as a result of their efforts. The team is
        professional, responsive, and truly cares about the success of our business. We
        highly recommend Positivus to any company looking to grow their online presence.”
      </p>
      <div className="author">
        <h4>John Smith</h4>
        <p>Marketing Director at XYZ Corp</p>
      </div>
    </div>

    <div className="testimonial-bottom">
      <i className="fa-solid fa-arrow-left arrow"></i>

      <div className="dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <i className="fa-solid fa-arrow-right arrow"></i>
    </div>
   
  </div>
  )
}

export default Testimonials