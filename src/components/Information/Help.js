import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Help() {
  return (
    <div className="card flex-row flex-wrap  align-items-center">
 
        <div className="card-header border-0">
            <img src="img/contact.jpg" alt="contact" width="350px" height="400px"/>
        </div>
        <div className="card-block px-0">
        <div className="container">
            <h1 className="card-title">Please contact us if you need any questions</h1>
      <br/>
        <h3>Email: customers@teahouse.com (we will response you within 24 hours)</h3>
        <br/>
        <h3>To reach someone by phone: 515-123-4567  (9AM-9PM all days)</h3> 
        <br/>
        <h3>Fax: 123-456-7890</h3>
        </div>
        <div className="w-100"></div>
        </div>
    </div>
  )
}