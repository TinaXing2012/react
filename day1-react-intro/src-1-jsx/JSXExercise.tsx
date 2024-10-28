export default function JSXExercise(){
    const fruit = ['apple', 'banana', 'orange'];

    return (
        <div>
            <h2>Fruit</h2>
            <ul>
                {fruit.map(f => <li key={f}>{f}</li>)}
            </ul>
        </div>
    )
}