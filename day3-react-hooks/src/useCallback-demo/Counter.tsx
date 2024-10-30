import React, { useCallback, useMemo, useState } from 'react'
import Todos from './Todos';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2', 'Todo 3']);

    // const addTodo = () => {
    //     setTodos([...todos, `new Todo ${todos.length + 1}`]);
    // }

    const addTodo =  useCallback(() => {
        setTodos([...todos, `new Todo ${todos.length + 1}`]);
    }, [todos]);

    // const addTodo = useMemo(() => () => {
    //         setTodos([...todos, `new Todo ${todos.length + 1}`]);
    // }, [todos]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <Todos todos={todos} onAddTodo={addTodo}/>
        </div>
    )
}
