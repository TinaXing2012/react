import React, { useReducer } from 'react'

interface User {
    id: number;
    name: string;
}

type StateType = {
    isFirst: boolean;
    isLoading: boolean;
    users: User[];
    error: string;
}

type ActionType = {
    type: string;
    payload?: any;
}

const initialState = {
    isFirst: true,
    isLoading: false,
    users: [],
    error: ''
}
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, isFirst: false, isLoading: true };
        case FETCH_USERS_SUCCESS:
            return { ...state, isFirst: false, isLoading: false, users: action.payload };
        case FETCH_USERS_FAILURE:
            return { ...state, isFirst: false, isLoading: false, error: action.payload };
        default:
            return state;
    }
}

export default function UserReducerComp() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchUser = async () => {
        try {
            dispatch({ type: FETCH_USERS_REQUEST });
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            dispatch({ type: FETCH_USERS_SUCCESS, payload: result });
        } catch (e) {
            dispatch({ type: FETCH_USERS_FAILURE, payload: 'Whoops!' });
        }
    }

    const { isFirst, isLoading, error, users } = state;
    return (
        <>
            <h1>Click button below to fetch User</h1>
            <button onClick={fetchUser}>Fetch Users</button>
            {
                isFirst ? '' :
                    isLoading ? <p>Loading</p> :
                        error ? <p>{error}</p> :
                            users.length === 0 ? <p>No user found!</p> :
                                <ul>
                                    {
                                        users.map(({ id, name }: User) => <li key={id}>{id}, {name}</li>)
                                    }
                                </ul>

            }
        </>
    )
}
