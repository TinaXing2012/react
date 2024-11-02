import React, { useState, createContext } from 'react'
import Parent from './parent-to-child/Parent'
import Father from './child-to-parent/Father'
import Baba from './two-silblings-refactored/Baba'
import A from './pub-sub/A'
import B from './pub-sub/B'
import A2 from './pub-sub/A2'
import Home from './multi-level-refactored2/Home'
// import Baba from './two-silblings/Baba'

import ThemeContext, { ThemeProvider } from './multi-level-refactored2/context/ThemeContext'


export default function App() {

  
  return (
    <ThemeProvider>
      <div>
        {/* <Parent /> */}
        {/* <Father /> */}
        {/* <Baba /> */}
        {/* <A2 />
       <B /> */}
        <Home />
      </div>
      </ThemeProvider>
  )
}
