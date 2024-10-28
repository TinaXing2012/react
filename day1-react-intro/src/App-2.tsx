import { MouseEvent } from "react";

export default function App() {
  

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(`I'm being clicked! 2`);
    console.log(event.target);
  }

  return (
    <div>
      <h1 style={{color: 'red'}}>Hello from React! </h1>
      
      <button onClick={clickHandler}>Click Me</button>
      <p onClick={(e: MouseEvent<HTMLParagraphElement>) => console.log(e)}>This is a p.</p>
     
    </div>
  );

}