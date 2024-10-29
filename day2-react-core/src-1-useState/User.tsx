import React, { useState } from 'react'

export default function User() {

    const [user, setUser] = useState({ firstname: '', lastname: '', age: 0 });

    const updateUser = () => {
        // user.firstname = 'John';
        // user.lastname = 'Smith';
        // user.age = 20;
        // setUser(user);
        // console.log(user);
        setUser({...user, firstname: 'John', age: 20});
    }


    return (
        <div>
            <p>{user.firstname}, {user.lastname}, {user.age}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )
}
