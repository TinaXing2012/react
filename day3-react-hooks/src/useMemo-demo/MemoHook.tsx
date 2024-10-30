import React, { useState } from 'react'
import ExpensiveComp from './ExpensiveComp';

export default function MemoHook() {


    const [num, setNum] = useState(0);

    return (
        <div>
           
            <button onClick={() => setNum(num+1)}>Num+1</button>
            <ExpensiveComp num={num}/>
        </div>
    )
}
