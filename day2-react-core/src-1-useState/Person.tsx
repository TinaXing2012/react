import React, { useState } from 'react'

interface Person {
    name: string;
    address: string;
}

export default function Person() {

    const [person, setPerson] = useState<Person | null>(null);

    return (
        <div>
            {person?.name}, {person?.address}
            <button onClick={() => setPerson({name: 'Edward', address: 'US'})}>Update Person</button>
        </div>
    )
}
