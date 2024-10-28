import Counter from './Counter';
import JSXExercise from './JSXExercise';

import './App.css';

export default function App() {
  const counter = 123;

  const sum = (num1: number, num2: number) => num1 + num2;
  const isActive = false;

  return (
    <div className='container'>
      <h1 style={{color: 'red'}}>Hello from React! </h1>
      {/* {} ->Expression not statements */}
      <p>Counter: {counter}</p>
      <p>{2 + 5}</p>
      <p>{sum(2, 7)}</p>
      <p>{0 ? 'See me on page' : 'not display on page'}</p>
      <p>{isActive && 'See me on page if isActive is true'}</p>
      <hr/>
      <Counter />
      {/* This is a comment */}
      <JSXExercise />
    </div>
  );

}