import React from 'react';
import './Login.css'

function Login() {
    const register = () => {};
    const loginToApp = () => {};

  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large//public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

      <form>
        <input placeholder="Full name(required if registering)" type="text" />
        <input placeholder="Profile pic URL(optional)" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?
        <span className="login__register" onClick={register}>Resgiter Now</span>
      </p>
    </div>
  )
}

export default Login
