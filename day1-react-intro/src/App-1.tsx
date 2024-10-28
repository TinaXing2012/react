export default function App() {
  
  function clickHanlder1() {
    console.log(`I'm being clicked! 1`);
  }

  const clickHandler2 = () => {
    console.log(`I'm being clicked! 2`);
  }

  const clickHandler3 = function() {
    console.log(`I'm being clicked! 3`);
  }

  return (
    <div>
      <h1 style={{color: 'red'}}>Hello from React! </h1>
      <button onClick={clickHanlder1}>Click Me 1</button>
      <button onClick={clickHandler2}>Click Me 2</button>
      <button onClick={clickHandler3}>Click Me 3</button>
      <button onClick={() => console.log(`I'm being clicked 4!`)}>Click Me 4</button>
    </div>
  );

}