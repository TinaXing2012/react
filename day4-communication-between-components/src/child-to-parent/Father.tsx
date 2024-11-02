import React, { useState } from 'react'
import Son from './Son'

export default function Father() {

    const [num, setNum] = useState(0);

    const getData = (data: number) => {
        console.log('In Father Component: ', data);
        setNum(data);
    }

    return (
        <div>
            <h1>Father: {num}</h1>
            <Son onGetData={getData} />
        </div>
    )
}
