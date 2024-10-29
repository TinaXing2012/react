import React, { useEffect, useState } from 'react'

export default function TimerComp() {
    // console.log('Timer Component is mounted');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            console.log('inside interval: ', count);
            setCount(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <div>
            <h2>TimerComp: {count}</h2>
        </div>
    );
}
