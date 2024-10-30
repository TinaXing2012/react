import { count } from "console";
import { useReducer } from "react";

type StateType = {
    count: number;
}

type ActionType = {
    type: string;
    payload?: number;
}

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + (action.payload || 1) };
        case 'DECREMENT':
            return { ...state, count: state.count - action.payload! };
        case 'RESET':
            return {...state, count: 0};
        default:
            return state;
    }
}

const initialState: StateType = {
    count: 10
}

export default function ReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>ReducerHook: {state.count}</div>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: 5})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT', payload: 2})}>Descrement</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </>
    )
}
