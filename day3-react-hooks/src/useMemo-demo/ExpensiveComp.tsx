import React, { memo, useMemo, useState } from 'react'

function ExpensiveComp({ num }: { num: number }) {
    const [count, setCount] = useState(0);
    // console.log('Expensive Comp is being re-rendered');

    // const computeValue = () => {
    //     console.log('compute value is calculated again');
    //     let result = 0;
    //     for (let i = 0; i < 100000000; i++) {
    //         result += i * num;
    //     }
    //     return result;
    // }

    const computeValue = useMemo(() => {
        console.log('compute value is calculated again');
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += i * num;
        }
        return result;
    }, [num]);

    return (
        <>
            <h1>Count inside ExpensiveComp: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Count+1</button>
            <div>ExpensiveComp: {computeValue}</div>
        </>
    )
}

export default memo(ExpensiveComp);
