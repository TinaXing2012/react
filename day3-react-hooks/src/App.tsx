import React, { useState } from 'react'
import Channels from './useEffect-demo/Channels'
import Logger from './useEffect-demo/Logger'
import Counter from './useEffect-demo/Counter';
import TimerComp from './useEffect-demo/TimerComp';
import CallbackCounter from './useCallback-demo/Counter';
import Parent from './default-render-demo/Parent';
import MemoHook from './useMemo-demo/MemoHook';
import ReducerHook from './useReducer-demo/ReducerHook';
import UserComp from './useReducer-demo/UserComp';
import UserReducerComp from './useReducer-demo/UserReducerComp';

export default function App() {
  // const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
      {/* <Channels /> */}
      {/* <Logger/> */}
      {/* <Counter /> */}
      {/* {toggle && <TimerComp />} */}
      {/* {toggle ? <TimerComp />: ''} */}
      {/* <CallbackCounter/> */}
      {/* <Parent/> */}
      {/* <MemoHook /> */}
      {/* <ReducerHook /> */}
      {/* <UserComp /> */}
      <UserReducerComp />
    </div>
  )
}
