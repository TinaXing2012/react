import { useState } from 'react';
import { Todo } from '../../types';
import './index.css';

type PropsType = {
    id: number | string;
    name: string;
    done: boolean,
    onUpdateTodo: (todo: Todo) => void;
    onDeleteTodo: (id: number | string) => void;
}

export default function Item({ id, name, done, onUpdateTodo, onDeleteTodo }: PropsType) {

    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={() => onUpdateTodo({id, name, done: !done})} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
    )
}
