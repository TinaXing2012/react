export default function App() {

  const clickHandler = (name: string): void => {
    console.log(`Hello from ${name}`);
  }

  const clickHandler2 = (name: string) => () => {
    console.log(`Hello from ${name}!!!`);
  }


  return (
    <div>
      <button onClick={() => clickHandler('Tina')}>Click me</button>
      <button onClick={clickHandler2('Miss Xing')}>Click me 2</button>
    </div>
  )
}

