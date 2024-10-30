import React, { memo } from 'react'

type PropsType = {
    todos: string[];
    onAddTodo: () => void;
}

function Todos({todos, onAddTodo}: PropsType) {
    console.log('Todos Component is being re-rendered...');
    return (
        <>
            <ul>
                {
                    todos.map((todo, index) => <li key={index}>{todo}</li>)
                }
            </ul>
            <button onClick={onAddTodo}>Add new Todo</button>
        </>
    );
};

export default memo(Todos);
