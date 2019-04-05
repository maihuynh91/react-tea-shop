import React from 'react';
import styled from 'styled-components';

export default function AboutUs() {
  return (

  <TermWrapper>
  <div className="dv">
      <h1>WARNING!!! THIS IS A CLASS PROJECT (NOT A REAL WEBSITE)......DO NOT MAKE PURCHASE!!!     </h1>
      <hr/>
      <h2>Established in 2015, Tea House is a tea importer and seller. We partner with farmers and suppliers all over the world to carefully blend our all-natural teas to take you on wonderfully tea journeys.</h2> 
  <hr/>
       <h2>We are happy to provide our customers the most exceptional whole tea leaves and natural ingredients </h2>
       <hr/> 
        <h2 className="mission"> "Our mission is to make sure you get the best tasting cup of tea possible."</h2>
        
      
      </div>
      

  </TermWrapper>
  )
}

  
const TermWrapper = styled.div`
.dv{
  padding: 4em;
  background: papayawhip;
}

.text{
  color: black;
  font-weight: bold;
}

.mission{
  font-style: italic;
  font-weight: bold;
  color:rgb(0,153,153)
}
.th{
  color:red;

}
`
