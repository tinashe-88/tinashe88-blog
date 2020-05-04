import React from 'react'

import styled from 'styled-components'

const BackDrop = props => (
  <BackDropContainer onClick={props.click}/>
)


const BackDropContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
  z-index: 100;
  top: 0;
  left: 0;
`

export default BackDrop