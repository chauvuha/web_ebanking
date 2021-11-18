import React, { useState } from 'react'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/mdc-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import LoginForm from './Loginform';

function Login() {
  const [user, setUser] = useState({ name: "", email: "" })

  const Login = details => {
    console.log(details)
    setUser({
      name: details.name,
      email: details.email,
      password: details.password
    })
  }

  const Logout = () => {
    console.log("Log out")
    setUser({ name: "", email: "" })
  }

  return (
    <div className="App m-auto">
        {(user.email != "" && user.name != "" && user.password != "") ? (
          <div className="welcome flex flex-column w-5 m-auto bg-indigo-50 p-5 mt-6 mb-6">
            <h2>Welcome, <span>{user.name}</span></h2>
            <Button label="Log out" onClick={Logout} />
          </div>
        ) : (
          <LoginForm Login={Login} />
        )}
      </div>
  );
}

export default Login
