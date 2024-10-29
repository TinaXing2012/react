import React, { useEffect, useState } from 'react'

export default function Logger() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Inside useEffect...');
        return () => {
            console.log('clean up useEffect...');
        }
    });

    return (
        <div>
            Count: {count} <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}
