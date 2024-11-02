import React, { useState } from 'react';
import PubSub from 'pubsub-js';

export default function A() {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count + 3);
        PubSub.publish('CountFromA', count);
    }

    return (
        <div>
            <h2>A: {count} </h2>
            <button onClick={() => setCount(prev => prev + 2)}>+2</button>
            <button onClick={() => PubSub.publish('CountFromA', count)}>Publish to B</button>
            <button onClick={clickHandler}>+3 and Publish to B - not working well</button>
        </div>
    )
}
