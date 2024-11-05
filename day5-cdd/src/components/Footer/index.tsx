import { ChangeEvent } from 'react';
import { Todo } from '../../types';
import './index.css';

type PropsType = {
    todos: Todo[];
    onUpdateTodoAll: (checked: boolean) => void;
    onDeleteFinishedTodos: () => void;
}

export default function Footer({ todos, onUpdateTodoAll, onDeleteFinishedTodos }: PropsType) {

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onUpdateTodoAll(e.target.checked);
    }

    return (
        <div className="todo-footer">
            <label>
                <input
                    type="checkbox"
                    checked={todos.filter(td => td.done).length === todos.length && todos.length !== 0}
                    onChange={changeHandler} />
            </label>
            <span>
                <span>Finished {todos.filter(td => td.done).length}</span> / Total {todos.length}
            </span>
            <button className="btn btn-danger" onClick={onDeleteFinishedTodos}>Delete Finished Tasks</button>
        </div>
    )
}
