import React from 'react'
import styled from 'styled-components';
import { MDBIcon} from "mdbreact";
export default function Help() {
  return (
    <TermWrapper>
     <div className="dv">
         <br/>
     
      <h1>Please contact us if you need any questions</h1>
      <br/>
        <h3>Email Support : customers@teahouse.com (we will response you within 24 hours)</h3>
        <br/>
        <h3>To reach someone by phone: 515-123-4567  (9AM-9PM all days)</h3> 
        <br/>
        <h3>Fax: 123-456-7890</h3>
    <br/>
    
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
