import React from 'react'
import styled from 'styled-components';

export default function Privacy() {
  return (
    <TermWrapper>
    <div className="dv">

    <h3 className="warn">WARNING!!! THIS IS A CLASS PROJECT (NOT A REAL WEBSITE)............DO NOT MAKE PURCHASE!!!</h3>
     <br/>
  
      <h2>We will not share your personal information with any outside parties. </h2>
      <hr/>
      <h2>All orders are placed on a secure server. Any information that we collect from our visitors in our store or online will be kept anonymously and used solely for our statistical purposes to help us improve the shopping experience for our customers.</h2> 
      <hr/>
      <h2>If you have any privacy concerns, please contact us at <span className="email">privacy@teahouse.com.</span> </h2>
      <hr/>
     
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
.email{
  color:blue;
}
.letter{
  font-style: italic;
}
.th{
  color:red;
}
.warn{
  color:red;
}
`
