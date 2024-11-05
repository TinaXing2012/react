import { Todo } from '../../types';
import Item from '../Item';
import './index.css';

type PropsType = {
    todos: Todo[]
    onUpdateTodo: (todo: Todo) => void;
    onDeleteTodo: (id: number | string) => void;
}

export default function List({ todos, onUpdateTodo, onDeleteTodo }: PropsType) {
    return (
        <ul className="todo-main">
            {
                // todos.map(todo => <Item key={todo.id} todo={todo}/>)
                todos.map(todo => <Item
                    key={todo.id}
                    {...todo}
                    onUpdateTodo={onUpdateTodo}
                    onDeleteTodo={onDeleteTodo} />)
            }
        </ul>
    )
}
