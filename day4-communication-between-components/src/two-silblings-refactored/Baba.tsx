import { useState } from 'react';
import SiblingA from './SiblingA'
import SiblingB from './SiblingB'

export default function Baba() {
    const [count, setCount] = useState(0);
 
    return (
        <div>
            <h1>Father</h1>
            <SiblingA count={count} onSetCount={setCount}/>
            <SiblingB num={count}/>
        </div>
    )
}
