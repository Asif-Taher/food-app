import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase.init";

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // Redirect or do something with the logged-in user
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  return (
    <div className='login'>
      <div className="login-container">
        <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email: </label>
          <input type="email" name="email" id="" placeholder='Email' value={email} onChange={handleEmailChange} />
          <label>Password: </label>
          <input type="password" name="password" id="" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Login</button>
        </form>
        <p className='error'>{error}</p>
        <p className='already-login'>if you dont have account <span><Link to='/signIn'>Please Signup</Link></span></p>
      </div>
    </div>
  )
}
