import { useState } from 'react';
import SiblingA from './SiblingA'
import SiblingB from './SiblingB'

export default function Baba() {
    const [num, setNum] = useState(0);

    const getCount = (count: number) => {
        console.log('count in Baba, ', count);
        setNum(count);
    }

    return (
        <div>
            <h1>Father</h1>
            <SiblingA onGetCount={getCount}/>
            <SiblingB num={num}/>
        </div>
    )
}
