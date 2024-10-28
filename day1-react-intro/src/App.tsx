import React, { MouseEvent } from 'react'

export default function App() {

    const clickHandler = (name: string, e: MouseEvent<HTMLButtonElement>) => {
        console.log(`Hello from ${name}`);
        console.log(e.target);
    }

    return (
        <div>
            <button onClick={e => clickHandler('Tina', e)}>Click Me</button>
        </div>
    )
}
