import React from 'react'
import styled from 'styled-components';

export default function Terms_Conditions() {
  return (
    <TermWrapper>
      <div className="dv">

      <div className ="text">
      <h3>By accessing <span className="th">Tea House</span> website, you are consenting to our <span className="letter">Terms of Use </span>as well as our <span className="letter"> Privacy Policy </span>. If you do not agree to <span className="letter">Terms of Use </span>, please do not use the site. </h3>
      <hr/>
      <h3> If you have any questions, feel free to contact us at: <span className="email">privacy@teahouse.com. </span>  </h3>
      <hr/>
      <h3> Tea House has a strict policy for handling customer information. The information you provide to <span className="th">Tea House</span> is confidential and protected. We will not disclose or distribute customer information to third parties without prior written consent by the customers. </h3>
      <hr/>
      <h3>You may not use logo and trademarks without permission from Tea House. We reserve the right to investigate suspected violations of this Agreement. </h3>

      </div>

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
`