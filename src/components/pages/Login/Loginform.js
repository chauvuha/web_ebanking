import React, { useState, useEffect } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/mdc-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';


function LoginForm({ Login }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    useEffect(() => {
        document.title = details.name;
    })

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
        console.log([e.target.name])
        console.log([e.target.value])
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="flex flex-column w-5 m-auto bg-indigo-50 p-5 mt-6 mb-6">
                <div className="card bg-" >
                    <h2>Login</h2>
                    <div className="field">
                        <label htmlFor="name">Name:</label>
                        <InputText required
                            name="name"
                            type="text"
                            id="name"
                            onChange={changeHandler}
                            value={details.name}
                            className="inputfield w-full" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        <InputText required
                            name="email"
                            type="text"
                            id="email"
                            value={details.email}
                            onChange={changeHandler}
                            className="inputfield w-full" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password:</label>
                        <InputText required
                            name="password"
                            type="text"
                            id="password"
                            onChange={changeHandler}
                            value={details.password}
                            className="inputfield w-full" />
                    </div>
                    <Button label="Log in" type="submit" value="Login" />
                </div>
            </form>

        </div>
    );
}

export default LoginForm;