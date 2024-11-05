import { useState, KeyboardEvent, useRef } from 'react';
import './index.css';

type PropsType = {
    onAddTodo: (todo: string) => void;
}

export default function Header({ onAddTodo }: PropsType) {
    const inputRef = useRef<HTMLInputElement>(null);

    const keyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const todo = inputRef.current?.value.trim();
            if (todo) {
                onAddTodo(todo);
                inputRef.current!.value = '';
            } else {
                alert('Todo cannot be empty');
            }
        }
    }

    return (
        <div className="todo-header">
            <input
                type="text"
                placeholder="Enter task name"
                ref={inputRef}
                onKeyUp={keyUpHandler}
            />
        </div>
    )
}
