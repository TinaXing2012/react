import React, { useState } from 'react'
import Channels from './useEffect-demo/Channels'
import Logger from './useEffect-demo/Logger'
import Counter from './useEffect-demo/Counter'
import TimerComp from './useEffect-demo/TimerComp';

export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {/* <Channels /> */}
      {/* <Logger/> */}
      {/* <Counter /> */}
      {toggle && <TimerComp />}
      {/* {toggle ? <TimerComp />: ''} */}
    </div>
  )
}
