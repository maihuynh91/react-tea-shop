import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Shipping() {
  return (
    <div className="card flex-row flex-wrap  align-items-center">
 
        <div className="card-header border-0">
            <img src="img/shipping2.jpg" alt="shipping" width="380px" height="400px"/>
        </div>
        <div className="card-block px-0">
        <div className="container">
            <h3 className="card-title">Shipping Information</h3>
            <p>Orders will be shipped from our warehouse on the following business day (Monday–Friday) after payment is verified.</p>
           <hr/>
            <h3> Within U.S shipping: </h3>
            <p >Shipping costs are $3.00 flat rate for all order under $40 and FREE shipping for all orders $40 or more </p>
            <p >Shipping Method:  UPS . Usually within 1-2 business days – and it can take between 3 and 7 days for your product to reach you.  </p>
            <hr/>
            <h3>International shipping:</h3>
            <p> Shipping costs are $11.00 flat rate for all orders. </p>
      <p>Shipping Method: USPS (Priority Mail International). Delivery may take up to 10 days. </p>
            <hr/>
      <h5>Customers pay via debit card, credit card directly or through our partner PayPal. </h5>
        </div>
        <div className="w-100"></div>
        </div>
    </div>
  )
}