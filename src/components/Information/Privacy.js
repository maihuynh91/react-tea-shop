import React from 'react'
import styled from 'styled-components';

export default function Privacy() {
  return (
    <TermWrapper>
    <div class="card" >
      <img src="img/privacy_policy.jpg" class="card-img-top" alt="image" height="200px" width="600px"/>
      <div class="card-body">
 
      <h2>We will not share your personal information with any outside parties. </h2>
      <hr/>
      <h2>All orders are placed on a secure server. </h2>
      <hr/>
        <h2>Any information that we collect from our visitors in our store or online will be kept anonymously and used solely for our statistical purposes to help us improve the shopping experience for our customers.</h2> 
      <hr/>
      <h2>If you have any privacy concerns, please contact us at <span className="email">privacy@teahouse.com.</span> </h2>
    </div>
    </div>
    </TermWrapper>
  )
}

const TermWrapper = styled.div`
.{
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
