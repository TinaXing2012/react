import React, { FormEvent, useRef } from 'react'

export default function UncontrolledComp() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLTextAreaElement>(null);

    const formHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(nameRef.current?.value, emailRef.current?.value, bioRef.current?.value);
    }

    return (
        <>
            <h2>Sign up</h2>
            <form onSubmit={formHandler}>
                <p>
                    <label>Name</label>
                    <input type='text' ref={nameRef} />
                </p>
                <p>
                    <label>Email</label>
                    <input type='email' ref={emailRef} />
                </p>
                <p>
                    <label>Bio</label>
                    <textarea ref={bioRef}></textarea>
                </p>
                <button>Submit</button>
            </form>
        </>
    )
}
