import { ReactNode } from "react";

type PropsType = {
    count: number;
    name: string;
    fn: () => void;
    children: ReactNode;
}

export default function Child(props: PropsType) {
    const { count, name, fn, children} = props;
    return (
        <div>
            <h2>Child: {count}</h2>
            <p>{name}</p>
            <button onClick={fn}>Callback fn clicked</button>
            <br />
           {children}
        </div>
    )
}
