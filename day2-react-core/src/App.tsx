import React, { useRef, useState } from 'react'
import ControlledComp from './ControlledComp'
import UncontrolledComp from './UncontrolledComp'

export default function App() {



  return (
    <div>
     <ControlledComp/>
     <hr/>
     <UncontrolledComp/>
    </div>
  )
}
