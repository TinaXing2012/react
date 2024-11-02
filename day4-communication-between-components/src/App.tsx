import React from 'react'
import Parent from './parent-to-child/Parent'
import Father from './child-to-parent/Father'
import Baba from './two-silblings-refactored/Baba'
import A from './pub-sub/A'
import B from './pub-sub/B'
import A2 from './pub-sub/A2'
// import Baba from './two-silblings/Baba'

export default function App() {
  return (
    <div>
      {/* <Parent /> */}
      {/* <Father /> */}
      {/* <Baba /> */}
      <A2 />
      <B />
    </div>
  )
}
