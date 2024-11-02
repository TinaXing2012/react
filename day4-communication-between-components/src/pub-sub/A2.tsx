import React, { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';

export default function A2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        PubSub.publish('CountFromA', count);
    }, [count]);

    return (
        <div>
            <h2>A2: {count} </h2>
            <button onClick={() => setCount(prev => prev + 2)}>+2</button>      
        </div>
    )
}
