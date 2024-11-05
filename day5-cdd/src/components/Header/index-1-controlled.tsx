import { useState, KeyboardEvent } from 'react';
import './index.css';

type PropsType = {
    onAddTodo: (todo: string) => void;
}

export default function Header({onAddTodo}: PropsType) {
    const [todo, setTodo] = useState('');

    const keyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            if (todo.trim()) {
                onAddTodo(todo.trim());
                setTodo('');          
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
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyUp={keyUpHandler}
            />
        </div>
    )
}
