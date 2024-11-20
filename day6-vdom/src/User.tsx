import { useState } from "react"

export default function User() {

    const [users, setUsers] = useState([
        { id: "id10001", name: 'John Smith' },
        { id: "id10002", name: 'Edward Doe' }
    ]);

    const addUser = () => {
        setUsers([{ id: 'id100'+users.length + 1, name: `New User` }, ...users])
    }

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {
                    users.map((u, index) => <li key={u.id}>{u.id}, {u.name}<input /></li>)
                }
            </ul>
            <button onClick={addUser}>Add new User</button>
        </div>
    )
}
