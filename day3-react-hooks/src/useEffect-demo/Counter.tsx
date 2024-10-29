import React, { ChangeEvent, useEffect, useState } from 'react'

export default function Counter() {
    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);
    const [address, setAddress] = useState({street: '123 Main St', city: 'Fairfield'});

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNum(Number(e.target.value));
        // setCount(Number(e.target.value) + 1);
    }

    useEffect(() => {
        setCount(num + 1);
    }, [num]);

    return (
        <div>
            <input type='number' value={num} onChange={inputChangeHandler} />
            <hr />
            Count: {count}

            <hr/>
            {address.street}, {address.city}
            <button onClick={() => setAddress({...address, street: address.street + num})}>Change Address</button>
        </div>
    )
}
