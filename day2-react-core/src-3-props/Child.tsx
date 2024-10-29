import { ReactElement, ReactNode } from "react";

type PropsType = {
    name: string;
    age: number;
    user: {
        fname: string;
        lname: string;
    },
    fruit: string[];
    cb: () => void;
    count: number;
    children: ReactElement;
}

export default function Child(props: PropsType) {
    const { name, age, user: { fname, lname }, fruit, cb, count, children} = props;
    return (
        <div>
            {children}
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>User: {fname}, {lname}</p>
            <ul>
                {fruit.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button onClick={cb}>Click to invoke callback</button>
            <h2>Count in child: {count}</h2>
        </div>
    )
}
