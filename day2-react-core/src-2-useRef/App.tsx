import React, { useRef } from 'react'

export default function App() {

  const inputRef = useRef<HTMLInputElement>(null);

  const search = () => {
    console.log(inputRef.current?.value);
    inputRef.current!.value = '';
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder='please enter keyword' />
      <button onClick={search}>Search</button>
    </div>
  )
}
