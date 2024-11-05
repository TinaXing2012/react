import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import { Todo } from './types';

import './App.css';

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = useCallback(async () => {
    const response = await fetch('http://localhost:3000/list');
    if (response.ok) {
      const data = await response.json();
      setTodos(data);
    } else {
      // handle for error
      throw new Error(`Couldn't fetch Default TODO List`);
    }

  }, []);

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: nanoid(), name: todo, done: false }]);
  }

  const updateTodo = (todo: Todo) => {
    const index = todos.findIndex(td => td.id === todo.id);
    todos[index] = todo;
    setTodos([...todos]);
  }

  const deleteTodo = (id: number | string) => {
    // const index = todos.findIndex(td => td.id === id);
    // todos.splice(index, 1);
    // setTodos([...todos]);
    setTodos(todos.filter(td => td.id !== id));
  }

  const updateTodoAll = (checked: boolean) => {
    // const updated = todos.map(td => { td.done = checked; return td; });
    const updated = todos.map(td => ({ id: td.id, name: td.name, done: checked }));
    setTodos(updated);
  }

  const deleteFinishedTodos = () => {
    setTodos(todos.filter(td => !td.done));
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onAddTodo={addTodo} />
        <List todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} />
        <Footer todos={todos} onUpdateTodoAll={updateTodoAll} onDeleteFinishedTodos={deleteFinishedTodos}/>
      </div>
    </div>
  )
}
