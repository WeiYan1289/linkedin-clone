import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const auth = getAuth();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch(error => alert(error.message));
  };

  
  const register = () => {
    if(!name){
      return alert("Please enter a full name!")
    }
     createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profilePic,
      }).then(() => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic,
          })
        );
      });
     }).catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large//public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

      <form>
        <input 
          placeholder="Full name(required if registering)" 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)}
        />

        <input 
          placeholder="Profile pic URL(optional)" 
          type="text"  
          value={profilePic} 
          onChange={e => setProfilePic(e.target.value)}
        />

        <input 
          placeholder="Email" 
          type="text" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />

        <input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?
        <span className="login__register" onClick={register}>Resgiter Now</span>
      </p>
    </div>
  )
}

export default Login
