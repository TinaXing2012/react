import React, { useState } from 'react'



export default function Son({ onGetData }: { onGetData: (data: number) => void }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Son: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => onGetData(count)}>Send data from Son to Father</button>
        </div>
    );
}
