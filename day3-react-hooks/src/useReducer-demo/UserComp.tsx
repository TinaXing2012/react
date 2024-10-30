import React, { useState } from 'react'

interface User {
    id: number;
    name: string;
}

export default function UserComp() {
    const [isFirst, setIsFirst] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');

    const fetchUser = async () => {
        try {
            setIsFirst(false);
            setIsLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/usersfdafdsaf');
            const result = await response.json();
            setUsers(result);
        } catch (e) {
            setError('Whoops!');
        } finally {
            setIsFirst(false);
            setIsLoading(false);
        }
    }

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
