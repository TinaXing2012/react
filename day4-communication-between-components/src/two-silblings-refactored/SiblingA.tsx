import React, { useState } from 'react'

export default function SiblingA({ count,  onSetCount}: { count: number, onSetCount: (count: number) => void }) {
   
    return (
        <div>
            <h1>SiblingA: {count}</h1>
            <button onClick={() => onSetCount(count + 5)}>+5</button>
        </div>
    )
}
