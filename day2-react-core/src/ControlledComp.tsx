import React, { ChangeEvent, FormEvent, useState } from 'react'

interface User {
    name: string;
    email: string;
    bio: string;
}

export default function ControlledComp() {

    const [user, setUser] = useState<User>({name: '', email:'', bio: ''});

    const formHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(user);
    }

    // const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setUser({...user, name: e.target.value});
    // }

    // const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setUser({...user, email: e.target.value});
    // }

    // const bioChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setUser({...user, bio: e.target.value});
    // }

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const {name, email, bio} = user;
    return (
        <>
            <h2>Sign up</h2>
            <form onSubmit={formHandler}>
                <p>
                    <label>Name</label>
                    <input type='text' name="name" value={name} onChange={changeHandler}/>
                </p>
                <p>
                    <label>Email</label>
                    <input type='email' name="email" value={email} onChange={changeHandler}/>
                </p>
                <p>
                    <label>Bio</label>
                    <textarea name="bio" value={bio} onChange={changeHandler}></textarea>
                </p>
                <button>Submit</button>
            </form>
        </>
    )
}
